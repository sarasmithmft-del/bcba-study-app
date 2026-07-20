"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useSubscription } from "@/lib/subscription/useSubscription";

/**
 * Full-screen paywall route.
 *
 * When the user completes onboarding (or when their trial/subscription lapses)
 * they land here. Everything about this page is designed for App Store review
 * safety per Apple guideline 3.1.2:
 *   - Trial length + price + auto-renew disclosure appear BEFORE the CTA.
 *   - CTA copy names the trial explicitly ("Start 3-day free trial").
 *   - Restore Purchases is present as a discoverable secondary action.
 *   - Terms of Use and Privacy Policy links are visible in the paywall footer.
 *
 * Phase 4 will replace the stubbed `startTrial()` / `restore()` calls with the
 * RevenueCat SDK; the copy and layout below should not need to change.
 */
export default function SubscribePage() {
  const router = useRouter();
  const { entitled, offering, isDevStub, loading, startTrial, restore } = useSubscription();
  const [pending, startTransition] = useTransition();
  const [flash, setFlash] = useState<{ tone: "error" | "info"; text: string } | null>(null);

  useEffect(() => {
    if (entitled) {
      router.replace("/");
    }
  }, [entitled, router]);

  function onStartTrial() {
    setFlash(null);
    startTransition(async () => {
      const result = await startTrial();
      if (!result.ok) {
        setFlash({ tone: "error", text: result.error });
        return;
      }
      setFlash({ tone: "info", text: "Trial started. Redirecting…" });
    });
  }

  function onRestore() {
    setFlash(null);
    startTransition(async () => {
      const result = await restore();
      if (!result.ok) {
        setFlash({ tone: "error", text: result.error });
        return;
      }
      if (!result.entitled) {
        setFlash({ tone: "info", text: "No prior purchase found on this device." });
        return;
      }
      setFlash({ tone: "info", text: "Purchase restored. Redirecting…" });
    });
  }

  const primaryLabel = `Start ${offering.freeTrialDays}-day free trial`;
  const priceLine = `Then ${offering.priceString}/${offering.period} · Cancel anytime`;

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-10 px-4 py-16">
      {isDevStub ? (
        <p className="rounded border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-amber-200">
          Dev preview · No real payment. StoreKit + RevenueCat wire up in Phase 4.
        </p>
      ) : null}

      <header className="space-y-4 border border-aba-divider bg-aba-depth px-8 py-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-aba-muted">
          BCBA Study Workbook
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-tight">
          Everything you need to pass the BCBA exam.
        </h1>
        <p className="text-[1rem] leading-relaxed text-aba-muted">
          Cooper/Heron/Heward readings, applied vignettes, SAFMEDS fluency drills, full 185-item mock exams,
          and TCO domain analytics — all aligned to the current BACB Test Content Outline.
        </p>
      </header>

      <section
        aria-label="What's included"
        className="space-y-4 border border-aba-divider bg-black/25 p-6"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Included with your subscription
        </p>
        <ul className="space-y-2 text-[0.95rem] leading-relaxed text-aba-fg">
          <li className="flex gap-3">
            <span aria-hidden className="text-[color:var(--aba-correct)]">·</span>
            All 37 chapter modules — readings, key concepts, and applied vignettes.
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-[color:var(--aba-correct)]">·</span>
            SAFMEDS fluency decks for every chapter (curated where authored, vocab-derived elsewhere).
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-[color:var(--aba-correct)]">·</span>
            Two full 185-item mock exams with 4-hour timers.
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-[color:var(--aba-correct)]">·</span>
            Cross-exam history dashboard: per-domain accuracy across every attempt.
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-[color:var(--aba-correct)]">·</span>
            TCO domain weight-check + chapter-quiz focus flags to plan your study time.
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="text-[color:var(--aba-correct)]">·</span>
            All progress stays on your device — nothing is sent to a server.
          </li>
        </ul>
      </section>

      <section
        aria-label="Trial and price"
        className="space-y-4 border border-[color:var(--aba-correct)]/45 bg-aba-depth p-6"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Free trial · then subscription
        </p>
        <p className="text-[1.05rem] leading-relaxed text-aba-fg">
          <strong>3 days free.</strong> After the trial, your subscription renews monthly at{" "}
          <strong>{offering.priceString}/{offering.period}</strong>. Cancel any time in Settings on your
          device — you keep access through the end of the current period.
        </p>

        <button
          type="button"
          onClick={onStartTrial}
          disabled={pending || loading}
          className="w-full rounded border border-[color:var(--aba-correct)] bg-[color:var(--aba-correct)]/15 px-6 py-4 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-aba-fg transition-colors hover:bg-[color:var(--aba-correct)]/25 disabled:opacity-40"
        >
          {pending ? "Working…" : primaryLabel}
        </button>
        <p className="text-center text-[0.8rem] text-aba-muted">{priceLine}</p>

        {flash ? (
          <p
            role="status"
            className={`rounded border px-4 py-2 text-[0.82rem] ${
              flash.tone === "error"
                ? "border-[color:var(--aba-incorrect)] text-[color:var(--aba-incorrect)]"
                : "border-aba-divider text-aba-fg"
            }`}
          >
            {flash.text}
          </p>
        ) : null}

        <button
          type="button"
          onClick={onRestore}
          disabled={pending}
          className="w-full rounded border border-aba-divider bg-black/25 px-4 py-3 text-[0.85rem] uppercase tracking-[0.18em] text-aba-muted hover:text-aba-fg disabled:opacity-40"
        >
          {pending ? "Working…" : "Restore purchases"}
        </button>
      </section>

      <section
        aria-label="Legal disclosures"
        className="space-y-3 text-[0.75rem] leading-relaxed text-aba-muted/85"
      >
        <p>
          Your {offering.freeTrialDays}-day free trial converts to a monthly subscription at{" "}
          {offering.priceString}. Payment is charged to your Apple ID at the end of the trial.
          Subscription automatically renews unless cancelled at least 24 hours before the end of the current
          period. Manage or cancel any time in Settings &gt; Apple ID &gt; Subscriptions.
        </p>
        <p>
          Not affiliated with the Behavior Analyst Certification Board (BACB). Not a BACB study material.
          Independent study only.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
          <Link
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-aba-fg"
          >
            Terms of Use (EULA)
          </Link>
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-aba-fg"
          >
            Privacy Policy
          </Link>
          <Link href="/settings" className="underline underline-offset-4 hover:text-aba-fg">
            Settings
          </Link>
        </p>
      </section>
    </div>
  );
}
