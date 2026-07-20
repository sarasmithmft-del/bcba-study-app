"use client";

import { listAttempts } from "@/lib/storage/attemptsStore";
import type {
  MockExamHistoryAttemptRow,
  MockExamHistoryDomainRow,
  MockExamHistoryModuleRow,
  MockExamHistorySummary,
  TcoDomain,
} from "@/lib/mockExamHistoryTypes";
import {
  EMPTY_MOCK_EXAM_HISTORY,
  ORDERED_TCO_DOMAINS,
  UNAVAILABLE_MOCK_EXAM_HISTORY,
} from "@/lib/mockExamHistoryTypes";

/**
 * Legacy rows submitted before session-scoped tracking landed lack an
 * `examSessionId`. For those, consecutive items on the same moduleId separated
 * by more than this gap are treated as separate attempts. Rows that DO carry a
 * session id are grouped by that id directly and bypass the heuristic.
 */
const SESSION_GAP_MS = 60 * 60 * 1000;

/**
 * Cap the query so a runaway history table cannot pull megabytes of rows on the
 * landing page. Older attempts beyond this ceiling are silently ignored.
 */
const HISTORY_ROW_CAP = 5000;

/** Ceiling on the count of most-recent attempts surfaced in the results panel. */
const RECENT_ATTEMPT_LIMIT = 10;

/**
 * Reads mock-exam attempt rows from on-device storage and aggregates them into
 * the summary shape the history panel expects. Pure client code — safe in a
 * static export and in an offline Capacitor build. Returns
 * `UNAVAILABLE_MOCK_EXAM_HISTORY` when running outside a browser (SSR / build)
 * and `EMPTY_MOCK_EXAM_HISTORY` when the user has no attempts yet.
 */
export async function listMockExamHistory(): Promise<MockExamHistorySummary> {
  if (typeof window === "undefined") return UNAVAILABLE_MOCK_EXAM_HISTORY;

  try {
    const stored = await listAttempts({
      kind: "mock_exam_item",
      limit: HISTORY_ROW_CAP,
    });
    if (stored.length === 0) return EMPTY_MOCK_EXAM_HISTORY;

    const rows: RawRow[] = stored.map((row) => ({
      moduleId: row.moduleId,
      score: row.score,
      payload: row.payload,
      createdAt: new Date(row.createdAt),
    }));
    rows.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    return aggregate(rows);
  } catch (err) {
    console.warn(
      "[mockExamHistory] Could not read attempts from device storage.",
      err,
    );
    return UNAVAILABLE_MOCK_EXAM_HISTORY;
  }
}

type RawRow = {
  moduleId: string;
  score: number | null;
  payload: unknown;
  createdAt: Date;
};

type AttemptGroup = {
  attemptId: string;
  hasSessionId: boolean;
  moduleId: string;
  rows: RawRow[];
};

function aggregate(rows: RawRow[]): MockExamHistorySummary {
  const domainMap = new Map<TcoDomain, { correct: number; total: number }>();
  let lastActivityAt: Date = rows[0]!.createdAt;

  for (const row of rows) {
    const domain = extractDomain(row.payload);
    if (domain) {
      const bucket = domainMap.get(domain) ?? { correct: 0, total: 0 };
      bucket.total += 1;
      if ((row.score ?? 0) >= 100) bucket.correct += 1;
      domainMap.set(domain, bucket);
    }
    if (row.createdAt > lastActivityAt) lastActivityAt = row.createdAt;
  }

  const attempts = groupIntoAttempts(rows);
  const attemptsWithSessionId = attempts.filter((a) => a.hasSessionId).length;

  const perModuleCounts = buildPerModuleCounts(attempts);
  const recentAttempts = buildRecentAttempts(attempts);

  const domainAggregates: MockExamHistoryDomainRow[] = ORDERED_TCO_DOMAINS.map(
    (domain) => {
      const bucket = domainMap.get(domain);
      const total = bucket?.total ?? 0;
      const correct = bucket?.correct ?? 0;
      const accuracyPct = total > 0 ? (correct / total) * 100 : null;
      return { domain, correct, total, accuracyPct };
    },
  );

  return {
    ok: true,
    totalItems: rows.length,
    attemptCount: attempts.length,
    attemptsWithSessionId,
    domainAggregates,
    perModuleCounts,
    recentAttempts,
    lastActivityAt: lastActivityAt.toISOString(),
  };
}

