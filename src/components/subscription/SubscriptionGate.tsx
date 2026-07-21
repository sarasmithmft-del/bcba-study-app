"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useSubscription } from "@/lib/subscription/useSubscription";

const PUBLIC_PATH_PREFIXES = [
  "/subscribe",
  "/settings",
  "/privacy",
  "/terms",
  "/resources",
  "/schedule",
];

function isPublicPath(pathname: string | null): boolean {
  if (!pathname) return true;
  return PUBLIC_PATH_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

/**
 * Gate that redirects the user to `/subscribe` whenever they land on a
 * protected route without an active entitlement (trial or paid). Public
 * routes (`/subscribe`, `/settings`, `/privacy`, `/terms`) always render.
 *
 * Not activated yet — this component exists so Phase 4 can wrap it into
 * `src/app/layout.tsx` in a single edit once the RevenueCat client is
 * wired in. To preview the gated behavior on Windows, wrap children in
 * `<SubscriptionGate>` inside `layout.tsx` manually.
 */
export function SubscriptionGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { entitled, loading } = useSubscription();

  useEffect(() => {
    if (loading) return;
    if (entitled) return;
    if (isPublicPath(pathname)) return;
    router.replace("/subscribe");
  }, [entitled, loading, pathname, router]);

  if (loading) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-6 py-16 text-aba-muted">
        <p className="text-[0.72rem] uppercase tracking-[0.24em]">Checking subscription…</p>
      </div>
    );
  }

  if (!entitled && !isPublicPath(pathname)) {
    return null;
  }

  return <>{children}</>;
}
