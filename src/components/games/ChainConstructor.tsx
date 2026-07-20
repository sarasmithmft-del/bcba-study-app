"use client";

import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { BehaviorChainActivity } from "@/lib/content-types";
import { submitStudyAttempt } from "@/lib/studyAttemptSubmit";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useMemo, useState, useTransition } from "react";

interface ChainConstructorProps {
  moduleId: string;
  activity: BehaviorChainActivity;
}

export function ChainConstructor({ moduleId, activity }: ChainConstructorProps) {
  const fragments = activity.chain.fragments;
  const canonical = activity.chain.correct_order;
  const [order, setOrder] = useState(() => shuffle(canonical.map((id) => id)));
  const [message, setMessage] = useState<string | undefined>();
  const [passed, setPassed] = useState(false);
  const [pending, startTransition] = useTransition();

  const labelById = useMemo(() => {
    const map = new Map<string, string>();
    fragments.forEach((fragment) => map.set(fragment.id, fragment.text));
    return map;
  }, [fragments]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }
    const oldIndex = order.indexOf(String(active.id));
    const newIndex = order.indexOf(String(over.id));
    if (oldIndex === -1 || newIndex === -1) {
      return;
    }
    setOrder((items) => arrayMove(items, oldIndex, newIndex));
  };

  const evaluate = () => {
    const matches = order.every((id, idx) => id === canonical[idx]);
    if (matches) {
      setPassed(true);
      setMessage("Chain aligned to experimental control sequence.");
      startTransition(async () => {
        await submitStudyAttempt({
          moduleId,
          kind: "activity",
          reference: String(activity.activity_id),
          score: 100,
          payload: { gameType: activity.game_type },
        });
      });
    } else {
      setPassed(false);
      setMessage(activity.chain.remediation ?? "Sequence misaligned — review transition control.");
    }
  };

  const reset = () => {
    setOrder(shuffle(canonical.map((id) => id)));
    setMessage(undefined);
    setPassed(false);
  };

  return (
    <div className="flex flex-col gap-4 rounded border border-aba-divider bg-aba-depth p-5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-aba-divider pb-3">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-aba-muted">
            Put steps in order
          </p>
          {activity.chain.title ? (
            <p className="mt-1 text-[0.92rem]">{activity.chain.title}</p>
          ) : null}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded border border-aba-divider px-3 py-1.5 text-[0.82rem] uppercase tracking-wide text-aba-muted hover:border-aba-muted"
            onClick={reset}
          >
            Shuffle
          </button>
          <button
            type="button"
            className="rounded border border-aba-divider px-3 py-1.5 text-[0.82rem] uppercase tracking-wide text-aba-fg hover:border-aba-fg"
            onClick={evaluate}
            disabled={passed}
          >
            Validate order
          </button>
        </div>
      </header>

      <p className="text-[0.88rem] leading-relaxed text-aba-muted">
        Sort the steps into an order that moves sensibly from assessment through targeted teaching
        toward measurable mastery criteria.
      </p>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={order} strategy={verticalListSortingStrategy}>
          <ol className="flex flex-col gap-3">
            {order.map((identifier, index) => (
              <SortableRow
                key={identifier}
                id={identifier}
                index={index + 1}
                text={labelById.get(identifier) ?? ""}
              />
            ))}
          </ol>
        </SortableContext>
      </DndContext>

      {message ? (
        <p
          className={`text-[0.9rem] leading-relaxed ${passed ? "text-[color:var(--aba-correct)]" : "text-[color:var(--aba-incorrect-soft)]"}`}
        >
          {message}
        </p>
      ) : null}

      {pending ? (
        <p className="text-[0.82rem] text-aba-muted">Logging attempt…</p>
      ) : null}
    </div>
  );
}

function SortableRow({ id, text, index }: { id: string; text: string; index: number }) {
  const reduceMotion = usePrefersReducedMotion();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: reduceMotion ? undefined : transition,
  };

  return (
    <li ref={setNodeRef} style={style} className="list-none">
      <div
        className={`flex items-start gap-3 rounded border border-aba-divider bg-aba-panel/80 p-3 motion-reduce:transition-none ${
          isDragging ? "opacity-70 motion-reduce:opacity-100" : ""
        }`}
      >
        <span className="mt-0.5 font-mono text-[0.76rem] text-aba-muted">{index}</span>
        <button
          type="button"
          className="flex-1 text-left text-[0.9rem] leading-relaxed"
          {...attributes}
          {...listeners}
        >
          {text}
        </button>
      </div>
    </li>
  );
}

function shuffle(ids: string[]): string[] {
  const array = [...ids];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}
