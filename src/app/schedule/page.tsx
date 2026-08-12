"use client";

import Link from "next/link";
import { HomeLink } from "@/components/HomeLink";
import { useMemo, useState } from "react";
import { TCO_TARGET_ITEMS_185 } from "@/lib/tcoDomainModules";

type TcoDomain = keyof typeof TCO_TARGET_ITEMS_185;

const DOMAIN_LABEL: Record<TcoDomain, string> = {
  A: "A Foundations",
  B: "B Concepts",
  C: "C Measurement",
  D: "D Experimental design",
  E: "E Ethics",
  F: "F Assessment",
  G: "G Procedures",
  H: "H Intervention selection",
  I: "I Supervision",
};

const DOMAIN_ORDER: TcoDomain[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function clampWeeks(n: number) {
  return Math.min(52, Math.max(2, Math.round(n)));
}

export default function SchedulePage() {
  const [weeks, setWeeks] = useState(12);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [mockCadenceWeeks, setMockCadenceWeeks] = useState(3);

  const plan = useMemo(() => {
    const w = clampWeeks(weeks);
    const totalHours = w * Math.max(1, hoursPerWeek);
    const totalItems = Object.values(TCO_TARGET_ITEMS_185).reduce((a, b) => a + b, 0);
    const domainHours = DOMAIN_ORDER.map((d) => {
      const share = TCO_TARGET_ITEMS_185[d] / totalItems;
      return {
        domain: d,
        hours: Math.round(totalHours * share * 10) / 10,
        sharePct: Math.round(share * 1000) / 10,
        targetItems: TCO_TARGET_ITEMS_185[d],
      };
    });
    const mockWeeks: number[] = [];
    for (let week = Math.max(2, mockCadenceWeeks); week <= w; week += mockCadenceWeeks) {
      mockWeeks.push(week);
    }
    if (mockWeeks[mockWeeks.length - 1] !== w) mockWeeks.push(w);
    return { w, totalHours, domainHours, mockWeeks };
  }, [weeks, hoursPerWeek, mockCadenceWeeks]);

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-4 py-16">
      <header className="space-y-4 border border-aba-divider bg-aba-depth px-8 py-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-aba-muted">
          Study planner
        </p>
        <h1 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold leading-tight">
          Schedule generator
        </h1>
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-aba-muted">
          Allocates weekly study hours by approximate TCO domain weight and spaces full mock exams. Planning aid
          only — verify domain weights against the current BACB TCO.
        </p>
      </header>

      <section className="grid gap-6 border border-aba-divider bg-black/35 p-6 sm:grid-cols-3">
        <label className="flex flex-col gap-2 text-[0.8rem] uppercase tracking-[0.16em] text-aba-muted">
          Weeks to exam
          <input
            type="number"
            min={2}
            max={52}
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value) || 12)}
            className="rounded border border-aba-divider bg-aba-depth px-3 py-2 text-[1rem] normal-case tracking-normal text-aba-fg"
          />
        </label>
        <label className="flex flex-col gap-2 text-[0.8rem] uppercase tracking-[0.16em] text-aba-muted">
          Hours / week
          <input
            type="number"
            min={1}
            max={40}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value) || 10)}
            className="rounded border border-aba-divider bg-aba-depth px-3 py-2 text-[1rem] normal-case tracking-normal text-aba-fg"
          />
        </label>
        <label className="flex flex-col gap-2 text-[0.8rem] uppercase tracking-[0.16em] text-aba-muted">
          Mock every N weeks
          <input
            type="number"
            min={1}
            max={8}
            value={mockCadenceWeeks}
            onChange={(e) => setMockCadenceWeeks(Number(e.target.value) || 3)}
            className="rounded border border-aba-divider bg-aba-depth px-3 py-2 text-[1rem] normal-case tracking-normal text-aba-fg"
          />
        </label>
      </section>

      <section className="space-y-3 border border-aba-divider bg-aba-depth p-6">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-aba-muted">
          Summary · {plan.w} weeks · {plan.totalHours} hours
        </h2>
        <p className="text-[0.9rem] text-aba-muted">
          Full mock exam weeks:{" "}
          <span className="text-aba-fg">{plan.mockWeeks.map((n) => `W${n}`).join(", ")}</span>
          {" "}— rotate Mock Exams 1→2→3, and use the synthesis set as a short mid-cycle integration drill.
        </p>
        <ul className="mt-2 flex flex-wrap gap-3 text-[0.85rem]">
          <li>
            <Link href="/mock-exams/bcba-full-6e/" className="underline underline-offset-4 hover:text-aba-fg">
              Mock Exam 1
            </Link>
          </li>
          <li>
            <Link href="/mock-exams/bcba-practice-2/" className="underline underline-offset-4 hover:text-aba-fg">
              Mock Exam 2
            </Link>
          </li>
          <li>
            <Link href="/mock-exams/bcba-practice-3/" className="underline underline-offset-4 hover:text-aba-fg">
              Mock Exam 3
            </Link>
          </li>
          <li>
            <Link href="/mock-exams/bcba-synthesis/" className="underline underline-offset-4 hover:text-aba-fg">
              Synthesis set (25)
            </Link>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Hours by TCO domain
        </h2>
        <div className="overflow-x-auto border border-aba-divider">
          <table className="w-full min-w-[28rem] text-left text-[0.9rem]">
            <thead className="bg-aba-depth text-[0.68rem] uppercase tracking-[0.16em] text-aba-muted">
              <tr>
                <th className="px-4 py-3">Domain</th>
                <th className="px-4 py-3 text-right">TCO share</th>
                <th className="px-4 py-3 text-right">Hours</th>
              </tr>
            </thead>
            <tbody>
              {plan.domainHours.map((row) => (
                <tr key={row.domain} className="border-t border-aba-divider">
                  <td className="px-4 py-3 text-aba-fg">{DOMAIN_LABEL[row.domain]}</td>
                  <td className="px-4 py-3 text-right text-aba-muted">
                    {row.sharePct}% ({row.targetItems} items)
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-aba-fg">{row.hours}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="flex flex-wrap gap-4 border-t border-aba-divider pt-6 text-[0.75rem] text-aba-muted">
        <HomeLink className="uppercase tracking-[0.18em] hover:text-aba-fg" />
        <Link href="/resources/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          Resources
        </Link>
        <Link href="/mock-exams/" className="uppercase tracking-[0.18em] hover:text-aba-fg">
          Mock exams
        </Link>
      </footer>
    </div>
  );
}
