/** Official BCBA exam: 185 questions in 4 hours (BACB examination information). */
export const BCBA_EXAM_ITEM_COUNT = 185;
export const BCBA_EXAM_TIME_SECONDS = 4 * 60 * 60;

/** Full-length mock exams use the official 4-hour window; shorter sets scale proportionally. */
export function mockExamTimeLimitSeconds(itemCount: number): number {
  if (itemCount >= BCBA_EXAM_ITEM_COUNT) return BCBA_EXAM_TIME_SECONDS;
  return Math.round((itemCount / BCBA_EXAM_ITEM_COUNT) * BCBA_EXAM_TIME_SECONDS);
}

export function formatMockExamTimeLimit(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds);
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = safe % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m}:${s.toString().padStart(2, "0")}`;
}
