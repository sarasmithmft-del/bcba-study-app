"use client";

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type {
  ActivityMechanics,
  MatchStimulusSet,
  MatchToSampleActivity,
} from "@/lib/content-types";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import { useMemo, useState, useTransition } from "react";

interface MatchToSampleGameProps {
  moduleId: string;
  activity: MatchToSampleActivity;
}

export function MatchToSampleGame({ moduleId, activity }: MatchToSampleGameProps) {
  const [index, setIndex] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | undefined>();
  const [rejectFlash, setRejectFlash] = useState(false);
  const [masteryAchieved, setMasteryAchieved] = useState(false);
  const [pending, startTransition] = useTransition();

  const current: MatchStimulusSet | undefined = activity.stimulus_sets[index];
  const mechanics: ActivityMechanics = activity.mechanics;

  const pool = useMemo(() => {
    if (!current) return [];
    return shuffle([...current.comparison_options]);
  }, [current]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    }),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    if (masteryAchieved) return;
    const { active, over } = event;
    if (!current) return;
    if (over?.id !== "mts-slot") {
      return;
    }
    const choice = String(active.id).replace(/^chip-/, "");
    if (choice === current.correct_match) {
      setSlot(choice);
      setFeedback(undefined);
      setRejectFlash(false);
      const completedModule = index + 1 >= activity.stimulus_sets.length;
      if (completedModule) {
        setMasteryAchieved(true);
        void persistComplete();
      } else {
        window.setTimeout(() => {
          setIndex((previous) => previous + 1);
          setSlot(null);
        }, 450);
      }
    } else {
      setRejectFlash(true);
      setFeedback(current.error_feedback);
      window.setTimeout(() => setRejectFlash(false), 520);
    }
  };

  const persistComplete = async () => {
    startTransition(async () => {
      await submitStudyAttempt({
        moduleId,
        kind: "activity",
        reference: String(activity.activity_id),
        score: 100,
        payload: {
          gameType: activity.game_type,
          stimulusSets: activity.stimulus_sets.length,
          passThresholdAccuracy: mechanics.pass_threshold_accuracy,
        },
      });
    });
  };

  const showGameplay = Boolean(current) && !masteryAchieved;

  return (
    <div className="flex flex-col gap-5 rounded border border-aba-divider bg-aba-depth p-5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-aba-divider pb-3 text-[0.78rem] font-semibold tracking-[0.18em] text-aba-muted">
        <span>
          MATCH-TO-SAMPLE · {activity.game_type.replace(/-/g, " ").toUpperCase()}
        </span>
        <span aria-live="polite">
          Set {Math.min(index + 1, activity.stimulus_sets.length)} /{" "}
          {activity.stimulus_sets.length}
        </span>
      </header>

      {masteryAchieved ? (
        <p className="text-[0.95rem] text-[color:var(--aba-correct)]">
          Accuracy criterion satisfied. Attempt logged.
        </p>
      ) : showGameplay ? (
        <>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
              Sample stimulus
            </p>
            <p className="mt-2 text-[0.96rem] leading-relaxed">{current!.sample_stimulus}</p>
          </div>

          <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <ComparisonPool
              options={pool}
              lockedSelection={slot}
              rejectFlash={rejectFlash}
            />
          </DndContext>

          {feedback ? (
            <p className="rounded border border-[color:var(--aba-incorrect)]/60 bg-black/35 p-3 text-[0.9rem] text-[color:var(--aba-incorrect-soft)] motion-reduce:transition-none">
              {feedback}
            </p>
          ) : null}
        </>
      ) : null}

      {pending ? (
        <p className="text-[0.8rem] text-aba-muted" role="status">
          Saving…
        </p>
      ) : null}
    </div>
  );
}

function ComparisonPool({
  options,
  lockedSelection,
  rejectFlash,
}: {
  options: string[];
  lockedSelection: string | null;
  rejectFlash: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: "mts-slot" });
  const border = lockedSelection
    ? "border-[color:var(--aba-correct)]"
    : rejectFlash
      ? "border-[color:var(--aba-incorrect)]"
      : isOver
        ? "border-aba-muted"
        : "border-aba-divider";

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
        Comparison stimuli
      </p>
      <div
        ref={setNodeRef}
        aria-label="Drop matched concept here"
        className={`relative min-h-[5.75rem] rounded border ${border} bg-aba-panel/80 p-4 transition-colors motion-reduce:transition-none`}
      >
        {lockedSelection ? (
          <LockedChip label={lockedSelection} />
        ) : (
          <p className="text-[0.85rem] text-aba-muted">
            Drag and release the correspondence concept into this docking field.
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) =>
          lockedSelection === option ? null : (
            <DraggableChip key={option} id={`chip-${option}`} label={option} />
          ),
        )}
      </div>
    </div>
  );
}

function DraggableChip({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
  });

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
  };

  return (
    <button
      type="button"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`motion-reduce:!transition-none rounded border border-aba-divider bg-black/35 px-3 py-2 text-left text-[0.88rem] text-aba-fg ${
        isDragging ? "opacity-60 shadow-lg motion-reduce:opacity-100 motion-reduce:shadow-none" : ""
      }`}
    >
      {label}
    </button>
  );
}

function LockedChip({ label }: { label: string }) {
  return (
    <div className="rounded border border-[color:var(--aba-correct)] bg-black/25 px-3 py-2 text-[0.88rem] text-[color:var(--aba-correct)]">
      {label}
    </div>
  );
}

function shuffle<T>(items: T[]): T[] {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}
