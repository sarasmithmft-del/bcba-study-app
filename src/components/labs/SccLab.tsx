"use client";

import Link from "next/link";
import { HomeLink } from "@/components/HomeLink";
import { useMemo, useState } from "react";
import { SCC_LAB_ITEMS } from "@/content/labs/sccLabItems";

function CountBars({ counts }: { counts: number[] }) {
  const max = Math.max(...counts, 1);
  return (
    <div className="flex h-36 items-end gap-3 rounded border border-aba-divider bg-black/40 px-4 py-3">
      {counts.map((c, i) => (
        <div key={i} className="flex flex-1 flex-col items-center justify-end gap-2">
          <span className="text-[0.75rem] text-aba-muted">{c}</span>
          <div
            className="w-full max-w-[3rem] rounded-t bg-[color:var(--aba-correct)]/70"
            style={{ height: `${Math.max(8, (c / max) * 100)}%` }}
            title={`Week ${i + 1}: ${c}`}
          />
          <span className="text-[0.65rem] uppercase tracking-[0.12em] text-aba-muted">W{i + 1}</span>
        </div>
      ))}
    </div>
  );
}

export function SccLab() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const item = SCC_LAB_ITEMS[index]!;
  const done = index >= SCC_LAB_ITEMS.length - 1 && revealed;
  const progress = useMemo(
    () => `${Math.min(index + 1, SCC_LAB_ITEMS.length)} / ${SCC_LAB_ITEMS.length}`,
    [index],
  );

  function submit() {
    if (choice === null || revealed) return;
    const ok = choice === item.correctIndex;
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
    setRevealed(true);
  }

  function next() {
    if (index >= SCC_LAB_ITEMS.length - 1) return;
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
          Interactive lab · Precision teaching
        </p>
        <h1 className="text-[clamp(1.5rem,3vw,2.1rem)] font-semibold">
          SCC / celeration mini-lab
        </h1>
        <p className="text-[0.95rem] leading-relaxed text-aba-muted">
          Practice multiplicative celeration (×2 / ÷2), doubling time, and why multiply/divide charts matter.
          Simplified study aid — not a full Standard Celeration Chart course.
        </p>
        <p className="text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted">
          Item {progress}
          {score.total > 0 ? ` · Score ${score.correct}/${score.total}` : ""}
        </p>
      </header>

      <section className="space-y-5 border border-aba-divider bg-black/35 p-6">
        <CountBars counts={item.weeklyCounts} />
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
        {revealed ? <p className="text-[0.9rem] leading-relaxed text-aba-muted">{item.rationale}</p> : null}
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
              Next item
            </button>
          }
        </div>
      </section>

      <footer className="flex flex-wrap gap-4 text-[0.75rem] text-aba-muted">
        <Link href="/labs/graph/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          ← Graph reading lab
        </Link>
        <HomeLink className="uppercase tracking-[0.18em] hover:text-aba-fg">Home</HomeLink>
      </footer>
    </div>
  );
}
