#!/usr/bin/env node
/**
 * Scrub trailing " ethically." suffixes that leaked in from an older quiz
 * generator. Only touches literal trailing occurrences inside string literals
 * (e.g. `Foo ethically."` → `Foo."`). Preserves legitimate usage like
 * "when ethically feasible/permitted" and "acted ethically." mid-sentence.
 *
 * Also removes the pattern `"…ethically"` (no period) at end of quoted string.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const TARGETS = [
  "src/content/modules/quiz/quizTemplatesPearsonLate.ts",
  "src/content/modules/quiz/chapter02QuizBank.ts",
  "src/content/modules/quiz/chapter03QuizBank.ts",
  "src/content/modules/quiz/chapter04QuizBank.ts",
  "src/content/modules/quiz/chapter05QuizBank.ts",
  "src/content/modules/quiz/chapter05IOAQuizBank.ts",
  "src/content/modules/quiz/chapter09ChangingCriterionSupplementQuizBank.ts",
  "src/content/modules/quiz/chapter18VerbalBehaviorQuizBank.ts",
  "src/content/modules/quiz/chapter27ExperimentalFAQuizBank.ts",
  "src/content/modules/quiz/quizTemplatesConsequence.ts",
  "src/content/modules/mod17Chapter16Blueprint.ts",
  "src/content/modules/mod19Chapter18Blueprint.ts",
  "src/content/modules/mod22Chapter21Blueprint.ts",
  "src/content/mockExam/bcbaMockExam6e.ts",
  "src/content/mockExam/bcbaMockExamExpandedBundled.ts",
];

let totalReplacements = 0;
const perFile = [];

for (const rel of TARGETS) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) continue;
  const before = fs.readFileSync(abs, "utf8");
  let out = before;
  let fileHits = 0;
  // 1) "…something ethically."  (end of string with junk period)
  out = out.replace(/ ethically\.(?=["'`])/g, (m) => {
    fileHits += 1;
    return ".";
  });
  // 2) "…something ethically" (end of string, no period)
  out = out.replace(/ ethically(?=["'`])/g, (m) => {
    fileHits += 1;
    return "";
  });
  if (out !== before) {
    fs.writeFileSync(abs, out, "utf8");
    perFile.push({ file: rel, hits: fileHits });
    totalReplacements += fileHits;
  }
}

console.log(JSON.stringify({ totalReplacements, perFile }, null, 2));
