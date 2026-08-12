"use client";

import { BDSBank } from "@/components/bds/BDSBank";
import { BDSTest } from "@/components/bds/BDSTest";
import { KeyConceptsPanel } from "@/components/chapter/KeyConceptsPanel";
import { VocabularyPanel } from "@/components/chapter/VocabularyPanel";
import { CodexView } from "@/components/codex/CodexView";
import { GameRegistry } from "@/components/games/GameRegistry";
import { VocabQuizSection } from "@/components/module/VocabQuizSection";
import { Worksheet } from "@/components/worksheet/Worksheet";
import type { StudyModule } from "@/lib/content-types";
import { mergeChapterFootnotes } from "@/lib/mergeFootnotes";
import { useEffect, useMemo, useState } from "react";

type TabId =
  | "codex"
  | "vocabulary"
  | "keyConcepts"
  | "activities"
  | "worksheet"
  | "quiz";

export function ModuleWorkspace({ module }: { module: StudyModule }) {
  const mergedFootnotes = useMemo(
    () => mergeChapterFootnotes(module.codex.footnotes, module.supplementalFootnotes),
    [module.codex.footnotes, module.supplementalFootnotes],
  );

  const hasVocabQuiz = Boolean(module.vocabQuizBank && module.vocabQuizBank.length > 0);

  const tabs = useMemo(() => {
    const list: Array<{ id: TabId; label: string }> = [{ id: "codex", label: "Reading" }];
    if (module.vocabularySection) {
      list.push({ id: "vocabulary", label: "Vocabulary" });
    }
    if (module.keyConceptsSection) {
      list.push({ id: "keyConcepts", label: "Key concepts" });
    }
    list.push(
      { id: "activities", label: "Activities" },
      { id: "worksheet", label: "Worksheet" },
      {
        id: "quiz",
        label:
          module.bdsBank && module.bdsBank.length > 1 ? "Chapter quizzes" : "Chapter quiz",
      },
    );
    return list;
  }, [module.keyConceptsSection, module.vocabularySection, module.bdsBank]);

  const [tab, setTab] = useState<TabId>("codex");

  useEffect(() => {
    if (!tabs.some((entry) => entry.id === tab)) {
      setTab("codex");
    }
  }, [tabs, tab]);

  const scrollToVocabQuiz = () => {
    document.getElementById("chapter-vocab-quiz")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const chapterQuiz =
    module.bdsBank && module.bdsBank.length > 0 ? (
      module.bdsBank.length > 1 ? (
        <BDSBank
          moduleId={module.id}
          questions={module.bdsBank}
          primaryTcoDomain={module.primaryTcoDomain}
        />
      ) : (
        <BDSTest moduleId={module.id} question={module.bdsBank[0]!} />
      )
    ) : module.bds ? (
      <BDSTest moduleId={module.id} question={module.bds} />
    ) : (
      <p className="text-[0.9rem] text-aba-muted">No quiz items are set up for this chapter yet.</p>
    );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-8">
      <header className="space-y-4 border-b border-aba-divider pb-8">
        <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-aba-muted">
          Chapter {module.chapterNumber}
        </p>
        <h1 className="text-[clamp(1.6rem,2vw,2.35rem)] font-semibold leading-tight">
          {module.title}
        </h1>
      </header>

      <nav
        className="-mx-px flex flex-wrap gap-2 border-y border-aba-divider px-1 py-2"
        aria-label="Sections"
      >
        {tabs.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => setTab(entry.id)}
            className={`rounded border px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] ${
              tab === entry.id
                ? "border-[color:var(--aba-muted)] bg-black/35 text-aba-fg"
                : "border-transparent text-aba-muted hover:border-aba-divider hover:text-aba-fg"
            }`}
            aria-current={tab === entry.id ? "page" : undefined}
          >
            {entry.label}
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-16">
        {tab === "codex" ? (
          <CodexView
            heading={module.codex.heading}
            segments={module.codex.segments}
            footnotes={mergedFootnotes}
            plainLanguageSummary={module.codex.plainLanguageSummary}
          />
        ) : null}

        {tab === "vocabulary" && module.vocabularySection ? (
          <div className="flex flex-col gap-12">
            <VocabularyPanel
              section={module.vocabularySection}
              footnotes={mergedFootnotes}
              quizQuestionCount={module.vocabQuizBank?.length}
              onOpenQuiz={hasVocabQuiz ? scrollToVocabQuiz : undefined}
            />
            {hasVocabQuiz ? (
              <VocabQuizSection
                moduleId={module.id}
                chapterNumber={module.chapterNumber}
                questions={module.vocabQuizBank!}
                primaryTcoDomain={module.primaryTcoDomain}
              />
            ) : null}
          </div>
        ) : null}

        {tab === "keyConcepts" && module.keyConceptsSection ? (
          <KeyConceptsPanel section={module.keyConceptsSection} footnotes={mergedFootnotes} />
        ) : null}

        {tab === "activities" ? (
          <GameRegistry moduleId={module.id} activities={module.activities} />
        ) : null}

        {tab === "worksheet" ? <Worksheet moduleId={module.id} worksheet={module.worksheet} /> : null}

        {tab === "quiz" ? chapterQuiz : null}
      </div>
    </div>
  );
}
