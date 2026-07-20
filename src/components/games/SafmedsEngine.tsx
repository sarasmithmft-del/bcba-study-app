"use client";

import type { SafmedsActivity } from "@/lib/content-types";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";

interface SafmedsEngineProps {
  moduleId: string;
  activity: SafmedsActivity;
}

export function SafmedsEngine({ moduleId, activity }: SafmedsEngineProps) {
  const initialQueue = useMemo(
    () => shuffle([...activity.cards.map((_, index) => index)]),
    [activity.cards],
  );

  const [queue, setQueue] = useState<number[]>(() => [...initialQueue]);
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const metricsRef = useRef({ correct: 0, incorrect: 0 });
  const [sessionOver, setSessionOver] = useState(false);
  const sessionFinalized = useRef(false);
  const [pending, startTransition] = useTransition();

  const threshold = activity.mechanics.pass_threshold_accuracy ?? 0;
  const currentIndex = queue[0];
  const card = currentIndex !== undefined ? activity.cards[currentIndex] : undefined;

  useEffect(() => {
    metricsRef.current = { correct, incorrect };
  }, [correct, incorrect]);

  function submitSessionTotals(correctTotal: number, incorrectTotal: number) {
    if (sessionFinalized.current) return;
    sessionFinalized.current = true;
    setSessionOver(true);
    const attempted = correctTotal + incorrectTotal;
    const ratio = attempted === 0 ? 0 : correctTotal / attempted;
    const met = ratio >= threshold;
    startTransition(async () => {
      await submitStudyAttempt({
        moduleId,
        kind: "activity",
        reference: String(activity.activity_id),
        score: Number((ratio * 100).toFixed(2)),
        payload: {
          gameType: "SAFMEDS",
          correct: correctTotal,
          incorrect: incorrectTotal,
          metThreshold: met,
        },
      });
    });
  }

  function advance(markedCorrect: boolean) {
    if (sessionOver || currentIndex === undefined) return;

    if (markedCorrect) {
      setCorrect((prev) => {
        const next = prev + 1;
        metricsRef.current = { correct: next, incorrect: metricsRef.current.incorrect };
        return next;
      });
    } else {
      setIncorrect((prev) => {
        const next = prev + 1;
        metricsRef.current = { correct: metricsRef.current.correct, incorrect: next };
        return next;
      });
    }

    setQueue((items) => {
      const [, ...rest] = items;
      if (rest.length === 0) {
        window.requestAnimationFrame(() => {
          const snapshot = metricsRef.current;
          submitSessionTotals(snapshot.correct, snapshot.incorrect);
        });
        return [];
      }
      setRevealed(false);
      return rest;
    });
  }

  const handleRevealKnow = () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    advance(true);
  };

  const handleRevealMiss = () => {
    if (!revealed) {
      setRevealed(true);
      return;
    }
    advance(false);
  };

  if (sessionOver) {
    const attempts = correct + incorrect;
    const ratio = attempts === 0 ? 0 : correct / attempts;
    const met = ratio >= threshold;
    return (
      <div className="rounded border border-aba-divider bg-aba-depth p-5">
        <div className="space-y-3 text-[0.92rem] leading-relaxed">
          <header className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
            SAFMEDS session summary
          </header>
          <p
            className={
              met
                ? "text-[color:var(--aba-correct)]"
                : "text-[color:var(--aba-incorrect-soft)]"
            }
          >
            Threshold {(threshold * 100).toFixed(0)}% correspondence — observed{" "}
            {(ratio * 100).toFixed(0)}%.
          </p>
          <p className="text-aba-muted">
            Raw cycles: {correct} correct · {incorrect} incorrect.
          </p>
          {pending ? <p className="text-[0.82rem] text-aba-muted">Saving…</p> : null}
        </div>
      </div>
    );
  }

  const awaitingFinalize =
    !sessionOver && queue.length === 0 && activity.cards.length > 0;

  if (!card) {
    if (activity.cards.length === 0) {
      return (
        <div className="rounded border border-aba-divider bg-aba-depth p-5 text-[0.9rem] text-aba-muted">
          No SAFMEDS cards configured for this activity.
        </div>
      );
    }
    if (awaitingFinalize) {
      return (
        <div className="flex flex-col gap-3 rounded border border-aba-divider bg-aba-depth p-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
            SAFMEDS fluency engine
          </p>
          <p className="text-[0.9rem] leading-relaxed text-aba-muted">
            Deck cleared — tallying correspondence for session record…
          </p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="flex flex-col gap-4 rounded border border-aba-divider bg-aba-depth p-5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-aba-divider pb-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
        <span>SAFMEDS fluency engine</span>
        <div className="flex gap-4 text-[0.75rem] tracking-normal text-aba-fg">
          <span>Δ+ {correct}</span>
          <span>Δ− {incorrect}</span>
        </div>
      </header>

      <div className="rounded border border-aba-divider bg-black/30 p-5">
        <p className="text-[0.7rem] uppercase tracking-[0.12em] text-aba-muted">
          Precision teaching card
        </p>
        <p className="mt-3 text-[1.05rem] leading-relaxed">{card.front}</p>
        {revealed ? (
          <p className="mt-5 border-t border-aba-divider pt-4 text-[0.94rem] leading-relaxed text-aba-muted">
            {card.back}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleRevealKnow}
          className="rounded border border-[color:var(--aba-correct)] px-4 py-2 text-[0.85rem] uppercase tracking-wide text-[color:var(--aba-correct)]"
        >
          {revealed ? "Mark correct" : "Reveal definition"}
        </button>
        <button
          type="button"
          onClick={handleRevealMiss}
          className="rounded border border-[color:var(--aba-incorrect)] px-4 py-2 text-[0.85rem] uppercase tracking-wide text-[color:var(--aba-incorrect-soft)]"
        >
          {revealed ? "Mark incorrect" : "Reveal for error review"}
        </button>
      </div>
    </div>
  );
}

function shuffle(values: number[]): number[] {
  const array = [...values];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}
