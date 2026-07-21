import { BCBA_MOCK_EXAM_QUESTIONS } from "../src/content/mockExam/bcbaMockExam6e.ts";

const domains = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const target = { A: 9, B: 26, C: 22, D: 15, E: 24, F: 24, G: 26, H: 20, I: 19 };
const core = BCBA_MOCK_EXAM_QUESTIONS.slice(0, 70);
const exp = BCBA_MOCK_EXAM_QUESTIONS.slice(70);

function count(bank) {
  const m = Object.fromEntries(domains.map((d) => [d, 0]));
  for (const q of bank) m[q.tcoDomain ?? "?"] = (m[q.tcoDomain ?? "?"] ?? 0) + 1;
  return m;
}

const c = count(core);
const e = count(exp);
const t = count(BCBA_MOCK_EXAM_QUESTIONS);
console.log("total", BCBA_MOCK_EXAM_QUESTIONS.length);
console.log("CORE70", JSON.stringify(c));
console.log("EXP115", JSON.stringify(e));
console.log("ALL185", JSON.stringify(t));
console.log("TARGET", JSON.stringify(target));
let ok = BCBA_MOCK_EXAM_QUESTIONS.length === 185;
for (const d of domains) {
  const match = t[d] === target[d];
  console.log(d, "actual", t[d], "target", target[d], match ? "OK" : "MISMATCH");
  if (!match) ok = false;
}
// Spot-check no legacy prefix
const prefixed = exp.filter((q) => /\[Item\s+\d+/.test(q.stem));
console.log("prefixedStems", prefixed.length);
if (prefixed.length) ok = false;
// First expanded id
console.log("firstExpId", exp[0]?.id, "lastExpId", exp[exp.length - 1]?.id);
console.log(ok ? "PASS" : "FAIL");
