/**
 * Mock Exam 3 — Third full BCBA simulation (185 items · TCO A–I).
 * Fully authored, TCO-weighted. Independent study only—not affiliated with the BACB.
 */
import type { BDSQuestion } from "@/lib/content-types";
import { authored3 } from "@/content/mockExam/exams/bcbaPractice3/authoredHelper";
import {
  EXPANDED3_A,
  EXPANDED3_D,
  EXPANDED3_H,
  EXPANDED3_I,
} from "@/content/mockExam/exams/bcbaPractice3/domainsADHI";
import {
  EXPANDED3_B,
  EXPANDED3_C,
  EXPANDED3_F,
} from "@/content/mockExam/exams/bcbaPractice3/domainsBCF";
import {
  EXPANDED3_E,
  EXPANDED3_G,
} from "@/content/mockExam/exams/bcbaPractice3/domainsEG";
import { BCBA_MOCK_EXAM_EXPECTED_ITEMS } from "@/content/mockExam/mockExamExpectedCount";
import { mockExamTimeLimitSeconds } from "@/content/mockExam/mockExamTime";
import type { MockExamDefinition } from "@/content/mockExam/mockExamTypes";

type Dom = NonNullable<BDSQuestion["tcoDomain"]>;

const POOLS: Record<Dom, BDSQuestion[]> = {
  A: [...EXPANDED3_A],
  B: [...EXPANDED3_B],
  C: [...EXPANDED3_C],
  D: [...EXPANDED3_D],
  E: [...EXPANDED3_E],
  F: [...EXPANDED3_F],
  G: [...EXPANDED3_G],
  H: [...EXPANDED3_H],
  I: [...EXPANDED3_I],
};

/** Exact TCO weights: A9 B26 C22 D15 E24 F24 G26 H20 I19 = 185 */
function buildWeightedSequence(): Dom[] {
  const remaining: Record<Dom, number> = {
    A: 9,
    B: 26,
    C: 22,
    D: 15,
    E: 24,
    F: 24,
    G: 26,
    H: 20,
    I: 19,
  };
  const order: Dom[] = ["B", "G", "E", "F", "C", "I", "H", "D", "A"];
  const seq: Dom[] = [];
  while (seq.length < 185) {
    let placed = false;
    for (const d of order) {
      if (remaining[d] > 0) {
        seq.push(d);
        remaining[d] -= 1;
        placed = true;
        if (seq.length >= 185) break;
      }
    }
    if (!placed) break;
  }
  return seq;
}

function renumber(item: BDSQuestion, n: number): BDSQuestion {
  const correctLetter = (["A", "B", "C", "D"] as const).find(
    (L) => item.options.find((o) => o.key === L)?.correct,
  )!;
  const texts = item.options.map((o) => o.text) as [
    string,
    string,
    string,
    string,
  ];
  const why = item.options.map((o) => o.rationale) as [
    string,
    string,
    string,
    string,
  ];
  return authored3(n, item.tcoDomain!, item.stem, correctLetter, texts, why);
}

function buildBank(): BDSQuestion[] {
  const seq = buildWeightedSequence();
  const cursors: Record<Dom, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
  };
  const out: BDSQuestion[] = [];
  for (let i = 0; i < seq.length; i++) {
    const d = seq[i]!;
    const src = POOLS[d][cursors[d]];
    if (!src) throw new Error(`Mock3: pool exhausted for ${d}`);
    cursors[d] += 1;
    out.push(renumber(src, i + 1));
  }
  for (const d of Object.keys(POOLS) as Dom[]) {
    if (cursors[d] !== POOLS[d].length) {
      throw new Error(
        `Mock3: domain ${d} unused (used ${cursors[d]} of ${POOLS[d].length})`,
      );
    }
  }
  return out;
}

export const BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS: BDSQuestion[] = buildBank();

if (BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS.length !== BCBA_MOCK_EXAM_EXPECTED_ITEMS) {
  throw new Error(
    `[mock exam 3] count ${BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS.length} !== ${BCBA_MOCK_EXAM_EXPECTED_ITEMS}`,
  );
}

export const BCBA_MOCK_EXAM_PRACTICE3_TITLE =
  "Mock Exam 3 — Capstone BCBA Simulation (185 items · TCO A–I)";

export const BCBA_MOCK_EXAM_PRACTICE3: MockExamDefinition = {
  id: "bcba-practice-3",
  slug: "bcba-practice-3",
  title: BCBA_MOCK_EXAM_PRACTICE3_TITLE,
  description:
    "Third full-length simulation with a fresh vignette bank, exact TCO-weighted domain counts, and tight distractors. Same 185-item / 4-hour format as the real BCBA exam.",
  itemCount: BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS.length,
  timeLimitSeconds: mockExamTimeLimitSeconds(BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS.length),
  moduleId: "mock-exam-bcba-practice-3",
  questions: BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS,
};
