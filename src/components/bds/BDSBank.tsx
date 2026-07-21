"use client";

import type { BDSQuestion } from "@/lib/content-types";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import { formatTcoCodeLabel } from "@/lib/tco/tcoTaskCatalog";
import { useEffect, useMemo, useState, useTransition } from "react";

type TcoDomain = NonNullable<BDSQuestion["tcoDomain"]>;

const TCO_LABEL: Record<TcoDomain, string> = {
  A: "A — Foundations / philosophy",
  B: "B — Concepts & principles",
  C: "C — Measurement & interpretation",
  D: "D — Experimental design",
  E: "E — Ethics & professionalism",
  F: "F — Behavior assessment",
  G: "G — Behavior-change procedures",
  H: "H — Selecting & implementing interventions",
  I: "I — Personnel supervision & management",
};

function sortedOptionsFor(question: BDSQuestion) {
  return [...question.options].sort((first, second) => first.key.localeCompare(second.key));
}

function correctKeyFor(question: BDSQuestion) {
  const sorted = sortedOptionsFor(question);
  return sorted.find((option) => option.correct)?.key ?? sorted[0]?.key ?? "";
}

interface BDSBankProps {
  moduleId: string;
  questions: BDSQuestion[];
  title?: string;
  /** Optional approximate BACB 6th ed. TCO domain that this chapter primarily maps to. */
  primaryTcoDomain?: TcoDomain;
}

