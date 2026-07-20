import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BCBA Study Workbook",
  description: "How the BCBA Study Workbook handles your data on this device.",
};

/**
 * Minimal privacy policy for the App Store submission. This copy is drafted
 * for the current design where NO data leaves the device. If we ever add
 * analytics, sign-in, or backend sync, update this page before submitting.
 *
 * Phase 5 note: Apple's Privacy Nutrition Labels in App Store Connect must
 * match the disclosures below. Keep them in sync when either changes.
 */
export default function PrivacyPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 px-4 py-16 text-[0.95rem] leading-relaxed">
      <header className="space-y-2">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-aba-muted">
          Privacy Policy
        </p>
        <h1 className="text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-tight">
          BCBA Study Workbook
        </h1>
        <p className="text-[0.78rem] text-aba-muted">Last updated: 2026-07-20</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Summary
        </h2>
        <p>
          BCBA Study Workbook does not collect, transmit, or share personal information about you. All study
          progress and preferences are stored locally on your device. There is no account, no sign-in, and
          no analytics.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Data we store on your device
        </h2>
        <p>
          The app stores the following in your device&apos;s local storage / on-device database:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-aba-fg">
          <li>Quiz answer history (which item, correct/incorrect, timestamp).</li>
          <li>Mock exam attempt records for the cross-exam history dashboard.</li>
          <li>Subscription entitlement flags returned by StoreKit/Apple.</li>
        </ul>
        <p>None of the above is transmitted off your device by this app.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Subscription payments
        </h2>
        <p>
          Subscription purchases and renewals are processed by Apple through the App Store. This app
          receives only a boolean entitlement signal (subscribed / not subscribed) from Apple&apos;s
          StoreKit framework and, in production, from RevenueCat (our subscription tooling provider).
          RevenueCat may process anonymous device-level identifiers required to link a purchase back to
          the correct install; see{" "}
          <Link
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-aba-muted"
          >
            RevenueCat&apos;s privacy policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Data you can delete
        </h2>
        <p>
          To wipe study progress from this device, delete the app or clear its storage in iOS Settings.
          The app does not maintain any copy of your data outside of your device.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
          Contact
        </h2>
        <p>
          Questions or concerns: <a href="mailto:support@example.com" className="underline underline-offset-4 hover:text-aba-muted">support@example.com</a>.
        </p>
      </section>

      <nav className="flex flex-wrap gap-4 pt-6 text-[0.78rem] uppercase tracking-[0.22em] text-aba-muted">
        <Link href="/" className="hover:text-aba-fg">← Home</Link>
        <Link href="/settings" className="hover:text-aba-fg">Settings</Link>
        <Link href="/subscribe" className="hover:text-aba-fg">Subscription</Link>
      </nav>
    </div>
  );
}
