"use client";

import { BDSBank } from "@/components/bds/BDSBank";
import type { BDSQuestion } from "@/lib/content-types";

interface VocabQuizSectionProps {
  moduleId: string;
  chapterNumber: number;
  questions: BDSQuestion[];
  primaryTcoDomain?: BDSQuestion["tcoDomain"];
  /** Extra note under the heading */
  note?: string;
}

/** Shared vocabulary quiz block shown at the end of chapter Reading / Quiz tabs. */
export function VocabQuizSection({
  moduleId,
  chapterNumber,
  questions,
  primaryTcoDomain,
  note,
}: VocabQuizSectionProps) {
  if (questions.length === 0) return null;

  return (
    <section
      id="chapter-vocab-quiz"
      className="flex flex-col gap-6 border-t-2 border-aba-divider pt-10"
      aria-label={`Chapter ${chapterNumber} vocabulary quiz`}
    >
      <div className="space-y-3 rounded border border-aba-divider bg-aba-depth px-5 py-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-aba-muted">
          Vocabulary quiz
        </p>
        <h2 className="text-[1.35rem] font-semibold text-aba-fg">
          Chapter {chapterNumber} vocabulary quiz
        </h2>
        <p className="max-w-3xl text-[0.95rem] leading-relaxed text-aba-muted">
          {note ??
            "Practice this chapter’s vocabulary words with definition matches, application vignettes, and discrimination items."}{" "}
          ({questions.length} questions)
        </p>
      </div>
      <BDSBank
        moduleId={`${moduleId}-vocab`}
        questions={questions}
        title={`Chapter ${chapterNumber} vocabulary quiz`}
        primaryTcoDomain={primaryTcoDomain}
      />
    </section>
  );
}
