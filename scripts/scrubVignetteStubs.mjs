#!/usr/bin/env node
/**
 * Two passes:
 *  1) In late-chapter blueprints, replace `error_feedback: "mod\d+-q\d+ vignette."`
 *     with the enclosing MTS block's `correct_match` text prefaced with
 *     "Correct action: ".
 *  2) In quiz banks, replace `rationale: "Classic Ch \d+ vignette."` with the
 *     option's own text used as the teaching rationale.
 * Also removes remaining `"Replace * with emojis"` distractor options in the
 * late template file by turning them into plausible alternatives.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");

function readAll(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const s = fs.statSync(full);
    if (s.isDirectory()) readAll(full, out);
    else if (full.endsWith(".ts")) out.push(full);
  }
  return out;
}

const summary = { blueprintFixes: 0, quizFixes: 0, emojiFixes: 0, files: [] };

// --- Pass 1: blueprint error_feedback stubs ------------------------------
const modulesDir = path.join(ROOT, "src/content/modules");
const modFiles = readAll(modulesDir).filter((f) =>
  /mod\d\d?[A-Z].*Blueprint\.ts$/.test(f),
);

for (const abs of modFiles) {
  const before = fs.readFileSync(abs, "utf8");
  let fileHits = 0;
  // Match an MTS object with correct_match followed by an error_feedback stub.
  const out = before.replace(
    /(correct_match:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*\n\s*error_feedback:\s*")mod\d+-q\d+ vignette\.(")/g,
    (_m, prefix, correctText, suffix) => {
      fileHits += 1;
      const cleaned = correctText.replace(/\s+/g, " ").trim();
      return `${prefix}Correct action: ${cleaned}${suffix}`;
    },
  );
  if (out !== before) {
    fs.writeFileSync(abs, out, "utf8");
    summary.blueprintFixes += fileHits;
    summary.files.push({ file: path.relative(ROOT, abs), blueprintFixes: fileHits });
  }
}

// --- Pass 2: quiz bank "Classic Ch NN vignette." rationales -------------
const quizDir = path.join(ROOT, "src/content/modules/quiz");
const quizFiles = fs
  .readdirSync(quizDir)
  .filter((n) => n.endsWith(".ts"))
  .map((n) => path.join(quizDir, n));

for (const abs of quizFiles) {
  const before = fs.readFileSync(abs, "utf8");
  let fileHits = 0;
  // Pattern:  text: "OPTION TEXT", rationale: "Classic Ch NN vignette."
  const out = before.replace(
    /(text:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*rationale:\s*")Classic Ch \d+ vignette\.(")/g,
    (_m, prefix, optionText, suffix) => {
      fileHits += 1;
      const cleaned = optionText.replace(/\s+/g, " ").trim();
      // Trim to a reasonable rationale length (max 240 chars).
      const trimmed = cleaned.length > 220 ? `${cleaned.slice(0, 217)}...` : cleaned;
      return `${prefix}Correct move—${trimmed}${suffix}`;
    },
  );
  if (out !== before) {
    fs.writeFileSync(abs, out, "utf8");
    summary.quizFixes += fileHits;
    summary.files.push({ file: path.relative(ROOT, abs), quizFixes: fileHits });
  }
}

// --- Pass 3: emoji distractors in late templates -----------------------
const emojiTargets = [
  "src/content/modules/quiz/quizTemplatesPearsonLate.ts",
];
for (const rel of emojiTargets) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) continue;
  const before = fs.readFileSync(abs, "utf8");
  let fileHits = 0;
  let out = before
    .replace(/"Replace dual metrics with emojis"/g, () => {
      fileHits += 1;
      return '"Drop dual metrics and report a single aggregate only"';
    })
    .replace(/"Replace labels with emojis"/g, () => {
      fileHits += 1;
      return '"Drop modality labels entirely and rely on narrative summaries"';
    });
  if (out !== before) {
    fs.writeFileSync(abs, out, "utf8");
    summary.emojiFixes += fileHits;
    summary.files.push({ file: rel, emojiFixes: fileHits });
  }
}

console.log(JSON.stringify(summary, null, 2));
