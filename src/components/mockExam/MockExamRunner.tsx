"use client";

import type { BDSOption, BDSQuestion } from "@/lib/content-types";
import { formatMockExamTimeLimit, mockExamTimeLimitSeconds } from "@/content/mockExam/mockExamTime";
import {
  DOMAIN_RECOMMENDED_MODULES,
  TCO_TARGET_ITEMS_185,
} from "@/lib/tcoDomainModules";
import { formatTcoCodeLabel } from "@/lib/tco/tcoTaskCatalog";
import { shuffleArray } from "@/lib/shuffle";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import Link from "next/link";
import { useEffect, useMemo, useState, useTransition } from "react";

const DEFAULT_MOCK_MODULE_ID = "mock-exam";

type TcoDomain = NonNullable<BDSQuestion["tcoDomain"]>;

const TCO_SHORT: Record<TcoDomain, string> = {
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

/**
 * Approximate BACB 6th ed. TCO item allocations across a 185-item exam.
 * Used only for study-planning contrast on the results screen—verify against
 * the currently published BACB TCO before drawing conclusions.
 */
const TCO_TARGET_ITEMS: Record<TcoDomain, number> = TCO_TARGET_ITEMS_185;

const TCO_TARGET_TOTAL = Object.values(TCO_TARGET_ITEMS).reduce(
  (sum, value) => sum + value,
  0,
);

const TCO_DOMAIN_ORDER: readonly TcoDomain[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
];

export type MockExamIntro = {
  title: string;
  itemCount: number;
  timeLimitSeconds: number;
  description?: string;
};

type PreparedQuestion = {
  id: string;
  stem: string;
  tcoDomain?: BDSQuestion["tcoDomain"];
  tcoCode?: string;
  options: BDSOption[];
};

function prepareQuestion(source: BDSQuestion): PreparedQuestion {
  const shuffled = shuffleArray(source.options);
  const keys = ["A", "B", "C", "D"] as const;
  return {
    id: source.id,
    stem: source.stem,
    tcoDomain: source.tcoDomain,
    tcoCode: source.tcoCode,
    options: shuffled.map((option, idx) => ({
      key: keys[idx]!,
      text: option.text,
      correct: option.correct,
      rationale: option.rationale,
    })),
  };
}

function sortedOptionsFor(question: PreparedQuestion) {
  return [...question.options].sort((first, second) => first.key.localeCompare(second.key));
}

function correctKeyFor(question: PreparedQuestion) {
  return sortedOptionsFor(question).find((option) => option.correct)?.key ?? "";
}

function formatClock(totalSeconds: number) {
  return formatMockExamTimeLimit(totalSeconds);
}

/**
 * Prefer the native crypto.randomUUID() when available (all modern browsers +
 * Node 19+). Falls back to a Math.random-based v4-shaped id when it isn't; this
 * is only ever called in the client after mount so `window`/`globalThis` are
 * safe to reference.
 */
function mintExamSessionId(): string {
  const c: Crypto | undefined =
    typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  const rand = () => Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, "0");
  return `${rand()}-${rand().slice(0, 4)}-4${rand().slice(0, 3)}-a${rand().slice(0, 3)}-${rand()}${rand().slice(0, 4)}`;
}

interface MockExamRunnerProps {
  questions: BDSQuestion[];
  intro: MockExamIntro;
  moduleId?: string;
}

