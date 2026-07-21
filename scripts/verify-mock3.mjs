import { BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS } from "../src/content/mockExam/exams/bcbaPractice3/index.ts";
import { MOCK_EXAMS } from "../src/content/mockExam/index.ts";

const domains = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const target = { A: 9, B: 26, C: 22, D: 15, E: 24, F: 24, G: 26, H: 20, I: 19 };
const qs = BCBA_MOCK_EXAM_PRACTICE3_QUESTIONS;
const m = Object.fromEntries(domains.map((d) => [d, 0]));
for (const q of qs) m[q.tcoDomain ?? "?"] = (m[q.tcoDomain ?? "?"] ?? 0) + 1;
console.log("total", qs.length);
console.log("domains", JSON.stringify(m));
let ok = qs.length === 185;
for (const d of domains) {
  const match = m[d] === target[d];
  console.log(d, m[d], match ? "OK" : "FAIL");
  if (!match) ok = false;
}
console.log(
  "registry",
  MOCK_EXAMS.map((e) => `${e.slug}:${e.itemCount}`).join(", "),
);
console.log(ok ? "PASS" : "FAIL");
