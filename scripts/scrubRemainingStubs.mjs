#!/usr/bin/env node
/**
 * Round 2 stub cleanup:
 *  - `rationale: "mod\d+-q\d+ vignette."`
 *  - `rationale: "Classic mod\d+-q\d+ vignette."`
 *  - `rationale: "Matches mod\d+-q\d+ vignette."`
 *  - `rationale: "mod\d+-q\d+ vignette logic."`
 *  - blueprint `error_feedback: "mod\d+-q\d+ vignette—<rest>"` → strip prefix
 *  - blueprint `error_feedback: "mod\d+-q\d+ vignette."` (single-flavor)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, out);
    else if (full.endsWith(".ts")) out.push(full);
  }
  return out;
}

const files = walk(path.join(ROOT, "src/content"));
const summary = { rationalePrefixStripped: 0, blueprintPrefixStripped: 0, blueprintUsedCorrect: 0, files: [] };

for (const abs of files) {
  const before = fs.readFileSync(abs, "utf8");
  let out = before;
  let localCounts = { rationalePrefixStripped: 0, blueprintPrefixStripped: 0, blueprintUsedCorrect: 0 };

  // Case A: rationale with vignette label followed by em-dash and real content
  // -> keep the real content, drop the label.
  out = out.replace(
    /(rationale:\s*")(?:Classic |Matches )?mod\d+-q\d+ vignette[—–-]\s*/g,
    (_m, prefix) => {
      localCounts.rationalePrefixStripped += 1;
      return prefix;
    },
  );

  // Case B: rationale that ONLY says the label ("Classic|Matches modXX-qN vignette [logic]?.")
  //   -> replace with the option's own text as the rationale.
  out = out.replace(
    /(text:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*rationale:\s*")(?:Classic |Matches )?mod\d+-q\d+ vignette(?: logic)?\.(")/g,
    (_m, prefix, optionText, suffix) => {
      localCounts.rationalePrefixStripped += 1;
      const cleaned = optionText.replace(/\s+/g, " ").trim();
      const trimmed = cleaned.length > 220 ? `${cleaned.slice(0, 217)}...` : cleaned;
      return `${prefix}Correct move—${trimmed}${suffix}`;
    },
  );

  // Case C: blueprint error_feedback with vignette label followed by em-dash and content
  out = out.replace(
    /(error_feedback:\s*")mod\d+-q\d+ vignette[—–-]\s*/g,
    (_m, prefix) => {
      localCounts.blueprintPrefixStripped += 1;
      return prefix;
    },
  );

  // Case D: blueprint error_feedback that ONLY says the label — pair with correct_match above.
  out = out.replace(
    /(correct_match:\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*\n\s*error_feedback:\s*")mod\d+-q\d+ vignette\.(")/g,
    (_m, prefix, correctText, suffix) => {
      localCounts.blueprintUsedCorrect += 1;
      const cleaned = correctText.replace(/\s+/g, " ").trim();
      return `${prefix}Correct action: ${cleaned}${suffix}`;
    },
  );

  if (out !== before) {
    fs.writeFileSync(abs, out, "utf8");
    summary.rationalePrefixStripped += localCounts.rationalePrefixStripped;
    summary.blueprintPrefixStripped += localCounts.blueprintPrefixStripped;
    summary.blueprintUsedCorrect += localCounts.blueprintUsedCorrect;
    summary.files.push({ file: path.relative(ROOT, abs), ...localCounts });
  }
}

console.log(JSON.stringify(summary, null, 2));
