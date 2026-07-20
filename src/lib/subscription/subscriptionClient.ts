/**
 * Subscription client — dev stub for Phase 1/pre-iOS.
 *
 * This file defines the entire subscription surface the app uses:
 *   - `isEntitled()` — is the user currently in a trial or paid subscription?
 *   - `getOffering()` — pricing/trial metadata for the paywall to render.
 *   - `startTrial()` — begin the 3-day free trial (and enroll in monthly billing).
 *   - `restorePurchases()` — pull any prior purchases from Apple.
 *
 * On iOS via Capacitor (Phase 4), this file will be replaced with a
 * `@revenuecat/purchases-capacitor`-backed implementation. All callers should
 * use the exports here so the swap in Phase 4 is a single-file change.
 *
 * The stub is designed so we can preview the paywall on Windows (`npm run dev`):
 *   - Everyone starts un-entitled — visiting `/subscribe` renders the paywall.
 *   - Clicking "Start 3-day free trial" writes `bcba.devEntitled=true` to
 *     localStorage and unlocks the app locally. Clicking "Reset" in
 *     `/settings` re-locks. No real payment is involved.
 */

const DEV_ENTITLEMENT_KEY = "bcba.devEntitled";
const DEV_TRIAL_START_KEY = "bcba.devTrialStartedAt";

export type SubscriptionOffering = {
  productId: string;
  /** Price string as it will appear on the paywall (localized in production). */
  priceString: string;
  /** Billing period, e.g. "month". */
  period: "month" | "year";
  /** Length of the introductory free trial in days (0 = no trial). */
  freeTrialDays: number;
};

export type EntitlementStatus = {
  entitled: boolean;
  /** ISO 8601 timestamp when the current trial began, if any. */
  trialStartedAt: string | null;
  /**
   * Present when the client is running in the pre-Phase-4 dev stub. The real
   * RevenueCat client will not set this. UI can key off this flag to show a
   * "dev mode" ribbon so it is obvious we are not talking to Apple.
   */
  isDevStub: true;
};

export const MONTHLY_OFFERING: SubscriptionOffering = {
  productId: "monthly_pro",
  priceString: "$9.99",
  period: "month",
  freeTrialDays: 3,
};

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export async function getOffering(): Promise<SubscriptionOffering> {
  return MONTHLY_OFFERING;
}

export async function getEntitlementStatus(): Promise<EntitlementStatus> {
  if (!isBrowser()) {
    return { entitled: false, trialStartedAt: null, isDevStub: true };
  }
  const entitled = localStorage.getItem(DEV_ENTITLEMENT_KEY) === "true";
  const trialStartedAt = localStorage.getItem(DEV_TRIAL_START_KEY);
  return {
    entitled,
    trialStartedAt: trialStartedAt || null,
    isDevStub: true,
  };
}

export async function isEntitled(): Promise<boolean> {
  const status = await getEntitlementStatus();
  return status.entitled;
}

export async function startTrial(): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isBrowser()) return { ok: false, error: "Storage unavailable in this environment." };
  try {
    localStorage.setItem(DEV_ENTITLEMENT_KEY, "true");
    if (!localStorage.getItem(DEV_TRIAL_START_KEY)) {
      localStorage.setItem(DEV_TRIAL_START_KEY, new Date().toISOString());
    }
    window.dispatchEvent(new Event("bcba:entitlement-changed"));
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

export async function restorePurchases(): Promise<{ ok: true; entitled: boolean } | { ok: false; error: string }> {
  if (!isBrowser()) return { ok: false, error: "Storage unavailable." };
  const entitled = localStorage.getItem(DEV_ENTITLEMENT_KEY) === "true";
  return { ok: true, entitled };
}

/** Debug helper — dev-only, exposed via /settings so the tester can re-lock. */
export async function resetDevEntitlement(): Promise<void> {
  if (!isBrowser()) return;
  localStorage.removeItem(DEV_ENTITLEMENT_KEY);
  localStorage.removeItem(DEV_TRIAL_START_KEY);
  window.dispatchEvent(new Event("bcba:entitlement-changed"));
}
