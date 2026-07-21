/**
 * Mock Exam 2 expanded bank (items 075–185) — authored vignettes with
 * TCO-weighted domain counts to finish a 185-item exam at approximately:
 * A9 B26 C22 D15 E24 F24 G26 H20 I19 (core 74 + expanded 111).
 *
 * Independent study only. Not affiliated with the BACB.
 */
import type { BDSQuestion } from "@/lib/content-types";
import { authored2 } from "@/content/mockExam/exams/bcbaPractice2/expandedAuthoredHelper";
import {
  EXPANDED2_A,
  EXPANDED2_D,
  EXPANDED2_H,
  EXPANDED2_I,
} from "@/content/mockExam/exams/bcbaPractice2/expandedADHI";
import {
  EXPANDED2_B,
  EXPANDED2_C,
  EXPANDED2_F,
} from "@/content/mockExam/exams/bcbaPractice2/expandedBCF";
import {
  EXPANDED2_E,
  EXPANDED2_G,
} from "@/content/mockExam/exams/bcbaPractice2/expandedEG";

type Dom = NonNullable<BDSQuestion["tcoDomain"]>;

const POOLS: Record<Dom, BDSQuestion[]> = {
  A: [...EXPANDED2_A],
  B: [...EXPANDED2_B],
  C: [...EXPANDED2_C],
  D: [...EXPANDED2_D],
  E: [...EXPANDED2_E],
  F: [...EXPANDED2_F],
  G: [...EXPANDED2_G],
  H: [...EXPANDED2_H],
  I: [...EXPANDED2_I],
};

/** Interleaved sequence: A2 B18 C15 D8 E17 F17 G19 H7 I8 = 111 */
function buildWeightedSequence(): Dom[] {
  const remaining: Record<Dom, number> = {
    A: 2,
    B: 18,
    C: 15,
    D: 8,
    E: 17,
    F: 17,
    G: 19,
    H: 7,
    I: 8,
  };
  const order: Dom[] = ["G", "E", "B", "F", "C", "I", "D", "H", "A"];
  const seq: Dom[] = [];
  while (seq.length < 111) {
    let placed = false;
    for (const d of order) {
      if (remaining[d] > 0) {
        seq.push(d);
        remaining[d] -= 1;
        placed = true;
        if (seq.length >= 111) break;
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
  return authored2(n, item.tcoDomain!, item.stem, correctLetter, texts, why);
}

function buildExpandedAuthored(): BDSQuestion[] {
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
    const pool = POOLS[d];
    const idx = cursors[d];
    const src = pool[idx];
    if (!src) {
      throw new Error(
        `Mock2 expanded: pool exhausted for domain ${d} at slot ${i}`,
      );
    }
    cursors[d] = idx + 1;
    out.push(renumber(src, 75 + i));
  }
  for (const d of Object.keys(POOLS) as Dom[]) {
    if (cursors[d] !== POOLS[d].length) {
      throw new Error(
        `Mock2 expanded: domain ${d} unused (used ${cursors[d]} of ${POOLS[d].length})`,
      );
    }
  }
  return out;
}

export const BCBA_MOCK_EXAM_PRACTICE2_EXPANDED_AUTHORED: BDSQuestion[] =
  buildExpandedAuthored();
