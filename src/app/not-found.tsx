import Link from "next/link";
import { HomeLink } from "@/components/HomeLink";

/** App-wide 404 — default Next page is easy to miss on dark OS / Simple Browser. */
export default function NotFound() {
  return (
    <div
      className="mx-auto flex min-h-dvh max-w-lg flex-col gap-6 px-6 py-16 text-left"
      style={{ background: "var(--aba-bg,#121212)", color: "var(--aba-fg,#e5e7eb)" }}
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-aba-muted">
        Page not found
      </p>
      <h1 className="text-2xl font-semibold leading-tight">
        Nothing lives at this address (usually a typo in the chapter link).
      </h1>
      <div className="space-y-2 text-[0.95rem] leading-relaxed text-aba-muted">
        <p>
          Chapters use paths like{" "}
          <code className="rounded bg-black/45 px-1.5 py-0.5 text-aba-fg">/module/mod32</code> — not{' '}
          <code className="rounded bg-black/45 px-1.5 py-0.5 text-aba-fg">/chapter/31</code>.
        </p>
        <p>
          Confirm <strong className="text-aba-fg">npm run dev</strong> or production server is running, then choose a
          chapter from Home.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        <HomeLink className="rounded border border-aba-muted px-5 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.18em]">← Home · chapter list</HomeLink>
        <Link
          prefetch={false}
          href="/mock-exams"
          className="rounded border border-aba-divider px-5 py-3 text-[0.85rem] uppercase tracking-[0.15em] text-aba-muted hover:border-aba-muted hover:text-aba-fg"
        >
          Mock exam
        </Link>
      </div>
    </div>
  );
}
