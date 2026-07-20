import { MODULE_INDEX } from "../src/lib/modules.ts";

const nums = MODULE_INDEX.map((m) => m.chapterNumber);
const dupes = nums.filter((n, i) => nums.indexOf(n) !== i);
const expected = 31;
const gaps = [];
for (let i = 1; i <= expected; i++) {
  if (!nums.includes(i)) gaps.push(i);
}

console.log(`Cooper chapters on home page: ${MODULE_INDEX.length} (expected ${expected})`);
console.log(`Unique numbers: ${new Set(nums).size}`);
if (dupes.length) console.error("DUPLICATES:", [...new Set(dupes)]);
if (gaps.length) console.error("Missing Cooper chapters:", gaps);
else if (MODULE_INDEX.length === expected) console.log("Cooper 1–31 coverage: OK");

MODULE_INDEX.forEach((m) =>
  console.log(`${String(m.chapterNumber).padStart(2)}  ${m.id}  ${m.title}`),
);

if (dupes.length || gaps.length || MODULE_INDEX.length !== expected) process.exit(1);
