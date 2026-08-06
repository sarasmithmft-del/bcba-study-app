"use client";

import Link from "next/link";
import { HomeLink } from "@/components/HomeLink";
import { useState, useTransition } from "react";
import { useSubscription } from "@/lib/subscription/useSubscription";

const APP_VERSION = "0.1.0";
const APPLE_MANAGE_URL = "itms-apps://apps.apple.com/account/subscriptions";
const SUPPORT_EMAIL = "support@example.com";

function formatTrialStarted(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

export default function SettingsPage() {
  const { entitled, trialStartedAt, isDevStub, loading, restore, reset } = useSubscription();
  const [pending, startTransition] = useTransition();
  const [flash, setFlash] = useState<{ tone: "error" | "info"; text: string } | null>(null);

  function onManage() {
    if (typeof window !== "undefined") {
      window.location.href = APPLE_MANAGE_URL;
    }
  }

  function onRestore() {
    setFlash(null);
    startTransition(async () => {
      const result = await restore();
      if (!result.ok) {
        setFlash({ tone: "error", text: result.error });
        return;
      }
      setFlash({
        tone: "info",
        text: result.entitled ? "Purchase restored." : "No prior purchase found on this device.",
      });
    });
  }

  function onReset() {
    setFlash(null);
    startTransition(async () => {
      await reset();
      setFlash({ tone: "info", text: "Dev entitlement cleared. You are now un-subscribed." });
    });
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 px-4 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-aba-muted">
            Settings
          </p>
          <h1 className="mt-3 text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-tight">
            Subscription &amp; app info
          </h1>
        </div>
        <HomeLink className="text-[0.8rem] uppercase tracking-[0.22em] text-aba-muted hover:text-aba-fg" />
      </header>

      {isDevStub ? (
        <p className="rounded border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-amber-200">
          Dev preview · Subscription is stubbed until Phase 4 (RevenueCat + StoreKit 2).
        </p>
      ) : null}

      <section
        aria-label="Subscription status"
        className="space-y-4 border border-aba-divider bg-aba-depth p-6"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Subscription status
        </p>
        {loading ? (
          <p className="text-[0.9rem] text-aba-muted">Loading…</p>
        ) : (
          <>
            <p className="text-[1rem] leading-relaxed text-aba-fg">
              {entitled
                ? "Active · access to full workbook and mock exams."
                : "Not subscribed · start the 3-day free trial to unlock the app."}
            </p>
            {trialStartedAt ? (
              <p className="text-[0.78rem] text-aba-muted">
                Trial started · {formatTrialStarted(trialStartedAt)}
              </p>
            ) : null}
          </>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          {!entitled ? (
            <Link
              href="/subscribe"
              className="rounded border border-[color:var(--aba-correct)] bg-[color:var(--aba-correct)]/15 px-4 py-2 text-[0.85rem] font-semibold uppercase tracking-[0.16em] text-aba-fg hover:bg-[color:var(--aba-correct)]/25"
            >
              Start free trial
            </Link>
          ) : null}
          <button
            type="button"
            onClick={onManage}
            className="rounded border border-aba-divider px-4 py-2 text-[0.85rem] uppercase tracking-[0.16em] text-aba-muted hover:text-aba-fg"
          >
            Manage subscription
          </button>
          <button
            type="button"
            onClick={onRestore}
            disabled={pending}
            className="rounded border border-aba-divider px-4 py-2 text-[0.85rem] uppercase tracking-[0.16em] text-aba-muted hover:text-aba-fg disabled:opacity-40"
          >
            {pending ? "Working…" : "Restore purchases"}
          </button>
          {isDevStub && entitled ? (
            <button
              type="button"
              onClick={onReset}
              disabled={pending}
              className="rounded border border-amber-400/40 px-4 py-2 text-[0.85rem] uppercase tracking-[0.16em] text-amber-200 hover:bg-amber-500/10 disabled:opacity-40"
            >
              Reset (dev)
            </button>
          ) : null}
        </div>

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
      </section>

      <section
        aria-label="Legal and support"
        className="space-y-3 border border-aba-divider bg-black/25 p-6 text-[0.85rem] leading-relaxed"
      >
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Legal &amp; support
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/privacy" className="text-aba-fg underline underline-offset-4 hover:text-aba-muted">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aba-fg underline underline-offset-4 hover:text-aba-muted"
            >
              Terms of Use (EULA)
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-aba-fg underline underline-offset-4 hover:text-aba-muted"
            >
              {SUPPORT_EMAIL}
            </a>
          </li>
        </ul>
        <p className="pt-2 text-[0.75rem] text-aba-muted">App version {APP_VERSION}</p>
        <p className="text-[0.75rem] text-aba-muted">
          Not affiliated with the Behavior Analyst Certification Board (BACB).
        </p>
      </section>
    </div>
  );
}
