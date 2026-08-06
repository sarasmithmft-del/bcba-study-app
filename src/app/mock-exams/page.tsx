import type { Metadata } from "next";
import Link from "next/link";
import { HomeLink } from "@/components/HomeLink";
import { formatMockExamTimeLimit } from "@/content/mockExam/mockExamTime";
import { MOCK_EXAM_INDEX } from "@/content/mockExam";
import { MockExamHistoryPanel } from "@/components/mockExam/MockExamHistoryPanel";

export const metadata: Metadata = {
  title: "Mock Exams | BCBA Interactive Study Workbook",
  description:
    "Full-length BCBA-style mock exams — 185 items, 4-hour time limit. Independent study only—not BACB-affiliated.",
};

export default function MockExamsIndexPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 py-8">
      <header className="space-y-4 border border-aba-divider bg-aba-depth px-8 py-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-aba-muted">
          Mock exams
        </p>
        <h1 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-tight">
          Full-length BCBA simulations
        </h1>
        <p className="text-[0.95rem] leading-relaxed text-aba-muted">
          Each mock exam has <strong className="text-aba-fg">185 multiple-choice items</strong> and a{" "}
          <strong className="text-aba-fg">4-hour time limit</strong> — matching the official BCBA exam format.
          Items are tagged with sixth-edition TCO domains A–I for review sorting.
        </p>
        <p className="rounded border border-aba-divider bg-black/35 p-4 text-[0.82rem] leading-relaxed text-aba-muted">
          <strong className="text-aba-fg">Not BACB-affiliated.</strong> These simulations do not predict exam
          results. Confirm scope and wording with your handbook and the published TCO.
        </p>
      </header>

      <MockExamHistoryPanel />

      <section className="space-y-4">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Available mock exams ({MOCK_EXAM_INDEX.length})
        </h2>
        <ul className="flex flex-col gap-px border border-aba-divider">
          {MOCK_EXAM_INDEX.map((exam) => (
            <li key={exam.id} className="border-b border-aba-divider last:border-b-0">
              <Link
                prefetch={false}
                href={`/mock-exams/${exam.slug}`}
                className="group flex flex-col gap-2 bg-black/35 px-5 py-6 transition-colors hover:bg-black/55"
              >
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-aba-muted">
                  {exam.itemCount >= 185 ? "Full simulation" : "Short drill"}
                </span>
                <span className="text-[1.05rem] font-semibold text-aba-fg group-hover:underline decoration-aba-muted underline-offset-[6px]">
                  {exam.title}
                </span>
                <span className="text-[0.88rem] leading-relaxed text-aba-muted">{exam.description}</span>
                <span className="text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted">
                  {exam.itemCount} items · {formatMockExamTimeLimit(exam.timeLimitSeconds)} time limit
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <HomeLink className="inline-flex w-fit rounded border border-aba-divider px-5 py-3 text-[0.85rem] uppercase tracking-[0.18em] text-aba-muted hover:border-aba-muted hover:text-aba-fg">← Home · chapter list</HomeLink>
    </div>
  );
}
