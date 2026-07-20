"use client";

import {
  InlineCodexSegments,
  splitCodexSegmentsIntoParagraphs,
} from "@/components/chapter/FootnotePrimitives";
import type {
  CodexPlainLanguageSummary,
  FootnoteEntry,
} from "@/lib/content-types";

export function PlainLanguageSummarySection({
  summary,
  footnotes,
  activeRef,
  onActivateRef,
  footnoteAsideId = "chapter-footnote-pane",
  normalizeReadingHeading = false,
}: {
  summary: CodexPlainLanguageSummary | undefined;
  footnotes?: Record<string, FootnoteEntry>;
  activeRef?: string | null;
  onActivateRef?: (ref: string) => void;
  /** Must match the adjacent References `<aside id=…>` (Reading tab: `footnote-inspector`). */
  footnoteAsideId?: string;
  /** Reading tab uses a single standard heading across chapters. */
  normalizeReadingHeading?: boolean;
}) {
  if (!summary?.chunks?.length) {
    return null;
  }

  const interactive = Boolean(footnotes && onActivateRef);
  const heading = normalizeReadingHeading
    ? "Put Simply- Conversational Recap"
    : (summary.heading ?? "In other words");
  const cooperBookUrl =
    "https://www.pearson.com/en-us/subject-catalog/p/applied-behavior-analysis/P200000000905";

  return (
    <section
      className="mt-10 rounded border border-aba-divider bg-aba-panel p-6 md:p-8"
      aria-label="Put simply chapter companion"
    >
      <header className="mb-6 border-b border-aba-divider pb-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          {heading}
        </p>
        {normalizeReadingHeading ? (
          <a
            href={cooperBookUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-[0.78rem] text-aba-muted underline decoration-aba-muted/70 underline-offset-4 hover:text-aba-fg"
          >
            Open Cooper/Heron/Heward book
          </a>
        ) : null}
        {summary.intro ? (
          <p className="mt-4 max-w-[52rem] text-[0.92rem] leading-relaxed text-aba-muted">
            {summary.intro}
          </p>
        ) : null}
      </header>
      <div className="flex max-w-[52rem] flex-col gap-6">
        {summary.chunks.map((chunk, index) => (
          <div key={`plain-${index}-${chunk.subtitle ?? "body"}`} className="space-y-4">
            {chunk.segments?.length && interactive ? (
              splitCodexSegmentsIntoParagraphs(chunk.segments).map(
                (paragraph, paragraphIndex) => (
                  <p
                    key={`plain-segment-${index}-${paragraphIndex}`}
                    className="whitespace-pre-wrap text-[0.98rem] leading-[1.8] tracking-tight text-aba-fg"
                  >
                    {chunk.subtitle && paragraphIndex === 0 ? (
                      <span className="font-semibold text-aba-muted">
                        {chunk.subtitle}:{" "}
                      </span>
                    ) : null}
                    <InlineCodexSegments
                      segments={paragraph}
                      footnotes={footnotes!}
                      activeRef={activeRef ?? null}
                      onActivateRef={onActivateRef!}
                      ariaControlsId={footnoteAsideId}
                    />
                  </p>
                ),
              )
            ) : chunk.text ? (
              chunk.text
                .split(/\n{2,}/)
                .filter((paragraph) => paragraph.trim().length > 0)
                .map((paragraph, paragraphIndex) => (
                  <p
                    key={`plain-text-${index}-${paragraphIndex}`}
                    className="whitespace-pre-wrap text-[0.98rem] leading-[1.8] tracking-tight text-aba-fg"
                  >
                    {chunk.subtitle && paragraphIndex === 0 ? (
                      <span className="font-semibold text-aba-muted">
                        {chunk.subtitle}:{" "}
                      </span>
                    ) : null}
                    {paragraph}
                  </p>
                ))
            ) : chunk.segments?.length ? (
              <p className="text-[0.9rem] text-aba-muted">
                Put-simply segments are defined but footnote wiring is missing—check module assembly.
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