function groupIntoAttempts(rows: RawRow[]): AttemptGroup[] {
  const sessionIndexed = new Map<string, AttemptGroup>();
  const legacyByModule = new Map<string, RawRow[]>();

  for (const row of rows) {
    const sid = extractSessionId(row.payload);
    if (sid) {
      const key = `sid:${sid}`;
      const existing = sessionIndexed.get(key);
      if (existing) {
        existing.rows.push(row);
      } else {
        sessionIndexed.set(key, {
          attemptId: sid,
          hasSessionId: true,
          moduleId: row.moduleId,
          rows: [row],
        });
      }
      continue;
    }
    const bucket = legacyByModule.get(row.moduleId) ?? [];
    bucket.push(row);
    legacyByModule.set(row.moduleId, bucket);
  }

  const legacyAttempts: AttemptGroup[] = [];
  for (const [moduleId, moduleRows] of legacyByModule) {
    const sorted = [...moduleRows].sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );
    let currentBucket: RawRow[] = [];
    let attemptIndex = 0;
    for (let i = 0; i < sorted.length; i += 1) {
      const prev = sorted[i - 1];
      const cur = sorted[i]!;
      const startsNewAttempt =
        i === 0 || (prev && cur.createdAt.getTime() - prev.createdAt.getTime() > SESSION_GAP_MS);
      if (startsNewAttempt && currentBucket.length > 0) {
        legacyAttempts.push({
          attemptId: `legacy:${moduleId}:${attemptIndex}`,
          hasSessionId: false,
          moduleId,
          rows: currentBucket,
        });
        attemptIndex += 1;
        currentBucket = [];
      }
      currentBucket.push(cur);
    }
    if (currentBucket.length > 0) {
      legacyAttempts.push({
        attemptId: `legacy:${moduleId}:${attemptIndex}`,
        hasSessionId: false,
        moduleId,
        rows: currentBucket,
      });
    }
  }

  return [...sessionIndexed.values(), ...legacyAttempts];
}

function buildPerModuleCounts(attempts: AttemptGroup[]): MockExamHistoryModuleRow[] {
  const byModule = new Map<string, { items: number; attempts: number; lastActivityAt: Date }>();
  for (const attempt of attempts) {
    const bucket =
      byModule.get(attempt.moduleId) ??
      { items: 0, attempts: 0, lastActivityAt: attempt.rows[0]!.createdAt };
    bucket.items += attempt.rows.length;
    bucket.attempts += 1;
    for (const row of attempt.rows) {
      if (row.createdAt > bucket.lastActivityAt) bucket.lastActivityAt = row.createdAt;
    }
    byModule.set(attempt.moduleId, bucket);
  }
  return [...byModule.entries()]
    .map(([moduleId, bucket]) => ({
      moduleId,
      items: bucket.items,
      attempts: bucket.attempts,
      lastActivityAt: bucket.lastActivityAt.toISOString(),
    }))
    .sort((a, b) => b.items - a.items);
}

function buildRecentAttempts(attempts: AttemptGroup[]): MockExamHistoryAttemptRow[] {
  return attempts
    .map<MockExamHistoryAttemptRow>((attempt) => {
      const sortedRows = [...attempt.rows].sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
      );
      const items = sortedRows.length;
      const correct = sortedRows.reduce(
        (sum, row) => sum + ((row.score ?? 0) >= 100 ? 1 : 0),
        0,
      );
      const accuracyPct = items > 0 ? (correct / items) * 100 : null;
      return {
        attemptId: attempt.attemptId,
        moduleId: attempt.moduleId,
        startedAt: sortedRows[0]!.createdAt.toISOString(),
        endedAt: sortedRows[sortedRows.length - 1]!.createdAt.toISOString(),
        items,
        correct,
        accuracyPct,
        hasSessionId: attempt.hasSessionId,
      };
    })
    .sort((a, b) => new Date(b.endedAt).getTime() - new Date(a.endedAt).getTime())
    .slice(0, RECENT_ATTEMPT_LIMIT);
}

function extractDomain(payload: unknown): TcoDomain | null {
  if (!payload || typeof payload !== "object") return null;
  const raw = (payload as { tcoDomain?: unknown }).tcoDomain;
  if (typeof raw !== "string") return null;
  if ((ORDERED_TCO_DOMAINS as readonly string[]).includes(raw)) {
    return raw as TcoDomain;
  }
  return null;
}

function extractSessionId(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;
  const raw = (payload as { examSessionId?: unknown }).examSessionId;
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  return trimmed.length > 0 ? trimmed : null;
}
