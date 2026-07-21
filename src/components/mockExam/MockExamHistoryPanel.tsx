"use client";

import { useEffect, useState } from "react";
import { MOCK_EXAM_INDEX } from "@/content/mockExam";
import { listMockExamHistory } from "@/lib/mockExamHistory";
import type { MockExamHistorySummary, TcoDomain } from "@/lib/mockExamHistoryTypes";
import { UNAVAILABLE_MOCK_EXAM_HISTORY } from "@/lib/mockExamHistoryTypes";
import { TCO_TARGET_ITEMS_185 } from "@/lib/tcoDomainModules";

const TCO_LABEL: Record<TcoDomain, string> = {
  A: "A — Foundations / philosophy",
  B: "B — Concepts & principles",
  C: "C — Measurement & interpretation",
  D: "D — Experimental design",
  E: "E — Ethics & professionalism",
  F: "F — Behavior assessment",
  G: "G — Behavior-change procedures",
  H: "H — Selecting & implementing interventions",
  I: "I — Personnel supervision & management",
};

/** Shared with MockExamRunner — approximate TCO weights for study planning. */
const TCO_TARGET_ITEMS: Record<TcoDomain, number> = TCO_TARGET_ITEMS_185;

const TCO_TARGET_TOTAL = Object.values(TCO_TARGET_ITEMS).reduce(
  (sum, value) => sum + value,
  0,
);

function moduleTitleFor(moduleId: string): string {
  const match = MOCK_EXAM_INDEX.find((exam) => exam.moduleId === moduleId);
  return match?.title ?? moduleId;
}

function relativeSince(iso: string | null): string {
  if (!iso) return "—";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "—";
  const now = Date.now();
  const deltaMs = Math.max(0, now - then);
  const days = Math.floor(deltaMs / (1000 * 60 * 60 * 24));
  if (days > 0) return `${days}d ago`;
  const hours = Math.floor(deltaMs / (1000 * 60 * 60));
  if (hours > 0) return `${hours}h ago`;
  const mins = Math.max(1, Math.floor(deltaMs / (1000 * 60)));
  return `${mins}m ago`;
}

type Priority = "high" | "medium" | "low" | "n/a";

function priorityFor(row: {
  domain: TcoDomain;
  accuracyPct: number | null;
}): Priority {
  if (row.accuracyPct === null) return "n/a";
  const targetPct = (TCO_TARGET_ITEMS[row.domain] / TCO_TARGET_TOTAL) * 100;
  if (row.accuracyPct < 70 && targetPct >= 10) return "high";
  if (row.accuracyPct < 70) return "medium";
  return "low";
}

function priorityClass(priority: Priority): string {
  if (priority === "high")
    return "text-[color:var(--aba-incorrect)] border-[color:var(--aba-incorrect)]";
  if (priority === "medium") return "text-amber-300 border-amber-300/60";
  if (priority === "low")
    return "text-[color:var(--aba-correct)] border-[color:var(--aba-correct)]";
  return "text-aba-muted border-aba-divider";
}

