"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { GRAPH_LAB_ITEMS } from "@/content/labs/graphLabItems";

function Sparkline({
  baseline,
  intervention,
}: {
  baseline: number[];
  intervention: number[];
}) {
  const width = 360;
  const height = 140;
  const pad = 16;
  const all = [...baseline, ...intervention];
  const max = Math.max(...all, 1);
  const n = all.length;
  const xAt = (i: number) => pad + (i / Math.max(n - 1, 1)) * (width - pad * 2);
  const yAt = (v: number) => height - pad - (v / max) * (height - pad * 2);
  const baselinePts = baseline.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ");
  const interventionPts = intervention
    .map((v, i) => `${xAt(baseline.length + i)},${yAt(v)}`)
    .join(" ");
  const dividerX = xAt(baseline.length - 0.5);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full max-w-lg rounded border border-aba-divider bg-black/40"
      role="img"
      aria-label="Phase graph showing baseline then intervention"
    >
      <line
        x1={dividerX}
        y1={pad}
        x2={dividerX}
        y2={height - pad}
        stroke="var(--aba-muted, #888)"
        strokeDasharray="4 4"
        strokeWidth="1"
      />
      <polyline fill="none" stroke="#7bc47f" strokeWidth="2.5" points={baselinePts} />
      <polyline fill="none" stroke="#d9c48a" strokeWidth="2.5" points={interventionPts} />
      {all.map((v, i) => (
        <circle
          key={i}
          cx={xAt(i)}
          cy={yAt(v)}
          r="3.5"
          fill={i < baseline.length ? "#7bc47f" : "#d9c48a"}
        />
      ))}
      <text x={pad} y={14} fill="#9ca3af" fontSize="10">
        Baseline → | ← Intervention
      </text>
    </svg>
  );
}

export function GraphLab() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const item = GRAPH_LAB_ITEMS[index]!;
  const done = index >= GRAPH_LAB_ITEMS.length - 1 && revealed;

  const progress = useMemo(
    () => `${Math.min(index + 1, GRAPH_LAB_ITEMS.length)} / ${GRAPH_LAB_ITEMS.length}`,
    [index],
  );

  function submit() {
    if (choice === null || revealed) return;
    const ok = choice === item.correctIndex;
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
    setRevealed(true);
  }

  function next() {
    if (index >= GRAPH_LAB_ITEMS.length - 1) return;
    setIndex((i) => i + 1);
    setChoice(null);
    setRevealed(false);
  }

  function restart() {
    setIndex(0);
    setChoice(null);
    setRevealed(false);
    setScore({ correct: 0, total: 0 });
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-4 py-16">
      <header className="space-y-3 border border-aba-divider bg-aba-depth px-8 py-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-aba-muted">
          Interactive lab · Domain C
        </p>
        <h1 className="text-[clamp(1.5rem,3vw,2.1rem)] font-semibold">
          Graph reading lab
        </h1>
        <p className="text-[0.95rem] leading-relaxed text-aba-muted">
          Classify level, trend, variability, and overlap from simple A-B phase graphs. Study aid only — not a BACB
          product.
        </p>
        <p className="text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted">
          Item {progress}
          {score.total > 0 ? ` · Score ${score.correct}/${score.total}` : ""}
        </p>
      </header>

      <section className="space-y-5 border border-aba-divider bg-black/35 p-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-aba-muted">
          Attribute focus · {item.attribute}
        </p>
        <Sparkline baseline={item.baseline} intervention={item.intervention} />
        <p className="text-[1.05rem] font-semibold leading-snug text-aba-fg">{item.prompt}</p>
        <ul className="space-y-2">
          {item.options.map((opt, i) => {
            const selected = choice === i;
            const showCorrect = revealed && i === item.correctIndex;
            const showWrong = revealed && selected && i !== item.correctIndex;
            return (
              <li key={i}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => setChoice(i)}
                  className={`w-full rounded border px-4 py-3 text-left text-[0.92rem] transition-colors ${
                    showCorrect ?
                      "border-[color:var(--aba-correct)] bg-[color:var(--aba-correct)]/15 text-aba-fg"
                    : showWrong ?
                      "border-[color:var(--aba-incorrect-soft,#f5a5a5)] bg-red-950/30 text-aba-fg"
                    : selected ?
                      "border-aba-muted bg-aba-depth text-aba-fg"
                    : "border-aba-divider bg-black/25 text-aba-muted hover:border-aba-muted hover:text-aba-fg"
                  }`}
                >
                  <span className="mr-2 text-aba-muted">({String.fromCharCode(65 + i)})</span>
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
        {revealed ?
          <p className="text-[0.9rem] leading-relaxed text-aba-muted">{item.rationale}</p>
        : null}
        <div className="flex flex-wrap gap-3 pt-2">
          {!revealed ?
            <button
              type="button"
              disabled={choice === null}
              onClick={submit}
              className="rounded border border-[color:var(--aba-correct)]/55 px-5 py-2 text-[0.85rem] uppercase tracking-[0.2em] disabled:opacity-40"
            >
              Check
            </button>
          : done ?
            <button
              type="button"
              onClick={restart}
              className="rounded border border-aba-muted px-5 py-2 text-[0.85rem] uppercase tracking-[0.2em]"
            >
              Restart lab
            </button>
          : <button
              type="button"
              onClick={next}
              className="rounded border border-aba-muted px-5 py-2 text-[0.85rem] uppercase tracking-[0.2em]"
            >
              Next graph
            </button>
          }
        </div>
      </section>

      <footer className="flex flex-wrap gap-4 text-[0.75rem] text-aba-muted">
        <Link href="/labs/scc/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          SCC / celeration lab →
        </Link>
        <Link href="/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          ← Home
        </Link>
      </footer>
    </div>
  );
}
