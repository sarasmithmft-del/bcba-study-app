/**
 * Cooper, Heron & Heward — Applied Behavior Analysis, 3rd ed. (Pearson Global).
 * Workbook chapters map 1:1 to Cooper numbered chapters (1–31).
 */

export interface CooperChapterMeta {
  chapterNumber: number;
  title: string;
}

export const CHAPTER_TITLES: Record<number, string> = {
  1: "Definition and Characteristics of Applied Behavior Analysis",
  2: "Basic Concepts and Principles",
  3: "Selecting and Defining Target Behaviors",
  4: "Measuring Behavior",
  5: "Improving and Assessing the Quality of Behavioral Measurement",
  6: "Constructing and Interpreting Graphic Displays of Behavioral Data",
  7: "Analyzing Behavior Change: Basic Assumptions and Strategies",
  8: "Reversal and Multielement Designs",
  9: "Multiple Baseline and Changing Criterion Designs",
  10: "Planning and Evaluating Applied Behavior Analysis Research",
  11: "Positive Reinforcement",
  12: "Negative Reinforcement",
  13: "Schedules of Reinforcement",
  14: "Positive Punishment",
  15: "Negative Punishment",
  16: "Motivating Operations",
  17: "Stimulus Control",
  18: "Verbal Behavior",
  19: "Equivalence-based Instruction",
  20: "Engineering Emergent Learning with Nonequivalence Relations",
  21: "Imitation, Modeling, and Observational Learning",
  22: "Shaping",
  23: "Chaining",
  24: "Extinction",
  25: "Differential Reinforcement",
  26: "Antecedent Interventions",
  27: "Functional Behavior Assessment",
  28: "Token Economy, Group Contingencies, and Contingency Contracting",
  29: "Self-Management",
  30: "Generalization and Maintenance of Behavior Change",
  31: "Ethical and Professional Responsibilities of Applied Behavior Analysts",
};

/** Cooper source chapter for each module id. */
export const MODULE_COOPER_CHAPTER: Record<string, number> = {
  mod01: 1,
  mod04: 2,
  mod03: 3,
  mod055: 4,
  mod05: 5,
  mod11: 6,
  mod10: 7,
  mod12: 8,
  mod15: 8,
  mod13: 9,
  mod14: 9,
  mod16: 10,
  mod02: 11,
  mod33: 12,
  mod34: 13,
  mod35: 14,
  mod36: 15,
  mod17: 16,
  mod18: 17,
  mod19: 18,
  mod20: 19,
  mod21: 20,
  mod22: 21,
  mod23: 22,
  mod24: 23,
  mod25: 24,
  mod26: 25,
  mod27: 26,
  mod28: 27,
  mod29: 28,
  mod30: 29,
  mod31: 30,
  mod32: 31,
  mod06: 5,
  mod07: 27,
  mod08: 27,
  mod09: 27,
};

/** Supplementary modules omitted from the home chapter list (one Cooper chapter per TOC row). */
export const MODULES_EXCLUDED_FROM_INDEX = new Set([
  "mod06",
  "mod07",
  "mod08",
  "mod09",
  "mod14",
  "mod15",
]);

export function getCooperChapterMeta(chapterNumber: number): CooperChapterMeta {
  return {
    chapterNumber,
    title: CHAPTER_TITLES[chapterNumber] ?? `Chapter ${chapterNumber}`,
  };
}

export function enrichModuleWithCooperMeta<
  T extends { id: string; chapterNumber: number; cooperChapterNumber?: number; title: string },
>(
  module: T,
): T & {
  chapterNumber: number;
  cooperChapterNumber: number;
  cooperChapterTitle: string;
  includeInChapterIndex: boolean;
} {
  const cooperChapterNumber =
    module.cooperChapterNumber ?? MODULE_COOPER_CHAPTER[module.id] ?? module.chapterNumber;
  const meta = getCooperChapterMeta(cooperChapterNumber);
  return {
    ...module,
    chapterNumber: cooperChapterNumber,
    cooperChapterNumber,
    cooperChapterTitle: meta.title,
    includeInChapterIndex: !MODULES_EXCLUDED_FROM_INDEX.has(module.id),
  };
}
