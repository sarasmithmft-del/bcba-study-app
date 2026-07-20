"use client";

import type { CodexSegment, FootnoteEntry } from "@/lib/content-types";

const COOPER_BOOK_URL =
  "https://www.pearson.com/en-us/subject-catalog/p/applied-behavior-analysis/P200000000905";

export function splitCodexSegmentsIntoParagraphs(
  segments: CodexSegment[],
): CodexSegment[][] {
  const paragraphs: CodexSegment[][] = [];
  let current: CodexSegment[] = [];

  for (const segment of segments) {
    if (segment.type === "footnote") {
      current.push(segment);
      continue;
    }

    const parts = segment.text.split(/\n{2,}/);
    parts.forEach((part, index) => {
      if (part.length > 0) {
        current.push({ type: "text", text: part });
      }

      if (index < parts.length - 1) {
        if (current.length > 0) {
          paragraphs.push(current);
        }
        current = [];
      }
    });
  }

  if (current.length > 0) {
    paragraphs.push(current);
  }

  return paragraphs.length > 0 ? paragraphs : [segments];
}

export function InlineCodexSegments({
  segments,
  footnotes,
  activeRef,
  onActivateRef,
  ariaControlsId = "chapter-footnote-pane",
}: {
  segments: CodexSegment[];
  footnotes: Record<string, FootnoteEntry>;
  activeRef: string | null;
  onActivateRef: (reference: string) => void;
  /** Must match the `id` of the adjacent References aside (Reading tab uses `footnote-inspector`). */
  ariaControlsId?: string;
}) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.type === "text" ? (
          <span key={`seg-${index}`}>{segment.text}</span>
        ) : (
          <button
            key={`fn-${segment.ref}-${index}`}
            type="button"
            onClick={() => onActivateRef(segment.ref)}
            className="mx-[0.12rem] cursor-pointer rounded-sm border border-transparent px-[0.18rem] text-[0.78rem] align-super leading-none tracking-tight text-aba-muted underline decoration-aba-muted/70 underline-offset-4 transition hover:border-aba-divider hover:text-aba-fg"
            aria-expanded={activeRef === segment.ref}
            aria-controls={ariaControlsId}
          >
            {footnotes[segment.ref]?.label ?? `[${segment.ref}]`}
          </button>
        ),
      )}
    </>
  );
}

export function FootnoteInspectorAside({
  heading,
  footnotes,
  activeRef,
}: {
  heading: string;
  footnotes: Record<string, FootnoteEntry>;
  activeRef: string | null;
}) {
  const note = activeRef ? footnotes[activeRef] : undefined;

  return (
    <aside
      id="chapter-footnote-pane"
      className="flex flex-col bg-aba-panel p-6 md:w-[35%]"
      aria-live="polite"
    >
      <header className="mb-4 border border-aba-divider px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-aba-muted">
        {heading}
      </header>
      <a
        href={COOPER_BOOK_URL}
        target="_blank"
        rel="noreferrer"
        className="mb-4 text-[0.78rem] text-aba-muted underline decoration-aba-muted/70 underline-offset-4 hover:text-aba-fg"
      >
        Open Cooper/Heron/Heward book
      </a>
      {!note ? (
        <p className="text-[0.9rem] text-aba-muted">
          Tap a citation marker in the text to open Cooper/Heron/Heward locator notes here.
        </p>
      ) : (
        <div
          key={activeRef ?? "unset"}
          className="codex-pane flex flex-1 flex-col gap-3 rounded border border-aba-divider bg-aba-depth p-4"
        >
          <p className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-aba-muted">
            {footnotes[activeRef!]?.label}
          </p>
          {note.lines.map((line) => (
            <p key={line} className="text-[0.95rem] leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      )}
    </aside>
  );
}
