#!/usr/bin/env node
/**
 * Replace `rationale: "Chain fragment [a-d]."` stubs across quiz banks with
 * teaching text keyed to the sequencing letter. These labels are internal
 * authoring notes; they should never surface to learners.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const QUIZ_DIR = path.join(ROOT, "src/content/modules/quiz");

const REPLACEMENTS = {
  a: "First step—establish preconditions before making analytic claims.",
  b: "Second step—operationalize and verify fidelity before continuing.",
  c: "Third step—implement transparently with honest measurement.",
  d: "Final step—make claims and follow through with documented review.",
};

let totalHits = 0;
const perFile = [];
const entries = fs.readdirSync(QUIZ_DIR);
for (const name of entries) {
  if (!name.endsWith(".ts")) continue;
  const abs = path.join(QUIZ_DIR, name);
  const before = fs.readFileSync(abs, "utf8");
  let fileHits = 0;
  const out = before.replace(
    /rationale:\s*"Chain fragment ([a-d])\."/g,
    (_m, letter) => {
      fileHits += 1;
      return `rationale: "${REPLACEMENTS[letter]}"`;
    },
  );
  if (fileHits > 0) {
    fs.writeFileSync(abs, out, "utf8");
    perFile.push({ file: `src/content/modules/quiz/${name}`, hits: fileHits });
    totalHits += fileHits;
  }
}

console.log(JSON.stringify({ totalHits, perFile }, null, 2));
