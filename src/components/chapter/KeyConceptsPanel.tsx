"use client";

import type { FootnoteEntry, KeyConceptsSection } from "@/lib/content-types";
import {
  FootnoteInspectorAside,
  InlineCodexSegments,
} from "@/components/chapter/FootnotePrimitives";
import { PlainLanguageSummarySection } from "@/components/chapter/PlainLanguageSummarySection";
import { useState } from "react";

interface KeyConceptsPanelProps {
  section: KeyConceptsSection;
  footnotes: Record<string, FootnoteEntry>;
}

export function KeyConceptsPanel({ section, footnotes }: KeyConceptsPanelProps) {
  const [activeRef, setActiveRef] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-10">
      <section
        className="flex min-h-[22rem] w-full flex-col gap-px border border-aba-divider bg-aba-divider md:flex-row"
        aria-label="Key concepts lattice"
      >
        <div className="flex flex-col gap-8 bg-aba-panel p-6 md:w-[65%]">
          <header className="border border-aba-divider px-4 py-2 text-[0.72rem] font-semibold tracking-[0.22em] text-aba-muted">
            {section.heading ?? "Key concepts"}
          </header>
          {section.intro ? (
            <p className="text-[0.92rem] leading-relaxed text-aba-muted">{section.intro}</p>
          ) : null}
          <div className="flex flex-col gap-8">
            {section.concepts.map((concept) => (
              <article
                key={concept.title}
                className="rounded border border-aba-divider bg-black/25 px-5 py-5 text-[0.96rem] leading-relaxed"
              >
                <h3 className="mb-3 text-[1rem] font-semibold tracking-tight text-aba-fg">
                  {concept.title}
                </h3>
                <div className="text-[0.94rem] leading-relaxed">
                  <InlineCodexSegments
                    segments={concept.segments}
                    footnotes={footnotes}
                    activeRef={activeRef}
                    onActivateRef={setActiveRef}
                    ariaControlsId="chapter-footnote-pane"
                  />
                </div>
              </article>
            ))}
          </div>

          <PlainLanguageSummarySection
            summary={section.plainLanguageSummary}
            footnotes={footnotes}
            activeRef={activeRef}
            onActivateRef={setActiveRef}
            footnoteAsideId="chapter-footnote-pane"
          />
        </div>
        <FootnoteInspectorAside
          heading="References"
          footnotes={footnotes}
          activeRef={activeRef}
        />
      </section>
    </div>
  );
}
