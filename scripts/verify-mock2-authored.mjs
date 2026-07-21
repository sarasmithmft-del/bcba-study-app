import { BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS } from "../src/content/mockExam/exams/bcbaPractice2/index.ts";

const domains = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const target = { A: 9, B: 26, C: 22, D: 15, E: 24, F: 24, G: 26, H: 20, I: 19 };
const qs = BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS;
const core = qs.filter((q) => Number(String(q.id).split("-").pop()) <= 74);
const exp = qs.filter((q) => Number(String(q.id).split("-").pop()) >= 75);

function count(bank) {
  const m = Object.fromEntries(domains.map((d) => [d, 0]));
  for (const q of bank) m[q.tcoDomain ?? "?"] = (m[q.tcoDomain ?? "?"] ?? 0) + 1;
  return m;
}
const t = count(qs);
const e = count(exp);
console.log("total", qs.length);
console.log("CORE", core.length, JSON.stringify(count(core)));
console.log("EXP", exp.length, JSON.stringify(e));
console.log("ALL", JSON.stringify(t));
let ok = qs.length === 185;
for (const d of domains) {
  const match = t[d] === target[d];
  console.log(d, t[d], "vs", target[d], match ? "OK" : "MISMATCH");
  if (!match) ok = false;
}
const prefixed = exp.filter((q) => /\[Item\s+\d+/.test(q.stem));
console.log("prefixedStems", prefixed.length);
if (prefixed.length) ok = false;
console.log("firstExp", exp[0]?.id, "lastExp", exp[exp.length - 1]?.id);
console.log(ok ? "PASS" : "FAIL");
