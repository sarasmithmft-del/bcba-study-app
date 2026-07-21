/**
 * Mock Exam 1 expanded bank (items 071–185) — authored vignettes with
 * TCO-weighted domain counts to finish a 185-item exam at approximately:
 * A9 B26 C22 D15 E24 F24 G26 H20 I19 (core 70 + expanded 115).
 *
 * Independent study only. Not affiliated with the BACB.
 */
import type { BDSQuestion } from "@/lib/content-types";
import { authored } from "@/content/mockExam/exams/bcbaFull6e/expandedAuthoredHelper";
import {
  EXPANDED_A,
  EXPANDED_D,
  EXPANDED_H,
  EXPANDED_I,
} from "@/content/mockExam/exams/bcbaFull6e/expandedADHI";
import {
  EXPANDED_B,
  EXPANDED_C,
  EXPANDED_F,
} from "@/content/mockExam/exams/bcbaFull6e/expandedBCF";
import {
  EXPANDED_E,
  EXPANDED_G,
} from "@/content/mockExam/exams/bcbaFull6e/expandedEG";

type Dom = NonNullable<BDSQuestion["tcoDomain"]>;

const POOLS: Record<Dom, BDSQuestion[]> = {
  A: [...EXPANDED_A],
  B: [...EXPANDED_B],
  C: [...EXPANDED_C],
  D: [...EXPANDED_D],
  E: [...EXPANDED_E],
  F: [...EXPANDED_F],
  G: [...EXPANDED_G],
  H: [...EXPANDED_H],
  I: [...EXPANDED_I],
};

/**
 * Interleaved domain sequence (115 slots) with exact counts:
 * A4 B17 C15 D9 E19 F16 G18 H9 I8
 */
function buildWeightedSequence(): Dom[] {
  const remaining: Record<Dom, number> = {
    A: 4,
    B: 17,
    C: 15,
    D: 9,
    E: 19,
    F: 16,
    G: 18,
    H: 9,
    I: 8,
  };
  const order: Dom[] = ["E", "G", "B", "F", "C", "I", "H", "D", "A"];
  const seq: Dom[] = [];
  while (seq.length < 115) {
    let placed = false;
    for (const d of order) {
      if (remaining[d] > 0) {
        seq.push(d);
        remaining[d] -= 1;
        placed = true;
        if (seq.length >= 115) break;
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
  return authored(n, item.tcoDomain!, item.stem, correctLetter, texts, why);
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
        `Mock1 expanded: pool exhausted for domain ${d} at slot ${i} (need index ${idx}, have ${pool.length})`,
      );
    }
    cursors[d] = idx + 1;
    out.push(renumber(src, 71 + i));
  }
  // Sanity: all pools fully consumed
  for (const d of Object.keys(POOLS) as Dom[]) {
    if (cursors[d] !== POOLS[d].length) {
      throw new Error(
        `Mock1 expanded: domain ${d} unused items (used ${cursors[d]} of ${POOLS[d].length})`,
      );
    }
  }
  return out;
}

export const BCBA_MOCK_EXAM_EXPANDED_AUTHORED_BANK: BDSQuestion[] =
  buildExpandedAuthored();