export function BDSBank({ moduleId, questions, title, primaryTcoDomain }: BDSBankProps) {
  const codeOptions = useMemo(() => {
    const codes = new Set<string>();
    for (const question of questions) {
      if (question.tcoCode) codes.add(question.tcoCode);
    }
    return [...codes].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [questions]);

  const [codeFilter, setCodeFilter] = useState<string>("all");
  const activeQuestions = useMemo(
    () =>
      codeFilter === "all"
        ? questions
        : questions.filter((question) => question.tcoCode === codeFilter),
    [questions, codeFilter],
  );

  const [probeIndex, setProbeIndex] = useState(0);
  const [choice, setChoice] = useState<string | undefined>();
  const [answers, setAnswers] = useState<Array<{ choice: string; correct: boolean } | null>>(() =>
    activeQuestions.map(() => null),
  );
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    setProbeIndex(0);
    setChoice(undefined);
    setAnswers(
      (codeFilter === "all"
        ? questions
        : questions.filter((question) => question.tcoCode === codeFilter)
      ).map(() => null),
    );
    setOpenKey(null);
  }, [codeFilter, questions]);

  const current = activeQuestions[probeIndex];
  const sortedOptions = useMemo(
    () => (current ? sortedOptionsFor(current) : []),
    [current],
  );
  const correctKey = useMemo(() => (current ? correctKeyFor(current) : ""), [current]);

  const submittedForCurrent = answers[probeIndex] !== null;
  const allComplete =
    activeQuestions.length > 0 && answers.every((entry) => entry !== null);

  const submit = () => {
    if (!choice || !current || submittedForCurrent) return;
    const correct = choice === correctKey;
    setAnswers((previous) => {
      const next = [...previous];
      next[probeIndex] = { choice, correct };
      return next;
    });
    startTransition(async () => {
      await submitStudyAttempt({
        moduleId,
        kind: "bds_bank",
        reference: current.id,
        score: correct ? 100 : 0,
        payload: { probeIndex, choice, tcoCode: current.tcoCode },
      });
    });
  };

  const goNext = () => {
    if (probeIndex >= activeQuestions.length - 1) return;
    setProbeIndex((index) => index + 1);
    setChoice(undefined);
    setOpenKey(null);
  };

  const restart = () => {
    setProbeIndex(0);
    setChoice(undefined);
    setAnswers(activeQuestions.map(() => null));
    setOpenKey(null);
  };

  const scorePct =
    (answers.reduce((acc, entry) => acc + (entry?.correct ? 1 : 0), 0) /
      Math.max(activeQuestions.length, 1)) *
    100;

  const filterControl =
    codeOptions.length > 0 ? (
      <label className="flex flex-wrap items-center gap-2 text-[0.78rem] text-aba-muted">
        <span className="uppercase tracking-[0.16em]">TCO task filter</span>
        <select
          className="rounded border border-aba-divider bg-black/40 px-2 py-1 text-aba-fg"
          value={codeFilter}
          onChange={(event) => setCodeFilter(event.target.value)}
        >
          <option value="all">All tasks ({questions.length})</option>
          {codeOptions.map((code) => (
            <option key={code} value={code}>
              {formatTcoCodeLabel(code)}
            </option>
          ))}
        </select>
      </label>
    ) : null;

  if (activeQuestions.length === 0) {
    return (
      <section className="flex flex-col gap-4 rounded border border-aba-divider bg-aba-depth p-6">
        {filterControl}
        <p className="text-[0.9rem] text-aba-muted">No quiz items match this TCO task filter.</p>
      </section>
    );
  }

  if (!current) return null;

  if (allComplete) {
    return (
      <section className="flex flex-col gap-6 rounded border border-aba-divider bg-aba-depth p-6">
        <header>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
            Chapter quizzes complete · review below
          </p>
          <h2 className="mt-3 text-[1.05rem] leading-relaxed tracking-tight">
            {title ?? "Review your answers"}
          </h2>
        </header>

        {filterControl}

        <p
          className="rounded border border-[color:var(--aba-correct)] bg-black/35 px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--aba-correct)]"
          role="status"
        >
          Overall score · {scorePct.toFixed(0)}% ({answers.filter((a) => a?.correct).length}/
          {activeQuestions.length} correct)
        </p>

        {primaryTcoDomain ? (
          (() => {
            const correctCount = answers.filter((a) => a?.correct).length;
            const total = activeQuestions.length;
            const pct = total > 0 ? (correctCount / total) * 100 : 0;
            const priority: "high" | "medium" | "low" =
              pct < 70 ? "high" : pct < 85 ? "medium" : "low";
            const priorityCopy: Record<typeof priority, string> = {
              high: "High priority · re-review this chapter's readings, key concepts, and rationales before your next mock exam.",
              medium:
                "Medium priority · another pass through the vocabulary, SAFMEDS, and applied vignettes should tighten this up.",
              low: "Low priority · solid grasp of this domain in this chapter. Confirm carryover on your next mock exam.",
            };
            const priorityColor =
              priority === "high"
                ? "text-[color:var(--aba-incorrect)] border-[color:var(--aba-incorrect)]"
                : priority === "medium"
                  ? "text-amber-300 border-amber-300/60"
                  : "text-[color:var(--aba-correct)] border-[color:var(--aba-correct)]";
            return (
              <section
                aria-label="TCO domain focus"
                className="rounded border border-aba-divider bg-black/25 p-4"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
                  BCBA TCO focus · study priority
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-aba-fg">
                  Chapter primary domain ·{" "}
                  <span className="font-semibold">{TCO_LABEL[primaryTcoDomain]}</span>
                </p>
                <p className="mt-1 text-[0.85rem] leading-relaxed text-aba-muted">
                  Your score in this chapter · {pct.toFixed(0)}% ({correctCount}/{total} correct)
                </p>
                <p
                  className={`mt-3 inline-block rounded border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${priorityColor}`}
                >
                  Focus · {priority}
                </p>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-aba-muted">
                  {priorityCopy[priority]}
                </p>
                <p className="mt-2 text-[0.72rem] leading-relaxed text-aba-muted/80">
                  Note · Domain assignments are approximate single-domain fits; verify against the
                  currently published BACB TCO before study-planning decisions.
                </p>
              </section>
            );
          })()
        ) : null}

        <ol className="flex flex-col gap-5">
          {activeQuestions.map((question, index) => {
            const sorted = sortedOptionsFor(question);
            const keyed = correctKeyFor(question);
            const result = answers[index];
            return (
              <li
                key={question.id}
                className="rounded border border-aba-divider bg-black/25 px-4 py-4 text-[0.9rem] leading-relaxed"
              >
                <p className="font-semibold text-aba-fg">{question.stem}</p>
                <p className="mt-2 text-[0.78rem] uppercase tracking-[0.16em] text-aba-muted">
                  Result · {result?.correct ? "Correct" : "Incorrect"} · answer ({keyed})
                  {question.tcoCode ? ` · ${question.tcoCode}` : ""}
                </p>
                <div className="mt-3 flex flex-col gap-2 border-t border-aba-divider pt-3">
                  {sorted.map((option) => (
                    <div key={option.key}>
                      <button
                        type="button"
                        className="text-left text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted hover:text-aba-fg"
                        onClick={() =>
                          setOpenKey((previous) =>
                            previous === `${index}-${option.key}` ? null : `${index}-${option.key}`,
                          )
                        }
                      >
                        {openKey === `${index}-${option.key}`
                          ? "Hide explanation"
                          : `Why option (${option.key})`}
                      </button>
                      {openKey === `${index}-${option.key}` ? (
                        <p className="mt-2 rounded border border-aba-divider bg-black/30 p-3 text-[0.86rem] leading-relaxed text-aba-muted">
                          {option.rationale}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={restart}
            className="rounded border border-aba-muted px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-aba-fg"
          >
            Restart chapter quizzes
          </button>
        </div>

        {pending ? <p className="text-[0.8rem] text-aba-muted">Saving…</p> : null}
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-5 rounded border border-aba-divider bg-aba-depth p-6">
      <header>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
          Quiz question {probeIndex + 1} / {questions.length}
        </p>
        <h2 className="mt-3 text-[1.05rem] leading-relaxed tracking-tight">{current.stem}</h2>
      </header>

      {submittedForCurrent && correctKey ? (
        <p
          className="rounded border border-[color:var(--aba-correct)] bg-black/35 px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--aba-correct)]"
          role="status"
        >
          Correct answer · ({correctKey})
        </p>
      ) : null}

      <div role="radiogroup" aria-label="Response options" className="flex flex-col gap-3">
        {sortedOptions.map((option) => {
          const identifier = `${current.id}-${option.key}`;
          const locked = submittedForCurrent;
          const chosen = answers[probeIndex]?.choice;
          return (
            <label
              key={option.key}
              htmlFor={identifier}
              className={`flex cursor-pointer gap-3 rounded border border-aba-divider px-4 py-3 ${
                locked && option.correct
                  ? "border-[color:var(--aba-correct)]"
                  : locked && chosen === option.key && !option.correct
                    ? "border-[color:var(--aba-incorrect)]"
                    : "hover:border-aba-muted"
              }`}
            >
              <input
                id={identifier}
                type="radio"
                className="mt-1"
                name={`bds-bank-${current.id}`}
                value={option.key}
                checked={choice === option.key}
                disabled={locked}
                onChange={() => setChoice(option.key)}
              />
              <div className="flex-1 space-y-1">
                <p className="text-[0.9rem]">
                  ({option.key}) {option.text}
                </p>
                {locked ? (
                  <button
                    type="button"
                    className="text-left text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted"
                    onClick={() =>
                      setOpenKey((previous) => (previous === option.key ? null : option.key))
                    }
                  >
                    {openKey === option.key ? "Hide explanation" : "Why this answer"}
                  </button>
                ) : null}
                {locked && openKey === option.key ? (
                  <p className="rounded border border-aba-divider bg-black/30 p-3 text-[0.86rem] leading-relaxed text-aba-muted">
                    {option.rationale}
                  </p>
                ) : null}
              </div>
            </label>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={submit}
          disabled={!choice || submittedForCurrent || pending}
          className="rounded border border-aba-muted px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-aba-fg disabled:opacity-40"
        >
          Submit and review explanations
        </button>
        {submittedForCurrent && probeIndex < activeQuestions.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded border border-aba-divider px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-aba-muted hover:border-aba-muted hover:text-aba-fg"
          >
            Next question
          </button>
        ) : null}
        {submittedForCurrent && probeIndex === activeQuestions.length - 1 ? (
          <p className="text-[0.8rem] text-aba-muted" role="status">
            Last question saved—opening summary…
          </p>
        ) : null}
      </div>

      {pending ? <p className="text-[0.8rem] text-aba-muted">Saving…</p> : null}
    </section>
  );
}