export function MockExamRunner({ questions, intro, moduleId = DEFAULT_MOCK_MODULE_ID }: MockExamRunnerProps) {
  const [phase, setPhase] = useState<"intro" | "exam" | "results">("intro");
  const [preparedRound, setPreparedRound] = useState<PreparedQuestion[]>([]);
  const [probeIndex, setProbeIndex] = useState(0);
  const [choice, setChoice] = useState<string | undefined>();
  const [answers, setAnswers] = useState<Array<{ choice: string; correct: boolean } | null>>([]);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [remaining, setRemaining] = useState(intro.timeLimitSeconds);
  const [timedOut, setTimedOut] = useState(false);
  /**
   * UUID minted at `beginExam` and persisted in the payload for every submit
   * during this attempt. Lets the cross-exam dashboard group items into true
   * attempts without relying on time-gap heuristics.
   */
  const [examSessionId, setExamSessionId] = useState<string | null>(null);
  const [reviewCodeFilter, setReviewCodeFilter] = useState<string>("all");

  const reviewCodeOptions = useMemo(() => {
    const codes = new Set<string>();
    for (const question of preparedRound) {
      if (question.tcoCode) codes.add(question.tcoCode);
    }
    return [...codes].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [preparedRound]);

  const reviewItems = useMemo(() => {
    return preparedRound
      .map((question, index) => ({ question, index }))
      .filter(({ question }) =>
        reviewCodeFilter === "all" ? true : question.tcoCode === reviewCodeFilter,
      );
  }, [preparedRound, reviewCodeFilter]);

  const safeProbeIndex = useMemo(
    () =>
      preparedRound.length === 0 ?
        0
      : Math.min(Math.max(probeIndex, 0), preparedRound.length - 1),
    [probeIndex, preparedRound.length],
  );

  const current =
    preparedRound.length === 0 ? undefined : preparedRound[safeProbeIndex];
  const sortedOptions = useMemo(
    () => (current ? sortedOptionsFor(current) : []),
    [current],
  );
  const correctKey = useMemo(() => (current ? correctKeyFor(current) : ""), [current]);

  const submittedForCurrent = Boolean(answers[safeProbeIndex]);

  const allAnsweredExplicit =
    preparedRound.length > 0 &&
    answers.length === preparedRound.length &&
    answers.every((entry) => entry !== null);

  useEffect(() => {
    if (phase !== "exam") return;
    if (timedOut) return;
    if (remaining <= 0) {
      setTimedOut(true);
      return;
    }
    const t = window.setTimeout(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => window.clearTimeout(t);
  }, [phase, timedOut, remaining]);

  useEffect(() => {
    if (phase !== "exam") return;
    if (timedOut || allAnsweredExplicit) setPhase("results");
  }, [phase, timedOut, allAnsweredExplicit, answers]);

  useEffect(() => {
    if (preparedRound.length === 0) return;
    if (probeIndex > preparedRound.length - 1) {
      setProbeIndex(preparedRound.length - 1);
    }
  }, [probeIndex, preparedRound.length]);

  function beginExam() {
    if (!questions.length) return;
    const shuffledQs = shuffleArray(questions);
    const prepared = shuffledQs.map(prepareQuestion);
    setPreparedRound(prepared);
    setAnswers(prepared.map(() => null));
    setProbeIndex(0);
    setChoice(undefined);
    setOpenKey(null);
    setTimedOut(false);
    setRemaining(intro.timeLimitSeconds);
    setExamSessionId(mintExamSessionId());
    setPhase("exam");
  }

  function endEarly() {
    setTimedOut(true);
  }

  const submit = () => {
    if (!current || !choice || submittedForCurrent) return;
    if (timedOut) return;

    const correct = choice === correctKey;
    setAnswers((previous) => {
      const next = [...previous];
      next[safeProbeIndex] = { choice, correct };
      return next;
    });
    startTransition(async () => {
      await submitStudyAttempt({
        moduleId,
        kind: "mock_exam_item",
        reference: current.id,
        score: correct ? 100 : 0,
        payload: {
          tcoDomain: current.tcoDomain,
          tcoCode: current.tcoCode,
          probeIndex: safeProbeIndex,
          choice,
          ...(examSessionId ? { examSessionId } : {}),
        },
      });
    });

  };


  const goNext = () => {
    if (safeProbeIndex >= preparedRound.length - 1 || timedOut) return;
    setProbeIndex((i) => i + 1);
    setChoice(undefined);
    setOpenKey(null);
  };

  function restartEverything() {
    setPhase("intro");
    setPreparedRound([]);
    setProbeIndex(0);
    setChoice(undefined);
    setAnswers([]);
    setOpenKey(null);
    setTimedOut(false);
    setRemaining(intro.timeLimitSeconds);
    setExamSessionId(null);
    setReviewCodeFilter("all");
  }

  /** Re-run only items that were incorrect or unanswered, with a scaled timer. */
  function beginMissedDrill() {
    const missedIds = new Set(
      preparedRound
        .filter((_, index) => !answers[index]?.correct)
        .map((q) => q.id),
    );
    if (missedIds.size === 0) return;
    const subset = shuffleArray(questions.filter((q) => missedIds.has(q.id)));
    if (!subset.length) return;
    const prepared = subset.map(prepareQuestion);
    setPreparedRound(prepared);
    setAnswers(prepared.map(() => null));
    setProbeIndex(0);
    setChoice(undefined);
    setOpenKey(null);
    setTimedOut(false);
    setRemaining(mockExamTimeLimitSeconds(prepared.length));
    setExamSessionId(mintExamSessionId());
    setPhase("exam");
  }

  function scoreAggregate() {
    let correct = 0;
    for (let i = 0; i < preparedRound.length; i++) {
      if (answers[i]?.correct) correct += 1;
    }
    const total = preparedRound.length || 1;
    return { correct, total, pct: (correct / total) * 100 };
  }

  function domainBuckets() {
    const tally: Partial<Record<TcoDomain, { correct: number; total: number }>> = {};
    for (let i = 0; i < preparedRound.length; i++) {
      const domain = preparedRound[i]?.tcoDomain;
      if (!domain) continue;
      const bucket = tally[domain] ?? { correct: 0, total: 0 };
      bucket.total += 1;
      if (answers[i]?.correct) bucket.correct += 1;
      tally[domain] = bucket;
    }
    return (Object.entries(tally) as Array<[TcoDomain, { correct: number; total: number }]>).sort(
      (first, second) => first[0].localeCompare(second[0]),
    );
  }

  type DomainSummaryRow = {
    domain: TcoDomain;
    correct: number;
    delivered: number;
    targetItems: number;
    targetPct: number;
    deliveredPct: number;
    correctPct: number | null;
    /** delivered% − target%. Positive = over-represented in this exam vs TCO; negative = under-represented. */
    deliveryGapPct: number;
    priority: "high" | "medium" | "low" | "n/a";
  };

  function domainSummary(): DomainSummaryRow[] {
    const buckets = domainBuckets();
    const bucketMap = new Map<TcoDomain, { correct: number; total: number }>(buckets);
    const deliveredTotal = buckets.reduce((sum, [, row]) => sum + row.total, 0) || 1;
    return TCO_DOMAIN_ORDER.map((domain) => {
      const bucket = bucketMap.get(domain);
      const delivered = bucket?.total ?? 0;
      const correct = bucket?.correct ?? 0;
      const targetItems = TCO_TARGET_ITEMS[domain];
      const targetPct = (targetItems / TCO_TARGET_TOTAL) * 100;
      const deliveredPct = (delivered / deliveredTotal) * 100;
      const correctPct = delivered > 0 ? (correct / delivered) * 100 : null;
      const deliveryGapPct = deliveredPct - targetPct;
      let priority: DomainSummaryRow["priority"];
      if (correctPct === null) priority = "n/a";
      else if (correctPct < 70 && targetPct >= 10) priority = "high";
      else if (correctPct < 70) priority = "medium";
      else priority = "low";
      return {
        domain,
        correct,
        delivered,
        targetItems,
        targetPct,
        deliveredPct,
        correctPct,
        deliveryGapPct,
        priority,
      };
    });
  }

  if (phase === "intro") {
    return (
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-14">
        <header className="space-y-4 border border-aba-divider bg-aba-depth p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-aba-muted">Mock exam</p>
          <h1 className="text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-tight">{intro.title}</h1>
          <p className="text-[0.95rem] leading-relaxed text-aba-muted">
            {intro.itemCount} multiple-choice items ·{" "}
            <strong className="text-aba-fg">{formatClock(intro.timeLimitSeconds)}</strong> time limit (official BCBA
            exam format). Labels A–I follow the sixth-edition Test Content Outline for review sorting—not official exam
            specifications.
          </p>
          {intro.description ?
            <p className="text-[0.9rem] leading-relaxed text-aba-muted">{intro.description}</p>
          : null}
          <p className="rounded border border-aba-divider bg-black/35 p-4 text-[0.82rem] leading-relaxed text-aba-muted">
            <strong className="text-aba-fg">Not BACB-affiliated.</strong> Outcomes here do not predict exam results.
            Confirm scope and wording with your handbook and the published TCO.
          </p>
          <ul className="list-inside list-disc space-y-1 text-[0.85rem] text-aba-muted">
            <li>Session time limit: {formatClock(intro.timeLimitSeconds)} (4 hours for 185 items).</li>
            <li>After time runs out, blanks count wrong in the summary.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              className="rounded border border-aba-muted px-5 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em]"
              onClick={beginExam}
            >
              Begin mock exam
            </button>
            <Link
              prefetch={false}
              href="/"
              className="rounded border border-aba-divider px-5 py-3 text-[0.85rem] uppercase tracking-[0.18em] text-aba-muted hover:border-aba-muted hover:text-aba-fg"
            >
              ← Home
            </Link>
          </div>
        </header>
      </section>
    );
  }

  if (phase === "exam" && current && !(timedOut || allAnsweredExplicit)) {
    return (
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-aba-divider pb-4 text-[0.78rem] uppercase tracking-[0.16em] text-aba-muted">
          <p>
            Item {safeProbeIndex + 1} / {preparedRound.length}
            {current?.tcoCode ? ` · ${current.tcoCode}` : current?.tcoDomain ? ` · ${current.tcoDomain}` : ""}
            {current.tcoDomain ?
              <>
                {" · "}
                <span className="text-aba-fg">{TCO_SHORT[current.tcoDomain]}</span>
              </>
            : null}
          </p>
          <p className={remaining <= 300 ? "text-[color:var(--aba-incorrect-soft)]" : ""}>
            Time left · {formatClock(remaining)}
          </p>
          <button
            type="button"
            onClick={endEarly}
            className="rounded border border-aba-divider px-3 py-1 text-[0.7rem] hover:border-aba-muted hover:text-aba-fg"
          >
            End &amp; grade now
          </button>
        </div>

        <div className="rounded border border-aba-divider bg-aba-depth p-6">
          <h2 className="text-[1.05rem] font-semibold leading-relaxed">{current.stem}</h2>

          {submittedForCurrent && correctKey ?
            <p
              className="mt-4 rounded border border-[color:var(--aba-correct)] bg-black/35 px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--aba-correct)]"
              role="status"
            >
              Correct key · ({correctKey})
            </p>
          : null}

          <div role="radiogroup" aria-label="Response options" className="mt-5 flex flex-col gap-3">
            {sortedOptions.map((option) => {
              const identifier = `${current.id}-${option.key}`;
              const locked = submittedForCurrent;
              const chosen = answers[safeProbeIndex]?.choice;
              return (
                <label
                  key={option.key}
                  htmlFor={identifier}
                  className={`flex cursor-pointer gap-3 rounded border border-aba-divider px-4 py-3 ${
                    locked && option.correct ?
                      "border-[color:var(--aba-correct)]"
                    : locked && chosen === option.key && !option.correct ?
                      "border-[color:var(--aba-incorrect)]"
                    : "hover:border-aba-muted"
                  }`}
                >
                  <input
                    id={identifier}
                    type="radio"
                    className="mt-1"
                    name={`mock-exam-${current.id}`}
                    value={option.key}
                    checked={choice === option.key}
                    disabled={locked}
                    onChange={() => setChoice(option.key)}
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-[0.9rem]">
                      ({option.key}) {option.text}
                    </p>
                    {locked ?
                      <>
                        <button
                          type="button"
                          className="text-left text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted hover:text-aba-fg"
                          onClick={() =>
                            setOpenKey((previous) => (previous === option.key ? null : option.key))
                          }
                        >
                          {openKey === option.key ? "Hide rationale" : "Rationale"}
                        </button>
                        {openKey === option.key ?
                          <p className="rounded border border-aba-divider bg-black/30 p-3 text-[0.86rem] leading-relaxed text-aba-muted">
                            {option.rationale}
                          </p>
                        : null}
                      </>
                    : null}
                  </div>
                </label>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={submit}
              disabled={!choice || submittedForCurrent || pending}
              className="rounded border border-aba-muted px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-aba-fg disabled:opacity-40"
            >
              Lock answer &amp; explain
            </button>
            {submittedForCurrent && safeProbeIndex < preparedRound.length - 1 ?
              <button
                type="button"
                onClick={goNext}
                className="rounded border border-aba-divider px-4 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-aba-muted hover:border-aba-muted hover:text-aba-fg"
              >
                Next item
              </button>
            : null}
            {pending ?
              <span className="text-[0.8rem] text-aba-muted">Saving…</span>
            : null}
          </div>
        </div>
      </section>
    );
  }

  if (
    preparedRound.length > 0 &&
    (phase === "results" || timedOut || allAnsweredExplicit)
  ) {
    const { correct, total, pct } = scoreAggregate();
    const summary = domainSummary();
    const anyDelivered = summary.some((row) => row.delivered > 0);
    const skippedCount = answers.filter((a) => a === null).length;
    const wrongAnswered = answers.filter((a) => a !== null && !a.correct).length;

    return (
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-12">
        <header className="space-y-3 border border-aba-divider bg-aba-depth p-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-aba-muted">Mock exam recap</p>
          <h1 className="text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold">Results summary</h1>
          <p className={`text-[0.82rem] uppercase tracking-[0.16em] ${timedOut ? "text-[color:var(--aba-incorrect-soft)]" : "text-[color:var(--aba-correct)]"}`} role="status">
            Overall · {pct.toFixed(1)}% ({correct}/{total} correct){timedOut ? " · timer expired" : ""}
          </p>
          <div className="space-y-1 text-[0.85rem] text-aba-muted">
            <p>
              Incorrect after locking an answer: <span className="text-aba-fg">{wrongAnswered}</span>
            </p>
            <p>
              Never reached / timed out (scored incorrect):{" "}
              <span className="text-aba-fg">{skippedCount}</span>
            </p>
          </div>
        </header>

        {anyDelivered ?
          <div className="rounded border border-aba-divider bg-black/35 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.2em] text-aba-muted">
                By TCO domain (A–I) · weight-check
              </h2>
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-aba-muted">
                Target = approximate BACB 6th ed. TCO
              </p>
            </div>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-aba-muted">
              <strong className="text-aba-fg">Focus</strong> flags domains where accuracy fell below 70%; “high”
              additionally weights domains with ≥10% TCO representation. Target figures are approximations for
              study planning—verify against the currently published BACB TCO before drawing conclusions.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[36rem] text-left text-[0.86rem]" aria-label="Domain performance versus TCO weights">
                <thead className="text-[0.68rem] uppercase tracking-[0.18em] text-aba-muted">
                  <tr>
                    <th scope="col" className="pb-2 pr-4">Domain</th>
                    <th scope="col" className="pb-2 pr-4 text-right">Target</th>
                    <th scope="col" className="pb-2 pr-4 text-right">This exam</th>
                    <th scope="col" className="pb-2 pr-4 text-right">Correct</th>
                    <th scope="col" className="pb-2 text-right">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.map((row) => {
                    const gap = row.deliveryGapPct;
                    const gapLabel =
                      row.delivered === 0 ?
                        "not sampled"
                      : `${gap >= 0 ? "+" : ""}${gap.toFixed(1)} pp`;
                    const focusLabel =
                      row.priority === "high" ? "High"
                      : row.priority === "medium" ? "Medium"
                      : row.priority === "low" ? "—"
                      : "n/a";
                    const focusColor =
                      row.priority === "high" ? "text-[color:var(--aba-incorrect-soft,#f5a5a5)]"
                      : row.priority === "medium" ? "text-[color:var(--aba-warn-soft,#d9c48a)]"
                      : row.priority === "low" ? "text-[color:var(--aba-correct,#7bc47f)]"
                      : "text-aba-muted";
                    return (
                      <tr key={row.domain} className="border-t border-aba-divider align-top">
                        <td className="py-2 pr-4 text-aba-fg">{TCO_SHORT[row.domain]}</td>
                        <td className="py-2 pr-4 text-right text-aba-muted">
                          {row.targetPct.toFixed(1)}%
                          <span className="ml-1 text-[0.72rem] text-aba-muted/70">({row.targetItems})</span>
                        </td>
                        <td className="py-2 pr-4 text-right text-aba-muted">
                          {row.delivered > 0 ?
                            <>
                              {row.deliveredPct.toFixed(1)}%
                              <span className="ml-1 text-[0.72rem] text-aba-muted/70">({row.delivered})</span>
                              <span className="ml-1 block text-[0.7rem] text-aba-muted/70">{gapLabel}</span>
                            </>
                          : <span className="text-[0.75rem] text-aba-muted/70">{gapLabel}</span>}
                        </td>
                        <td className="py-2 pr-4 text-right text-aba-muted">
                          {row.correctPct === null ?
                            "—"
                          : <>
                              {row.correct}/{row.delivered}
                              <span className="ml-1 text-[0.72rem] text-aba-muted/70">({Math.round(row.correctPct)}%)</span>
                            </>
                          }
                        </td>
                        <td className={`py-2 text-right font-semibold ${focusColor}`}>{focusLabel}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        : null}

        {anyDelivered ?
          <div className="rounded border border-aba-divider bg-black/35 p-6">
            <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.2em] text-aba-muted">
              Recommended modules for weak domains
            </h2>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-aba-muted">
              Domains flagged Focus medium/high below 70% accuracy — open a linked chapter before your next full mock.
            </p>
            <ul className="mt-4 space-y-3">
              {summary
                .filter((row) => row.priority === "high" || row.priority === "medium")
                .map((row) => (
                  <li key={row.domain} className="text-[0.86rem]">
                    <p className="font-semibold text-aba-fg">{TCO_SHORT[row.domain]}</p>
                    <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-aba-muted">
                      {(DOMAIN_RECOMMENDED_MODULES[row.domain] ?? []).map((mod) => (
                        <li key={mod.id}>
                          <Link
                            prefetch={false}
                            href={`/module/${mod.id}/`}
                            className="underline decoration-aba-muted underline-offset-4 hover:text-aba-fg"
                          >
                            {mod.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              {summary.every((row) => row.priority !== "high" && row.priority !== "medium") ?
                <li className="text-[0.86rem] text-aba-muted">
                  No weak-domain flags this attempt — keep spacing full mocks and review rationales for any misses.
                </li>
              : null}
            </ul>
          </div>
        : null}

        <details className="rounded border border-aba-divider bg-aba-depth p-4">
          <summary className="cursor-pointer text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-aba-muted">
            Review keyed items &amp; rationales
          </summary>
          {reviewCodeOptions.length > 0 ? (
            <label className="mt-4 flex flex-wrap items-center gap-2 text-[0.78rem] text-aba-muted">
              <span className="uppercase tracking-[0.16em]">Filter by TCO task</span>
              <select
                className="rounded border border-aba-divider bg-black/40 px-2 py-1 text-aba-fg"
                value={reviewCodeFilter}
                onChange={(event) => setReviewCodeFilter(event.target.value)}
              >
                <option value="all">All tasks ({preparedRound.length})</option>
                {reviewCodeOptions.map((code) => (
                  <option key={code} value={code}>
                    {formatTcoCodeLabel(code)}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          <ol className="mt-4 flex list-decimal flex-col gap-4 pl-5 text-[0.9rem]">
            {reviewItems.map(({ question, index }) => {
              const keyed = correctKeyFor(question);
              const res = answers[index];
              const ok = Boolean(res?.correct);
              const sorted = sortedOptionsFor(question);
              return (
                <li key={question.id} className="rounded border border-aba-divider bg-black/25 px-4 py-3 marker:text-aba-muted">
                  <p className="font-semibold text-aba-fg">{question.stem}</p>
                  <p className="mt-2 text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted">
                    {res ? (ok ? "Correct" : "Incorrect") : "Timed out / not answered"} · key ({keyed})
                    {question.tcoDomain ? ` · ${question.tcoDomain}` : ""}
                    {question.tcoCode ? ` · ${question.tcoCode}` : ""}
                  </p>
                  <ul className="mt-3 space-y-2 text-[0.84rem] text-aba-muted">
                    {sorted.map((option) => (
                      <li key={option.key}>
                        <span className={option.correct ? "text-[color:var(--aba-correct)]" : ""}>
                          ({option.key}) {option.text}
                        </span>
                        <span className="mt-1 block text-[0.8rem] text-aba-muted">{option.rationale}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </details>

        <div className="flex flex-wrap gap-3">
          {wrongAnswered + skippedCount > 0 ?
            <button
              type="button"
              onClick={beginMissedDrill}
              className="rounded border border-[color:var(--aba-correct)]/55 bg-[color:var(--aba-correct)]/10 px-5 py-2 text-[0.85rem] uppercase tracking-[0.2em] text-aba-fg"
            >
              Drill missed items ({wrongAnswered + skippedCount})
            </button>
          : null}
          <button
            type="button"
            onClick={restartEverything}
            className="rounded border border-aba-muted px-5 py-2 text-[0.85rem] uppercase tracking-[0.2em]"
          >
            Restart from intro
          </button>
          <Link
            prefetch={false}
            href="/schedule/"
            className="rounded border border-aba-divider px-5 py-2 text-[0.85rem] uppercase tracking-[0.18em] text-aba-muted hover:border-aba-muted hover:text-aba-fg"
          >
            Study schedule
          </Link>
          <Link
            prefetch={false}
            href="/"
            className="rounded border border-aba-divider px-5 py-2 text-[0.85rem] uppercase tracking-[0.18em] text-aba-muted hover:border-aba-muted hover:text-aba-fg"
          >
            ← Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center font-sans"
      style={{ background: "var(--aba-bg,#121212)", color: "var(--aba-fg,#e5e7eb)" }}
    >
      <p className="max-w-lg text-[0.95rem] leading-relaxed text-neutral-400">
        The mock exam viewer did not resolve a visible screen (
        <code className="text-neutral-300">phase={phase}</code>
        ).
      </p>
      <button
        type="button"
        className="rounded border border-neutral-600 px-4 py-2 text-[0.85rem] uppercase tracking-[0.18em]"
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
      <Link href="/" prefetch={false} className="text-[0.82rem] text-neutral-500 underline underline-offset-4">
        ← Home
      </Link>
    </div>
  );
}