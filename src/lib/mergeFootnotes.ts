import type { FootnoteEntry } from "@/lib/content-types";

/** Merge supplemental scholarly refs with Codex keys for unified inspectors. */
export function mergeChapterFootnotes(
  codexFootnotes: Record<string, FootnoteEntry>,
  supplemental?: Record<string, FootnoteEntry>,
): Record<string, FootnoteEntry> {
  if (!supplemental) return codexFootnotes;
  return { ...codexFootnotes, ...supplemental };
}
