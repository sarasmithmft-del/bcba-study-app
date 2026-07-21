import type { BDSQuestion } from "@/lib/content-types";
import { mockQ } from "@/content/mockExam/mockExamQuestionFactory";

type Dom = NonNullable<BDSQuestion["tcoDomain"]>;
type Letter = "A" | "B" | "C" | "D";

/** Compact authored Mock Exam 2 item → full BDSQuestion. */
export function authored2(
  n: number,
  domain: Dom,
  stem: string,
  correct: Letter,
  texts: readonly [string, string, string, string],
  why: readonly [string, string, string, string],
): BDSQuestion {
  return mockQ(`mock2-${String(n).padStart(3, "0")}`, domain, stem, [
    { text: texts[0], correct: correct === "A", rationale: why[0] },
    { text: texts[1], correct: correct === "B", rationale: why[1] },
    { text: texts[2], correct: correct === "C", rationale: why[2] },
    { text: texts[3], correct: correct === "D", rationale: why[3] },
  ] as const);
}

export type { Dom, Letter };
