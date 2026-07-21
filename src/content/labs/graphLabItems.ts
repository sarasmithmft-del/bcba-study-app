export type GraphAttribute = "level" | "trend" | "variability" | "overlap";

export type GraphLabItem = {
  id: string;
  attribute: GraphAttribute;
  prompt: string;
  /** Baseline series (session → rate) */
  baseline: number[];
  /** Intervention series */
  intervention: number[];
  options: readonly [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  rationale: string;
};

export const GRAPH_LAB_ITEMS: GraphLabItem[] = [
  {
    id: "gl-01",
    attribute: "level",
    prompt: "Compared with baseline, the intervention phase MOST clearly shows a change in:",
    baseline: [12, 11, 13, 12, 14],
    intervention: [4, 3, 5, 4, 3],
    options: [
      "Level (mean rate drops sharply with little slope change within phase)",
      "Ascending trend only (no mean shift)",
      "Increased variability only",
      "Complete overlap with baseline",
    ],
    correctIndex: 0,
    rationale:
      "Means shift from ~12 to ~4 while within-phase slopes stay relatively flat — classic level change.",
  },
  {
    id: "gl-02",
    attribute: "trend",
    prompt: "The intervention phase is BEST described by which visual pattern?",
    baseline: [8, 9, 8, 10, 9],
    intervention: [10, 8, 6, 4, 2],
    options: [
      "Stable level with no slope",
      "Clear decelerating (descending) trend",
      "Increased overlap only",
      "Random scatter without direction",
    ],
    correctIndex: 1,
    rationale: "Intervention points systematically descend — trend, not a flat level shift alone.",
  },
  {
    id: "gl-03",
    attribute: "variability",
    prompt: "What is the MOST salient change from baseline to intervention?",
    baseline: [6, 7, 6, 8, 7],
    intervention: [2, 14, 1, 16, 3],
    options: [
      "Reduced variability",
      "Increased within-phase variability (bounce)",
      "Perfect therapeutic trend with tight control",
      "No visual change",
    ],
    correctIndex: 1,
    rationale: "Intervention swings widely session-to-session — variability increased.",
  },
  {
    id: "gl-04",
    attribute: "overlap",
    prompt: "Regarding baseline vs intervention ranges, which statement is MOST accurate?",
    baseline: [15, 16, 14, 17, 15],
    intervention: [14, 15, 16, 14, 15],
    options: [
      "Near-zero overlap — strong differentiation",
      "High overlap — weak differentiation between phases",
      "Intervention entirely above baseline",
      "Intervention entirely below baseline with no shared values",
    ],
    correctIndex: 1,
    rationale: "Ranges largely share the same band (~14–17) — high overlap, weak visual effect.",
  },
  {
    id: "gl-05",
    attribute: "level",
    prompt: "Select the BEST interpretation of the phase change:",
    baseline: [2, 3, 2, 4, 3],
    intervention: [9, 10, 11, 10, 12],
    options: [
      "Ascending trend within baseline only",
      "Clear upward level shift in intervention",
      "Decreased variability only",
      "High overlap with no mean change",
    ],
    correctIndex: 1,
    rationale: "Mean jumps from ~3 to ~10 with relatively stable within-phase paths — level increase.",
  },
  {
    id: "gl-06",
    attribute: "trend",
    prompt: "Baseline shows which pattern that would threaten clean interpretation of a later intervention?",
    baseline: [4, 6, 8, 10, 12],
    intervention: [13, 14, 15, 14, 16],
    options: [
      "Flat zero trend",
      "Pre-existing ascending trend (improving before intervention)",
      "Extreme bounce with no direction",
      "Immediate level drop",
    ],
    correctIndex: 1,
    rationale:
      "Baseline already climbs; continuing rise into intervention may reflect trend continuation, not a new effect.",
  },
  {
    id: "gl-07",
    attribute: "overlap",
    prompt: "Which description BEST fits these phases?",
    baseline: [20, 22, 19, 21, 20],
    intervention: [5, 4, 6, 3, 5],
    options: [
      "Complete overlap",
      "Minimal overlap — strong phase differentiation",
      "Identical means",
      "Intervention more variable only",
    ],
    correctIndex: 1,
    rationale: "Ranges (~19–22 vs ~3–6) barely touch — minimal overlap supports a clear effect.",
  },
  {
    id: "gl-08",
    attribute: "variability",
    prompt: "Intervention MOST clearly demonstrates:",
    baseline: [10, 2, 18, 1, 16],
    intervention: [7, 7, 8, 7, 7],
    options: [
      "Increased variability",
      "Stabilization (reduced variability) around a moderate level",
      "Ascending trend only",
      "Worsening bounce",
    ],
    correctIndex: 1,
    rationale: "Wild baseline bounce settles into a tight band — variability decreased / stability improved.",
  },
];
