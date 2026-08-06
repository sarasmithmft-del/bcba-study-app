import type { BDSOption, BDSQuestion, VocabularySection } from "@/lib/content-types";

type VocabEntry = VocabularySection["entries"][number];

const OPTION_KEYS = ["A", "B", "C", "D"] as const;

function clip(text: string, max: number): string {
  const trimmed = text.trim().replace(/\s+/g, " ");
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1).trimEnd()}…`;
}

function stableShuffle<T>(items: T[], seed: string): T[] {
  const out = [...items];
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  for (let i = out.length - 1; i > 0; i -= 1) {
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    const j = Math.abs(h) % (i + 1);
    const tmp = out[i]!;
    out[i] = out[j]!;
    out[j] = tmp;
  }
  return out;
}

function pickDistractorTerms(entries: VocabEntry[], correct: string, count: number, seed: string): string[] {
  const pool = entries.map((e) => e.term).filter((t) => t !== correct);
  return stableShuffle(pool, seed).slice(0, count);
}

function optionsFromTexts(
  correctText: string,
  distractors: string[],
  seed: string,
  rationales: { correct: string; wrong: string },
): BDSOption[] {
  const texts = stableShuffle([correctText, ...distractors], seed).slice(0, 4);
  // Guarantee correct is present
  if (!texts.includes(correctText)) {
    texts[texts.length - 1] = correctText;
  }
  while (texts.length < 4) {
    texts.push(`Not applicable for this chapter term (${texts.length})`);
  }
  return OPTION_KEYS.map((key, index) => {
    const text = texts[index]!;
    const correct = text === correctText;
    return {
      key,
      text,
      correct,
      rationale: correct ? rationales.correct : rationales.wrong,
    };
  });
}

function definitionMatchQuestion(
  chapterNumber: number,
  moduleId: string,
  entry: VocabEntry,
  entries: VocabEntry[],
  index: number,
): BDSQuestion {
  const distractors = pickDistractorTerms(entries, entry.term, 3, `${moduleId}:def:${index}`);
  while (distractors.length < 3) {
    distractors.push(`Unrelated filler term ${distractors.length + 1}`);
  }
  return {
    id: `${moduleId}-vocab-def-${index + 1}`,
    stem: `Chapter ${chapterNumber} vocabulary — definition match.\n\nWhich term BEST matches this definition?\n\n“${clip(entry.definition, 280)}”`,
    options: optionsFromTexts(entry.term, distractors, `${moduleId}:defopt:${index}`, {
      correct: `“${entry.term}” is the chapter term for that definition.`,
      wrong: `Re-read the definition and compare it to “${entry.term}” on the Vocabulary tab.`,
    }),
  };
}

function applicationQuestion(
  chapterNumber: number,
  moduleId: string,
  entry: VocabEntry,
  entries: VocabEntry[],
  index: number,
): BDSQuestion {
  const distractors = pickDistractorTerms(entries, entry.term, 3, `${moduleId}:app:${index}`);
  while (distractors.length < 3) {
    distractors.push(`Off-chapter label ${distractors.length + 1}`);
  }
  return {
    id: `${moduleId}-vocab-app-${index + 1}`,
    stem:
      `Chapter ${chapterNumber} vocabulary — application.\n\n` +
      `A clinician faces this practice situation:\n\n` +
      `“${clip(entry.definition, 220)}”\n\n` +
      `Which vocabulary term BEST names what they must get right?`,
    options: optionsFromTexts(entry.term, distractors, `${moduleId}:appopt:${index}`, {
      correct: `The vignette restates the definition of “${entry.term}”.`,
      wrong: `Match the vignette’s critical features to “${entry.term}” on the Vocabulary tab.`,
    }),
  };
}

function discriminationQuestion(
  chapterNumber: number,
  moduleId: string,
  entry: VocabEntry,
  other: VocabEntry,
  index: number,
): BDSQuestion {
  const correct = clip(entry.definition, 160);
  const distractors = [
    clip(other.definition, 160),
    `Treats “${entry.term}” and “${other.term}” as interchangeable labels with no functional difference.`,
    `Replaces both terms with a mentalistic explanation and skips environmental analysis.`,
  ];
  return {
    id: `${moduleId}-vocab-disc-${index + 1}`,
    stem:
      `Chapter ${chapterNumber} vocabulary — discrimination.\n\n` +
      `A trainee confuses “${entry.term}” with “${other.term}”.\n\n` +
      `Which statement correctly identifies “${entry.term}”?`,
    options: optionsFromTexts(correct, distractors, `${moduleId}:discopt:${index}`, {
      correct: `That statement matches the chapter definition of “${entry.term}”.`,
      wrong: `Contrast “${entry.term}” with “${other.term}” on the Vocabulary tab before answering.`,
    }),
  };
}

function masteryCheckQuestion(
  chapterNumber: number,
  moduleId: string,
  entry: VocabEntry,
  entries: VocabEntry[],
  index: number,
): BDSQuestion {
  const correct =
    `Explain “${entry.term}” in a novel vignette using its critical features: ${clip(entry.definition, 120)}`;
  const other = entries[(index + 1) % entries.length]!;
  const distractors = [
    `Memorize the spelling of “${entry.term}” without being able to use it in a new scenario.`,
    `Swap in “${other.term}” whenever the vignette sounds technical.`,
    `Skip defining “${entry.term}” if the graph already looks persuasive.`,
  ];
  return {
    id: `${moduleId}-vocab-mastery-${index + 1}`,
    stem:
      `Chapter ${chapterNumber} vocabulary — related check.\n\n` +
      `Which study check BEST proves mastery of “${entry.term}” (not just recognition)?`,
    options: optionsFromTexts(correct, distractors, `${moduleId}:mastopt:${index}`, {
      correct: `Mastery means using the term’s definitional features in novel situations.`,
      wrong: `Recognition alone is weak—apply the definition of “${entry.term}” to a new vignette.`,
    }),
  };
}

/**
 * Builds a graded vocabulary quiz for one chapter from its vocabulary entries.
 * Includes definition matches, application vignettes, discriminations, and mastery checks.
 */
export function buildVocabQuizBank(
  chapterNumber: number,
  moduleId: string,
  entries: VocabEntry[] | undefined,
): BDSQuestion[] {
  if (!entries || entries.length < 2) return [];

  const questions: BDSQuestion[] = [];

  entries.forEach((entry, index) => {
    questions.push(definitionMatchQuestion(chapterNumber, moduleId, entry, entries, index));
    questions.push(applicationQuestion(chapterNumber, moduleId, entry, entries, index));
  });

  // Pair each term with another for discrimination items (half the deck is enough).
  const discCount = Math.min(entries.length, Math.max(4, Math.ceil(entries.length / 2)));
  for (let i = 0; i < discCount; i += 1) {
    const entry = entries[i]!;
    const other = entries[(i + 1) % entries.length]!;
    if (other.term === entry.term) continue;
    questions.push(discriminationQuestion(chapterNumber, moduleId, entry, other, i));
  }

  // Mastery / related checks for every term
  entries.forEach((entry, index) => {
    questions.push(masteryCheckQuestion(chapterNumber, moduleId, entry, entries, index));
  });

  return questions;
}
