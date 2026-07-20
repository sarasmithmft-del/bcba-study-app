import Link from "next/link";
import { formatMockExamTimeLimit } from "@/content/mockExam/mockExamTime";
import { MOCK_EXAM_INDEX } from "@/content/mockExam";
import { MODULE_INDEX } from "@/lib/modules";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-4 py-16">
      <header className="space-y-6 border border-aba-divider bg-aba-depth px-8 py-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-aba-muted">
          Cooper/Heron/Heward
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.85rem)] font-semibold leading-none">
          BCBA Interactive Study Workbook
        </h1>
        <p className="max-w-2xl text-[1rem] leading-relaxed text-aba-muted">
          All 31 Cooper/Heron/Heward chapters with readings, citations, practice activities, worksheets, and
          quizzes—aligned to the Pearson Global 3rd edition sequence.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Chapters ({MODULE_INDEX.length})
        </h2>
        <ul className="flex flex-col gap-px border border-aba-divider">
          {MODULE_INDEX.map((module) => (
            <li key={module.id} className="border-b border-aba-divider last:border-b-0">
              <Link
                prefetch={false}
                href={`/module/${module.id}`}
                className="group flex flex-col gap-2 bg-black/35 px-5 py-6 transition-colors hover:bg-black/55"
              >
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-aba-muted">
                  Chapter {module.chapterNumber}
                </span>
                <span className="text-[1.1rem] font-semibold text-aba-fg group-hover:underline decoration-aba-muted underline-offset-[6px]">
                  {module.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Mock exams ({MOCK_EXAM_INDEX.length})
        </h2>
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-aba-muted">
          Full-length simulations — 185 items each, 4-hour time limit matching the official BCBA exam. Not a BACB
          product; use your handbook and TCO for wording.
        </p>
        <ul className="flex flex-col gap-px border border-aba-divider">
          {MOCK_EXAM_INDEX.map((exam, index) => (
            <li key={exam.id} className="border-b border-aba-divider last:border-b-0">
              <Link
                prefetch={false}
                href={`/mock-exams/${exam.slug}`}
                className="group flex flex-col gap-2 border-l-[3px] border-l-[color:var(--aba-correct)] bg-aba-depth px-5 py-6 pl-6 transition-colors hover:bg-black/55"
              >
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-aba-muted">
                  Mock exam {index + 1}
                </span>
                <span className="text-[1.05rem] font-semibold text-aba-fg group-hover:underline decoration-aba-muted underline-offset-[6px]">
                  {exam.title}
                </span>
                <span className="text-[0.75rem] uppercase tracking-[0.16em] text-aba-muted">
                  {exam.itemCount} items · {formatMockExamTimeLimit(exam.timeLimitSeconds)} limit
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          prefetch={false}
          href="/mock-exams"
          className="inline-flex rounded border border-[color:var(--aba-correct)]/45 bg-black/40 px-5 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-aba-fg transition-colors hover:bg-[color:var(--aba-correct)]/15"
        >
          View all mock exams
        </Link>
      </section>

      <footer className="flex flex-col gap-3 border-t border-aba-divider pt-6 text-[0.75rem] text-aba-muted">
        <p>Progress is saved locally on this device — nothing is sent to a server.</p>
        <nav className="flex flex-wrap gap-4">
          <Link href="/settings" className="uppercase tracking-[0.18em] hover:text-aba-fg">
            Settings
          </Link>
          <Link href="/subscribe" className="uppercase tracking-[0.18em] hover:text-aba-fg">
            Subscription
          </Link>
          <Link href="/privacy" className="uppercase tracking-[0.18em] hover:text-aba-fg">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
