"use client";

import { PlainLanguageSummarySection } from "@/components/chapter/PlainLanguageSummarySection";
import {
  InlineCodexSegments,
  splitCodexSegmentsIntoParagraphs,
} from "@/components/chapter/FootnotePrimitives";
import type {
  CodexPlainLanguageSummary,
  CodexSegment,
  FootnoteEntry,
} from "@/lib/content-types";
import { useState } from "react";

const COOPER_BOOK_URL =
  "https://www.pearson.com/en-us/subject-catalog/p/applied-behavior-analysis/P200000000905";

interface CodexViewProps {
  heading: string;
  segments: CodexSegment[];
  footnotes: Record<string, FootnoteEntry>;
  plainLanguageSummary?: CodexPlainLanguageSummary;
}

export function CodexView({
  heading,
  segments,
  footnotes,
  plainLanguageSummary,
}: CodexViewProps) {
  const [activeRef, setActiveRef] = useState<string | null>(null);
  const activeNote = activeRef ? footnotes[activeRef] : undefined;
  const readingParagraphs = splitCodexSegmentsIntoParagraphs(segments);

  return (
    <div className="flex flex-col gap-10">
      <section
        className="flex min-h-[28rem] w-full gap-px border border-aba-divider bg-aba-divider md:flex-row"
        aria-label="Chapter reading"
      >
        <div
          className="flex flex-col bg-aba-panel p-6 md:w-[65%]"
          role="region"
          aria-label="Chapter text and plain-language companion"
        >
        <header className="mb-6 border border-aba-divider px-4 py-2 text-[0.72rem] font-semibold tracking-[0.22em] text-aba-muted">
          {heading}
          <a
            href={COOPER_BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-3 text-[0.68rem] normal-case underline decoration-aba-muted/70 underline-offset-4 hover:text-aba-fg"
          >
            Cooper/Heron/Heward
          </a>
        </header>
        <article className="flex-1 text-[0.98rem] leading-relaxed tracking-tight">
          <h2 className="sr-only">Chapter reading</h2>
          <div className="max-w-none space-y-5">
            {readingParagraphs.map((paragraph, paragraphIndex) => (
              <p
                key={`reading-paragraph-${paragraphIndex}`}
                className="whitespace-pre-wrap leading-[1.8]"
              >
                <InlineCodexSegments
                  segments={paragraph}
                  footnotes={footnotes}
                  activeRef={activeRef}
                  onActivateRef={setActiveRef}
                  ariaControlsId="footnote-inspector"
                />
              </p>
            ))}
          </div>
        </article>

        <PlainLanguageSummarySection
          summary={plainLanguageSummary}
          footnotes={footnotes}
          activeRef={activeRef}
          onActivateRef={setActiveRef}
          footnoteAsideId="footnote-inspector"
          normalizeReadingHeading
        />
        </div>

        <aside
          id="footnote-inspector"
          className="relative flex flex-col bg-aba-panel p-6 md:w-[35%]"
          aria-live="polite"
        >
        <header className="mb-4 border border-aba-divider px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-aba-muted">
          References
        </header>
        <a
          href={COOPER_BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="mb-4 text-[0.78rem] text-aba-muted underline decoration-aba-muted/70 underline-offset-4 hover:text-aba-fg"
        >
          Open Cooper/Heron/Heward book
        </a>
        <div className="flex flex-1 flex-col overflow-hidden">
          {!activeNote ? (
            <p className="text-[0.9rem] text-aba-muted">
              Tap a citation marker in the chapter reading or plain-language recap below to open Cooper/Heron/Heward notes and Task List reminders here.
            </p>
          ) : (
            <div
              key={activeRef ?? "unset"}
              className="codex-pane flex flex-1 flex-col gap-3 rounded border border-aba-divider bg-aba-depth p-4"
            >
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-aba-muted">
                {footnotes[activeRef!]?.label}
              </p>
              {activeNote.lines.map((line) => (
                <p key={line} className="text-[0.95rem] leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
        </aside>
      </section>
    </div>
  );
}
