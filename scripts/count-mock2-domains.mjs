import { BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS } from "../src/content/mockExam/exams/bcbaPractice2/index.ts";

const domains = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const target = { A: 9, B: 26, C: 22, D: 15, E: 24, F: 24, G: 26, H: 20, I: 19 };
const qs = BCBA_MOCK_EXAM_PRACTICE2_QUESTIONS;
console.log("total", qs.length);
console.log("firstId", qs[0]?.id, "id70", qs[69]?.id, "id71", qs[70]?.id, "last", qs[qs.length - 1]?.id);

// Practice2: core is 74 items (001-074), expanded 111 (075-185) per earlier notes
// Detect split by id number
const core = qs.filter((q) => {
  const n = Number(String(q.id).split("-").pop());
  return n <= 74;
});
const exp = qs.filter((q) => {
  const n = Number(String(q.id).split("-").pop());
  return n >= 75;
});

function count(bank) {
  const m = Object.fromEntries(domains.map((d) => [d, 0]));
  for (const q of bank) m[q.tcoDomain ?? "?"] = (m[q.tcoDomain ?? "?"] ?? 0) + 1;
  return m;
}
const c = count(core);
const e = count(exp);
const t = count(qs);
console.log("CORE", core.length, JSON.stringify(c));
console.log("EXP", exp.length, JSON.stringify(e));
console.log("ALL", JSON.stringify(t));
console.log("NEEDED_EXP:");
for (const d of domains) {
  console.log(d, "need", Math.max(0, target[d] - (c[d] ?? 0)), "have", e[d] ?? 0);
}
