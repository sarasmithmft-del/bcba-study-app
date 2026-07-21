import { createRequire } from "node:module";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Use tsx loader via dynamic import of compiled path through tsx
const { BCBA_MOCK_EXAM_QUESTIONS } = await import(
  "../src/content/mockExam/bcbaMockExam6e.ts"
);

const domains = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const core = BCBA_MOCK_EXAM_QUESTIONS.slice(0, 70);
const exp = BCBA_MOCK_EXAM_QUESTIONS.slice(70);
function count(bank) {
  const m = Object.fromEntries(domains.map((d) => [d, 0]));
  for (const q of bank) m[q.tcoDomain ?? "?"] = (m[q.tcoDomain ?? "?"] ?? 0) + 1;
  return m;
}
const target = { A: 9, B: 26, C: 22, D: 15, E: 24, F: 24, G: 26, H: 20, I: 19 };
const c = count(core);
const e = count(exp);
const t = count(BCBA_MOCK_EXAM_QUESTIONS);
console.log("total", BCBA_MOCK_EXAM_QUESTIONS.length);
console.log("CORE70", JSON.stringify(c));
console.log("EXP115", JSON.stringify(e));
console.log("ALL185", JSON.stringify(t));
console.log("NEEDED_EXP:");
for (const d of domains) {
  console.log(
    d,
    "need",
    Math.max(0, target[d] - (c[d] ?? 0)),
    "have",
    e[d] ?? 0,
  );
}
