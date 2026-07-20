"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Legacy URL — sends users to the mock exam library. Server-side `redirect()`
 * would break in a static export (no runtime server), so this runs a client-
 * side replace on mount and shows a fallback link for users with JS disabled.
 */
export default function LegacyMockExamPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/mock-exams");
  }, [router]);

  return (
    <div className="mx-auto max-w-3xl py-16 text-center text-aba-muted">
      <p className="text-[0.9rem]">Redirecting to the mock exam library…</p>
      <p className="mt-4 text-[0.8rem]">
        Not moving?{" "}
        <Link
          href="/mock-exams"
          className="text-aba-fg underline underline-offset-4"
        >
          Go to mock exams
        </Link>
        .
      </p>
    </div>
  );
}
