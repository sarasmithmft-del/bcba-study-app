import fs from "fs";

const quizDir = new URL("../src/content/modules/quiz/", import.meta.url);

const chapter03Path = new URL("./chapter03QuizBank.ts", quizDir);
const chapter05Path = new URL("./chapter05QuizBank.ts", quizDir);

const chapter03txt = fs.readFileSync(chapter03Path, "utf8").replace(/\r\n/g, "\n");
const start = chapter03txt.indexOf('  bx(\n    "mod05-q23",');
if (start < 0) throw new Error("start marker mod05-q23 not found");
const q50 = chapter03txt.indexOf('    "mod05-q50",', start);
if (q50 < 0) throw new Error("mod05-q50 stem not found");
const end = chapter03txt.indexOf("\n  ),", q50);
if (end < 0) throw new Error("closing ), for mod05-q50 not found");
const sliceBounds = chapter03txt.slice(start, end + "\n  ),".length);

let slice = sliceBounds.trim();
for (let old = 23; old <= 50; old++) {
  slice = slice.replaceAll(`"mod05-q${old}"`, `"mod055-q${old - 22}"`);
}

const ch5norm = fs.readFileSync(chapter05Path, "utf8").replace(/\r\n/g, "\n");
const iAttach = ch5norm.indexOf("function attachChhLocator");
if (iAttach < 0) throw new Error("attachChhLocator not found");
const locBannerIndex = ch5norm.indexOf("/** Locator bands", iAttach);
if (locBannerIndex < 0) throw new Error("Locator banner not found after attachChhLocator");
const helpers = ch5norm.slice(iAttach, locBannerIndex).trim();

const ch4LocatorFn = `
/** Locator bands recycle across stems — CHH Chapter 4 (Measuring Behavior), ~ pp. 94–119. */
function L(which: number): string {
  if (which <= 8) return "CHH Chapter 4, pp. 94–96 — dimensional measurement fundamentals";
  if (which <= 20) return "CHH Chapter 4, pp. 96–105 — continuous recording tactics";
  if (which <= 40) return "CHH Chapter 4, pp. 105–112 — discontinuous schedules; biases";
  return "CHH Chapter 4, pp. 113–119 — permanent products; technology; practicality";
}
`.trim();

const out =
  `import type { BDSQuestion } from "@/lib/content-types";\n\n` +
  `/**\n * Cooper/Heron/Heward — standalone Chapter 4 workbook module (Measuring Behavior, mod055).\n` +
  ` * Base stems reworked from the Chapter 4 measurement arcs in chapter03QuizBank.\n` +
  ` * Additional items appended in-repo extend to fifty questions.\n` +
  ` */\n\n` +
  `${helpers}\n\n${ch4LocatorFn}\n\n` +
  `export const CHAPTER_04_WORKBOOK_QUIZ_BANK: BDSQuestion[] = [\n${slice},\n];\n`;

fs.writeFileSync(new URL("./chapter04QuizBank.ts", quizDir), out, "utf8");
console.error("Wrote chapter04QuizBank.ts (mod055-q1..q28 base)");
