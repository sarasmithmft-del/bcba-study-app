"use client";

import type { FootnoteEntry, VocabularySection } from "@/lib/content-types";
import { FootnoteInspectorAside } from "@/components/chapter/FootnotePrimitives";
import { useState } from "react";

interface VocabularyPanelProps {
  section: VocabularySection;
  footnotes: Record<string, FootnoteEntry>;
}

export function VocabularyPanel({ section, footnotes }: VocabularyPanelProps) {
  const [activeRef, setActiveRef] = useState<string | null>(null);

  return (
    <section
      className="flex min-h-[22rem] w-full flex-col gap-px border border-aba-divider bg-aba-divider md:flex-row"
      aria-label="Chapter vocabulary matrix"
    >
      <div className="flex flex-col gap-6 bg-aba-panel p-6 md:w-[65%]">
        <header className="border border-aba-divider px-4 py-2 text-[0.72rem] font-semibold tracking-[0.22em] text-aba-muted">
          {section.heading ?? "VOCABULARY MATRIX"}
        </header>
        {section.intro ? (
          <p className="text-[0.92rem] leading-relaxed text-aba-muted">{section.intro}</p>
        ) : null}
        <p className="rounded border border-aba-divider bg-black/20 px-3 py-2 text-[0.84rem] leading-relaxed text-aba-muted">
          After you review these terms, open the <span className="font-semibold text-aba-fg">Vocab quiz</span> tab
          for definition matches, application vignettes, and discrimination items on the same words.
        </p>
        <dl className="flex flex-col gap-5">
          {section.entries.map((entry) => (
            <div
              key={entry.term}
              className="rounded border border-aba-divider bg-black/25 px-4 py-4 text-[0.94rem] leading-relaxed"
            >
              <dt className="flex flex-wrap items-baseline gap-2 font-semibold text-aba-fg">
                <span>{entry.term}</span>
                {entry.footnoteRef && footnotes[entry.footnoteRef] ? (
                  <button
                    type="button"
                    className="text-[0.76rem] font-normal text-aba-muted underline decoration-aba-muted/70 underline-offset-4 hover:text-aba-fg"
                    onClick={() => setActiveRef(entry.footnoteRef!)}
                    aria-controls="chapter-footnote-pane"
                  >
                    {footnotes[entry.footnoteRef].label}
                  </button>
                ) : null}
              </dt>
              <dd className="mt-2 text-[0.92rem] text-aba-muted">{entry.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
      <FootnoteInspectorAside
        heading="References"
        footnotes={footnotes}
        activeRef={activeRef}
      />
    </section>
  );
}