export function MockExamHistoryPanel() {
  const [history, setHistory] = useState<MockExamHistorySummary | null>(null);

  useEffect(() => {
    let cancelled = false;
    listMockExamHistory()
      .then((result) => {
        if (!cancelled) setHistory(result);
      })
      .catch((err) => {
        console.warn(
          "[MockExamHistoryPanel] Could not load on-device history.",
          err,
        );
        if (!cancelled) setHistory(UNAVAILABLE_MOCK_EXAM_HISTORY);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (history === null) {
    return (
      <section
        aria-label="Cross-exam history"
        className="space-y-3 border border-aba-divider bg-black/25 p-6"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Cross-exam history
        </p>
        <p className="text-[0.85rem] leading-relaxed text-aba-muted">Loading history…</p>
      </section>
    );
  }

  if (!history.ok && history.reason === "db-unavailable") {
    return (
      <section
        aria-label="Cross-exam history"
        className="space-y-3 border border-aba-divider bg-black/25 p-6"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Cross-exam history
        </p>
        <p className="text-[0.85rem] leading-relaxed text-aba-muted">
          On-device storage is unavailable in this environment. Open the app in
          a browser or on your iOS device (private browsing may also block
          IndexedDB) to see cumulative per-domain accuracy across mock-exam
          attempts.
        </p>
      </section>
    );
  }

  if (history.totalItems === 0) {
    return (
      <section
        aria-label="Cross-exam history"
        className="space-y-3 border border-aba-divider bg-black/25 p-6"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Cross-exam history
        </p>
        <p className="text-[0.85rem] leading-relaxed text-aba-muted">
          No mock-exam items have been answered yet. Start a full mock exam below
          and your cumulative per-domain accuracy will appear here across every
          future attempt.
        </p>
      </section>
    );
  }

  const rankedDomains = [...history.domainAggregates].sort((a, b) => {
    const priorityRank: Record<Priority, number> = {
      high: 0,
      medium: 1,
      low: 2,
      "n/a": 3,
    };
    const priorityDiff = priorityRank[priorityFor(a)] - priorityRank[priorityFor(b)];
    if (priorityDiff !== 0) return priorityDiff;
    return a.domain.localeCompare(b.domain);
  });

  const legacyAttemptCount = history.attemptCount - history.attemptsWithSessionId;
  const attemptFootnote =
    legacyAttemptCount > 0
      ? `${history.attemptsWithSessionId} tracked by session id · ${legacyAttemptCount} reconstructed from the pre-session-tracking >60-min gap heuristic.`
      : "Attempts are grouped by a per-exam session id minted when the mock exam begins.";

  return (
    <section
      aria-label="Cross-exam history"
      className="space-y-5 border border-aba-divider bg-black/25 p-6"
    >
      <header className="space-y-1">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Cross-exam history · cumulative
        </p>
        <p className="text-[0.9rem] leading-relaxed text-aba-fg">
          {history.totalItems.toLocaleString()} items answered across{" "}
          {history.attemptCount} mock-exam attempt
          {history.attemptCount === 1 ? "" : "s"} · last activity{" "}
          {relativeSince(history.lastActivityAt)}
        </p>
        <p className="text-[0.72rem] leading-relaxed text-aba-muted/80">
          {attemptFootnote} Priority flags use the same TCO weight-check
          thresholds as the per-exam results screen.
        </p>
      </header>

      <div>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
          By TCO domain · all attempts
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-[0.82rem]">
            <thead>
              <tr className="text-left uppercase tracking-[0.14em] text-aba-muted">
                <th className="border-b border-aba-divider py-2 pr-3">Domain</th>
                <th className="border-b border-aba-divider py-2 pr-3">Items</th>
                <th className="border-b border-aba-divider py-2 pr-3">Correct</th>
                <th className="border-b border-aba-divider py-2 pr-3">Accuracy</th>
                <th className="border-b border-aba-divider py-2 pr-3">Focus</th>
              </tr>
            </thead>
            <tbody>
              {rankedDomains.map((row) => {
                const priority = priorityFor(row);
                return (
                  <tr key={row.domain} className="align-top">
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-fg">
                      {TCO_LABEL[row.domain]}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-muted">
                      {row.total}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-muted">
                      {row.correct}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-muted">
                      {row.accuracyPct === null
                        ? "—"
                        : `${row.accuracyPct.toFixed(0)}%`}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3">
                      <span
                        className={`inline-block rounded border px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${priorityClass(priority)}`}
                      >
                        {priority}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {history.recentAttempts.length > 0 ? (
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
            Recent attempts · newest first
          </p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-[0.82rem]">
              <thead>
                <tr className="text-left uppercase tracking-[0.14em] text-aba-muted">
                  <th className="border-b border-aba-divider py-2 pr-3">Ended</th>
                  <th className="border-b border-aba-divider py-2 pr-3">Exam</th>
                  <th className="border-b border-aba-divider py-2 pr-3">Items</th>
                  <th className="border-b border-aba-divider py-2 pr-3">Accuracy</th>
                  <th className="border-b border-aba-divider py-2 pr-3">Source</th>
                </tr>
              </thead>
              <tbody>
                {history.recentAttempts.map((attempt) => (
                  <tr key={attempt.attemptId} className="align-top">
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-muted">
                      {relativeSince(attempt.endedAt)}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-fg">
                      {moduleTitleFor(attempt.moduleId)}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-muted">
                      {attempt.correct}/{attempt.items}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3 text-aba-muted">
                      {attempt.accuracyPct === null
                        ? "—"
                        : `${attempt.accuracyPct.toFixed(0)}%`}
                    </td>
                    <td className="border-b border-aba-divider py-2 pr-3 text-[0.7rem] uppercase tracking-[0.14em] text-aba-muted/80">
                      {attempt.hasSessionId ? "session id" : "gap heuristic"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {history.perModuleCounts.length > 0 ? (
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
            By exam · cumulative
          </p>
          <ul className="mt-2 flex flex-col gap-px">
            {history.perModuleCounts.map((row) => (
              <li
                key={row.moduleId}
                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-aba-divider py-2 last:border-b-0"
              >
                <span className="text-[0.9rem] text-aba-fg">
                  {moduleTitleFor(row.moduleId)}
                </span>
                <span className="text-[0.78rem] uppercase tracking-[0.14em] text-aba-muted">
                  {row.items} items · {row.attempts} attempt
                  {row.attempts === 1 ? "" : "s"} · {relativeSince(row.lastActivityAt)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
