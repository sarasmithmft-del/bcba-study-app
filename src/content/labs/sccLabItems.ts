export type SccLabItem = {
  id: string;
  prompt: string;
  /** Approximate counts across successive calendar weeks (same duration) */
  weeklyCounts: number[];
  options: readonly [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  rationale: string;
};

/**
 * Precision teaching / SCC mini-items.
 * Celeration here is taught as multiplicative change across equal calendar intervals
 * (×2 / week ≈ doubling; ÷2 ≈ halving) — simplified study aid, not a full SCC course.
 */
export const SCC_LAB_ITEMS: SccLabItem[] = [
  {
    id: "scc-01",
    prompt:
      "Weekly correct rates: 4 → 8 → 16 across equal calendar weeks. Which celeration description fits BEST?",
    weeklyCounts: [4, 8, 16],
    options: [
      "×2 celeration (doubling each week)",
      "÷2 celeration (halving)",
      "Flat celeration (no multiplicative change)",
      "Additive +4 only — not multiplicative",
    ],
    correctIndex: 0,
    rationale: "Each week multiplies by 2 (4×2=8, 8×2=16) — classic ×2 / week doubling pattern.",
  },
  {
    id: "scc-02",
    prompt: "Weekly rates: 32 → 16 → 8. BEST description?",
    weeklyCounts: [32, 16, 8],
    options: [
      "×2 acceleration",
      "÷2 deceleration (halving each week)",
      "No change in celeration",
      "Level change without slope",
    ],
    correctIndex: 1,
    rationale: "Each value is half the prior — ÷2 deceleration across equal intervals.",
  },
  {
    id: "scc-03",
    prompt: "Weekly rates stay ~10, 11, 10, 12. On a multiply/divide chart this MOST resembles:",
    weeklyCounts: [10, 11, 10, 12],
    options: [
      "Steep ×10 celeration",
      "Near-flat celeration (little multiplicative change)",
      "÷5 deceleration",
      "Immediate mastery bounce",
    ],
    correctIndex: 1,
    rationale: "Counts hover without systematic doubling/halving — near-flat celeration.",
  },
  {
    id: "scc-04",
    prompt:
      "A learner moves from 5 corrects/minute to about 20 corrects/minute across two equal weeks (5 → 10 → 20). Doubling time is BEST described as:",
    weeklyCounts: [5, 10, 20],
    options: [
      "About one week (rate doubles each week)",
      "About one month",
      "Instantaneous (no calendar time)",
      "Undefined because counts decreased",
    ],
    correctIndex: 0,
    rationale: "×2 each week means doubling time ≈ 1 week under this simplified model.",
  },
  {
    id: "scc-05",
    prompt: "Why do precision teachers prefer multiply/divide (logarithmic) charts for fluency?",
    weeklyCounts: [2, 4, 8, 16],
    options: [
      "Because absolute +1 changes look identical to ×2 changes on those charts",
      "Because equal multiplicative change plots as roughly straight celeration lines, making growth rate comparable across learners",
      "Because SCC charts ban counting corrects",
      "Because only punishment data may be plotted",
    ],
    correctIndex: 1,
    rationale:
      "Log/multiply scales linearize proportional growth so celeration (not just raw level) is visually comparable.",
  },
  {
    id: "scc-06",
    prompt: "Weekly error counts: 16 → 8 → 4 while corrects rise. Error celeration is MOST like:",
    weeklyCounts: [16, 8, 4],
    options: [
      "×2 acceleration of errors",
      "÷2 deceleration of errors (desirable if paired with rising corrects)",
      "Flat errors",
      "IOA failure",
    ],
    correctIndex: 1,
    rationale: "Errors halve weekly — ÷2 deceleration; desirable when corrects accelerate.",
  },
];
