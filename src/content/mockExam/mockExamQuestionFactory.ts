import type { BDSQuestion } from "@/lib/content-types";

const opt = (
  a: { text: string; correct: boolean; rationale: string },
  b: { text: string; correct: boolean; rationale: string },
  c: { text: string; correct: boolean; rationale: string },
  d: { text: string; correct: boolean; rationale: string },
) =>
  [
    { key: "A" as const, ...a },
    { key: "B" as const, ...b },
    { key: "C" as const, ...c },
    { key: "D" as const, ...d },
  ] satisfies BDSQuestion["options"];

/** Helper to build BCBA-style mock MC items. Caller assigns correct answer to any key A–D. */
export function mockQ(
  id: string,
  domain: NonNullable<BDSQuestion["tcoDomain"]>,
  stem: string,
  choices: readonly [
    { text: string; correct: boolean; rationale: string },
    { text: string; correct: boolean; rationale: string },
    { text: string; correct: boolean; rationale: string },
    { text: string; correct: boolean; rationale: string },
  ],
  tcoCode?: string,
): BDSQuestion {
  return {
    id,
    tcoDomain: domain,
    stem,
    options: opt(choices[0]!, choices[1]!, choices[2]!, choices[3]!),
    ...(tcoCode ? { tcoCode } : {}),
  };
}
