"use client";

import type { WorksheetConfig } from "@/lib/content-types";
import { gradeWorksheetFields } from "@/lib/rubric";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import { useMemo, useState, useTransition } from "react";

interface WorksheetProps {
  moduleId: string;
  worksheet: WorksheetConfig;
}

export function Worksheet({ moduleId, worksheet }: WorksheetProps) {
  const initialSelections = useMemo(() => {
    const map: Record<string, string> = {};
    worksheet.fields.forEach((field) => {
      map[field.id] = "";
    });
    return map;
  }, [worksheet.fields]);

  const [values, setValues] = useState(initialSelections);
  const [graded, setGraded] = useState<{ score: number; correct: boolean } | null>(
    null,
  );
  const [pending, startTransition] = useTransition();

  const evaluate = () => {
    const result = gradeWorksheetFields(worksheet.fields, values);
    setGraded(result);
    startTransition(async () => {
      await submitStudyAttempt({
        moduleId,
        kind: "worksheet",
        reference: worksheet.title,
        score: result.score,
        payload: { responses: values, correct: result.correct },
      });
    });
  };

  const reset = () => {
    setValues({ ...initialSelections });
    setGraded(null);
  };

  return (
    <section className="flex flex-col gap-5 rounded border border-aba-divider bg-aba-depth p-6">
      <header>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
          Interactive worksheet
        </p>
        <h2 className="mt-2 text-[1.2rem] font-semibold tracking-tight">{worksheet.title}</h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-aba-muted">
          {worksheet.instructions?.trim() ||
            "Answer each dropdown using this chapter's concepts, then select Grade worksheet."}
        </p>
      </header>

      <article className="rounded border border-aba-divider bg-aba-panel p-5 text-[0.95rem] leading-relaxed">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
          Scenario premise
        </p>
        <p className="mt-3">{worksheet.scenario}</p>
      </article>

      {worksheet.scenario_follow_up ? (
        <article className="rounded border border-aba-divider bg-black/25 p-5 text-[0.95rem] leading-relaxed">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
            Scenario extensions
          </p>
          <p className="mt-3 whitespace-pre-wrap">{worksheet.scenario_follow_up}</p>
        </article>
      ) : null}

      <div className="flex flex-col gap-6">
        {worksheet.fields.map((field) => (
          <label key={field.id} className="flex flex-col gap-2">
            <span className="text-[0.9rem]">{field.label}</span>
            <select
              className="rounded border border-aba-divider bg-black/35 px-3 py-2 text-[0.9rem]"
              disabled={Boolean(graded)}
              value={values[field.id]}
              onChange={(event) =>
                setValues((previous) => ({
                  ...previous,
                  [field.id]: event.target.value,
                }))
              }
            >
              <option value="">Select response…</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={evaluate}
          disabled={Boolean(graded) || pending}
          className="rounded border border-aba-muted px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-wide hover:border-aba-fg hover:text-aba-fg disabled:opacity-40"
        >
          Grade worksheet
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded border border-transparent px-4 py-2 text-[0.82rem] text-aba-muted hover:text-aba-fg"
        >
          Reset worksheet
        </button>
      </div>

      {graded ? (
        <section
          className={`rounded border p-4 text-[0.92rem] ${
            graded.correct
              ? "border-[color:var(--aba-correct)] text-[color:var(--aba-correct)]"
              : "border-[color:var(--aba-incorrect)] text-[color:var(--aba-incorrect-soft)]"
          }`}
        >
          <p className="font-semibold">{graded.correct ? "100%" : "0%"} fidelity</p>
          {!graded.correct ? (
            <p className="mt-2">{worksheet.remediationLog}</p>
          ) : null}
        </section>
      ) : null}

      {pending ? <p className="text-[0.8rem] text-aba-muted">Saving…</p> : null}
    </section>
  );
}
