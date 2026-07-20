"use client";

import { useCallback, useEffect, useState } from "react";
import {
  MONTHLY_OFFERING,
  getEntitlementStatus,
  restorePurchases as restorePurchasesClient,
  resetDevEntitlement,
  startTrial as startTrialClient,
  type EntitlementStatus,
  type SubscriptionOffering,
} from "@/lib/subscription/subscriptionClient";

export type UseSubscription = {
  loading: boolean;
  entitled: boolean;
  trialStartedAt: string | null;
  isDevStub: boolean;
  offering: SubscriptionOffering;
  startTrial: () => Promise<{ ok: true } | { ok: false; error: string }>;
  restore: () => Promise<{ ok: true; entitled: boolean } | { ok: false; error: string }>;
  reset: () => Promise<void>;
  refresh: () => Promise<void>;
};

/**
 * Read the current entitlement from the subscription client and re-check when:
 *  - the tab regains focus (subscription may have been changed in iOS Settings)
 *  - the client dispatches `bcba:entitlement-changed` (from startTrial/reset)
 */
export function useSubscription(): UseSubscription {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<EntitlementStatus>({
    entitled: false,
    trialStartedAt: null,
    isDevStub: true,
  });

  const refresh = useCallback(async () => {
    setLoading(true);
    const next = await getEntitlementStatus();
    setStatus(next);
    setLoading(false);
  }, []);

  useEffect(() => {
    void refresh();
    const onFocus = () => void refresh();
    const onEntitlementChanged = () => void refresh();
    window.addEventListener("focus", onFocus);
    window.addEventListener("bcba:entitlement-changed", onEntitlementChanged);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("bcba:entitlement-changed", onEntitlementChanged);
    };
  }, [refresh]);

  return {
    loading,
    entitled: status.entitled,
    trialStartedAt: status.trialStartedAt,
    isDevStub: status.isDevStub,
    offering: MONTHLY_OFFERING,
    startTrial: startTrialClient,
    restore: restorePurchasesClient,
    reset: resetDevEntitlement,
    refresh,
  };
}
