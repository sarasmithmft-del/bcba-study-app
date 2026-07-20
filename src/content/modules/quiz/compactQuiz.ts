import type { BDSQuestion } from "@/lib/content-types";

/** choices[0] is correct before alphabetization */
export type CompactQuiz = {
  stem: string;
  choices: [string, string, string, string];
  rat: [string, string, string, string];
};

const RationalePad =
  "This option mismatches the keyed solution—review Cooper/Heron/Heward-aligned distinctions for this vignette.";

export function cq(
  stem: string,
  correct: string,
  wrong: readonly [string, string, string],
  rationalesInput: readonly string[],
): CompactQuiz {
  const rat: [string, string, string, string] = [
    rationalesInput[0] ?? RationalePad,
    rationalesInput[1] ?? RationalePad,
    rationalesInput[2] ?? RationalePad,
    rationalesInput[3] ?? RationalePad,
  ];
  return {
    stem,
    choices: [correct, wrong[0], wrong[1], wrong[2]],
    rat,
  };
}

/** Stable alphabetical ordering avoids hydration variance across builds */
export function compactToBDS(
  modId: string,
  qn: number,
  chapterNumber: number,
  title: string,
  row: CompactQuiz,
): BDSQuestion {
  const correctText = row.choices[0];
  const zipped = row.choices.map((text, i) => ({
    text,
    rationale: row.rat[i],
    correct: text === correctText,
  }));
  zipped.sort((a, b) => a.text.localeCompare(b.text));
  return {
    id: `${modId}-q${qn}`,
    stem: `${row.stem}\n\n(Workbook tie-in · Cooper/Heron/Heward Chapter ${chapterNumber}: ${title} · Quiz ${qn}.)`,
    options: zipped.map((opt, idx) => ({
      key: String.fromCharCode(65 + idx),
      text: opt.text,
      correct: opt.correct,
      rationale: opt.rationale,
    })),
  };
}
