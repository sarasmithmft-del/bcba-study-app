"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function MockExamError({ error }: { readonly error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error("[mock-exam]", error);
  }, [error]);

  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center"
      style={{ background: "var(--aba-bg,#121212)", color: "var(--aba-fg,#e5e7eb)" }}
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em]" style={{ opacity: 0.75 }}>
        Mock exam error
      </p>
      <h1 className="max-w-md text-xl font-semibold">{error.message ?? "Something went wrong loading this route."}</h1>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="rounded border px-5 py-2 text-[0.85rem] uppercase tracking-[0.18em]"
          style={{ borderColor: "rgba(224,224,224,0.35)" }}
          onClick={() => window.location.reload()}
        >
          Reload page
        </button>
        <Link
          prefetch={false}
          href="/"
          className="rounded border px-5 py-2 text-[0.85rem] uppercase tracking-[0.18em]"
          style={{ borderColor: "rgba(224,224,224,0.2)", opacity: 0.9 }}
        >
          ← Home
        </Link>
      </div>
    </div>
  );
}
