"use client";

import type { VocabularyMatchActivity } from "@/lib/content-types";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import { gradeVocabularyMatch } from "@/lib/rubric";
import { useMemo, useRef, useState, useTransition } from "react";

interface VocabularyMatchGameProps {
  moduleId: string;
  activity: VocabularyMatchActivity;
}

export function VocabularyMatchGame({ moduleId, activity }: VocabularyMatchGameProps) {
  const initialSelections = useMemo(() => {
    const map: Record<string, string> = {};
    activity.items.forEach((item) => {
      map[item.id] = "";
    });
    return map;
  }, [activity.items]);

  const [selections, setSelections] = useState(initialSelections);

  const [shuffleNonce, setShuffleNonce] = useState(0);
  const bubbleLayouts = useMemo(() => {
    const map: Record<string, string[]> = {};
    activity.items.forEach((item) => {
      map[item.id] = shuffleStrings([...item.options]);
    });
    return map;
  }, [activity.items, shuffleNonce]);

  const [graded, setGraded] = useState<
    ReturnType<typeof gradeVocabularyMatch> & { finalized: boolean }
  | null>(null);
  const [pending, startTransition] = useTransition();
  const finalizedRef = useRef(false);

  const threshold = activity.mechanics.pass_threshold_accuracy ?? 1;

  const finalize = (responses: Record<string, string>) => {
    if (finalizedRef.current) return;
    finalizedRef.current = true;
    const result = gradeVocabularyMatch(activity.items, responses);
    const metThreshold = result.ratio >= threshold;
    setGraded({ ...result, finalized: true });
    startTransition(async () => {
      await submitStudyAttempt({
        moduleId,
        kind: "activity",
        reference: String(activity.activity_id),
        score: result.score,
        payload: {
          gameType: activity.game_type,
          ratio: result.ratio,
          metThreshold,
          wrongIds: result.wrongIds,
        },
      });
    });
  };

  const gradeManual = () => {
    finalize(selections);
  };

  const reset = () => {
    finalizedRef.current = false;
    setSelections({ ...initialSelections });
    setGraded(null);
    setShuffleNonce((previous) => previous + 1);
  };

  const locked = Boolean(graded?.finalized);

  return (
    <div className="flex flex-col gap-5 rounded border border-aba-divider bg-aba-depth p-5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-aba-divider pb-3">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
            Vocabulary matching
          </p>
          <p className="mt-1 text-[0.82rem] text-aba-muted">
            Tap a bubble to pair each stem with its best-fit vocabulary label—choices reshuffle each reset so
            memorizing positions does not substitute for meaning.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-6">
        {activity.items.map((item) => {
          const bubbles = bubbleLayouts[item.id] ?? item.options;
          return (
            <div key={item.id} className="flex flex-col gap-3 rounded border border-aba-divider bg-black/25 px-4 py-4">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-aba-muted">
                Definition stem · {item.id}
              </span>
              <p className="text-[0.92rem] leading-relaxed text-aba-fg">{item.prompt_definition}</p>
              <div
                className="flex flex-wrap gap-2"
                aria-label={`Vocabulary choices for ${item.id}`}
              >
                {bubbles.map((option) => {
                  const selected = selections[item.id] === option;
                  const missed =
                    locked &&
                    graded?.wrongIds.includes(item.id) &&
                    selected &&
                    option !== item.correct_term;
                  const showKeyed =
                    locked && graded?.wrongIds.includes(item.id) && option === item.correct_term;
                  return (
                    <button
                      key={`${item.id}-${option}`}
                      type="button"
                      disabled={locked}
                      onClick={() =>
                        setSelections((previous) => ({
                          ...previous,
                          [item.id]: option,
                        }))
                      }
                      className={`max-w-full rounded-full border px-3 py-2 text-left text-[0.82rem] leading-snug tracking-tight transition ${
                        missed
                          ? "border-[color:var(--aba-incorrect)] bg-black/45 text-[color:var(--aba-incorrect-soft)]"
                          : showKeyed
                            ? "border-[color:var(--aba-correct)] bg-black/45 text-[color:var(--aba-correct)]"
                            : selected
                              ? "border-[color:var(--aba-muted)] bg-black/40 text-aba-fg"
                              : "border-aba-divider bg-black/25 text-aba-muted hover:border-aba-muted hover:text-aba-fg"
                      } disabled:cursor-not-allowed disabled:opacity-45`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {locked && graded?.wrongIds.includes(item.id) ? (
                <p className="text-[0.82rem] text-[color:var(--aba-incorrect-soft)]">
                  Answer key · {item.correct_term}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={gradeManual}
          disabled={
            locked ||
            pending ||
            activity.items.some((item) => !(selections[item.id] ?? "").trim())
          }
          className="rounded border border-aba-muted px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-wide hover:border-aba-fg hover:text-aba-fg disabled:opacity-40"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={reset}
          disabled={pending}
          className="rounded border border-transparent px-4 py-2 text-[0.82rem] text-aba-muted hover:text-aba-fg disabled:opacity-40"
        >
          Reset
        </button>
      </div>

      {locked && graded ? (
        <section
          className={`rounded border p-4 text-[0.92rem] ${
            graded.ratio >= threshold
              ? "border-[color:var(--aba-correct)] text-[color:var(--aba-correct)]"
              : "border-[color:var(--aba-incorrect)] text-[color:var(--aba-incorrect-soft)]"
          }`}
        >
          <p className="font-semibold">
            {(graded.ratio * 100).toFixed(0)}% matched · goal {(threshold * 100).toFixed(0)}%
          </p>
          {graded.wrongIds.length > 0 ? (
            <p className="mt-2 text-[0.88rem]">
              Review items {graded.wrongIds.join(", ")} with the Vocabulary tab if needed.
            </p>
          ) : (
            <p className="mt-2 text-[0.88rem]">Every definition lined up with its term.</p>
          )}
        </section>
      ) : null}

      {pending ? <p className="text-[0.8rem] text-aba-muted">Saving…</p> : null}
    </div>
  );
}

function shuffleStrings(values: string[]): string[] {
  const array = [...values];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}
