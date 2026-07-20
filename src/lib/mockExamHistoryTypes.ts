export type TcoDomain =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I";

export type MockExamHistoryDomainRow = {
  domain: TcoDomain;
  correct: number;
  total: number;
  accuracyPct: number | null;
};

export type MockExamHistoryModuleRow = {
  moduleId: string;
  items: number;
  attempts: number;
  lastActivityAt: string;
};

export type MockExamHistoryAttemptRow = {
  /** Stable session UUID minted client-side, or a synthetic id for legacy rows. */
  attemptId: string;
  moduleId: string;
  startedAt: string;
  endedAt: string;
  items: number;
  correct: number;
  accuracyPct: number | null;
  /** false when this attempt was reconstructed from the >60-minute gap heuristic. */
  hasSessionId: boolean;
};

export type MockExamHistorySummary = {
  ok: boolean;
  reason?: "db-unavailable" | "no-attempts";
  totalItems: number;
  /** Distinct exam attempts across all mock exams. */
  attemptCount: number;
  /** Attempts backed by a real client-generated session id (vs. gap heuristic). */
  attemptsWithSessionId: number;
  domainAggregates: MockExamHistoryDomainRow[];
  perModuleCounts: MockExamHistoryModuleRow[];
  /** Up to 10 most-recent attempts, newest first, for a scan-friendly recent history strip. */
  recentAttempts: MockExamHistoryAttemptRow[];
  lastActivityAt: string | null;
};

export const ORDERED_TCO_DOMAINS: readonly TcoDomain[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
];

export const EMPTY_MOCK_EXAM_HISTORY: MockExamHistorySummary = {
  ok: true,
  reason: "no-attempts",
  totalItems: 0,
  attemptCount: 0,
  attemptsWithSessionId: 0,
  domainAggregates: [],
  perModuleCounts: [],
  recentAttempts: [],
  lastActivityAt: null,
};

export const UNAVAILABLE_MOCK_EXAM_HISTORY: MockExamHistorySummary = {
  ok: false,
  reason: "db-unavailable",
  totalItems: 0,
  attemptCount: 0,
  attemptsWithSessionId: 0,
  domainAggregates: [],
  perModuleCounts: [],
  recentAttempts: [],
  lastActivityAt: null,
};
