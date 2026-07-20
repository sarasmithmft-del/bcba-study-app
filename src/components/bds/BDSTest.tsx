"use client";

import type { BDSQuestion } from "@/lib/content-types";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import { useMemo, useState, useTransition } from "react";

interface BDSTestProps {
  moduleId: string;
  question: BDSQuestion;
}

export function BDSTest({ moduleId, question }: BDSTestProps) {
  const sortedOptions = useMemo(
    () => [...question.options].sort((first, second) => first.key.localeCompare(second.key)),
    [question.options],
  );
  const correctKey =
    sortedOptions.find((option) => option.correct)?.key ?? sortedOptions[0]?.key ?? "";

  const [choice, setChoice] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const submit = () => {
    if (!choice || submitted) return;
    setSubmitted(true);
    startTransition(async () => {
      const correct = choice === correctKey;
      await submitStudyAttempt({
        moduleId,
        kind: "bds",
        reference: question.id,
        score: correct ? 100 : 0,
        payload: { choice },
      });
    });
  };

  return (
    <section className="flex flex-col gap-5 rounded border border-aba-divider bg-aba-depth p-6">
      <header>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
          Chapter quiz
        </p>
        <h2 className="mt-3 text-[1.05rem] leading-relaxed tracking-tight">{question.stem}</h2>
      </header>

      {submitted && correctKey ? (
        <p
          className="rounded border border-[color:var(--aba-correct)] bg-black/35 px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--aba-correct)]"
          role="status"
        >
          Correct answer · ({correctKey})
        </p>
      ) : null}

      <div role="radiogroup" aria-label="Response options" className="flex flex-col gap-3">
        {sortedOptions.map((option) => {
          const identifier = `${question.id}-${option.key}`;
          return (
            <label
              key={option.key}
              htmlFor={identifier}
              className={`flex cursor-pointer gap-3 rounded border border-aba-divider px-4 py-3 ${
                submitted && option.correct
                  ? "border-[color:var(--aba-correct)]"
                  : submitted && choice === option.key && !option.correct
                    ? "border-[color:var(--aba-incorrect)]"
                    : "hover:border-aba-muted"
              }`}
            >
              <input
                id={identifier}
                type="radio"
                className="mt-1"
                name={`bds-${question.id}`}
                value={option.key}
                checked={choice === option.key}
                disabled={submitted}
                onChange={() => setChoice(option.key)}
              />
              <div className="flex-1 space-y-1">
                <p className="text-[0.9rem]">
                  ({option.key}) {option.text}
                </p>
                {submitted ? (
                  <button
                    type="button"
                    className="text-left text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted"
                    onClick={() =>
                      setOpenKey((previous) =>
                        previous === option.key ? null : option.key,
                      )
                    }
                  >
                    {openKey === option.key ? "Hide explanation" : "Why this answer"}
                  </button>
                ) : null}
                {submitted && openKey === option.key ? (
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
          disabled={!choice || submitted || pending}
          className="rounded border border-aba-muted px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-aba-fg disabled:opacity-40"
        >
          Submit and review explanations
        </button>
        {submitted ? (
          <p className="text-[0.8rem] text-aba-muted" role="status">
            Answers saved—you can open each explanation below.
          </p>
        ) : null}
      </div>

      {pending ? <p className="text-[0.8rem] text-aba-muted">Saving…</p> : null}
    </section>
  );
}
