"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

interface HomeLinkProps {
  className?: string;
  children?: ReactNode;
}

const APP_BG = "#121212";

function paintDarkShell() {
  // Avoid a white flash if we must fall back to a full reload.
  document.documentElement.style.backgroundColor = APP_BG;
  document.body.style.backgroundColor = APP_BG;
}

function needsHardHomeNavigation(protocol: string): boolean {
  return (
    protocol === "file:" ||
    protocol === "bcba-workbook:" ||
    // Legacy Capacitor scheme (new builds use https://localhost)
    protocol === "capacitor:"
  );
}

function hardGoHome() {
  paintDarkShell();
  try {
    const { protocol, origin } = window.location;
    const base = origin && origin !== "null" ? origin : `${protocol}//localhost`;
    window.location.replace(`${base}/index.html`);
  } catch {
    window.location.replace("/index.html");
  }
}

/**
 * Home control for web + Capacitor / WKWebView.
 *
 * Prefers Next.js client navigation (no flash). Falls back to a full load
 * only on file/custom schemes, or if soft navigation fails to leave the page.
 */
export function HomeLink({ className, children = "← Home" }: HomeLinkProps) {
  const router = useRouter();

  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const protocol = window.location.protocol;
    if (needsHardHomeNavigation(protocol)) {
      hardGoHome();
      return;
    }

    const before = window.location.pathname;
    // Soft route — keeps the dark shell mounted (no reload flash).
    router.push("/");

    // If the WebView soft-router stalls, fall back once (dark shell first).
    window.setTimeout(() => {
      const after = window.location.pathname;
      const stillNested =
        after === before &&
        before !== "/" &&
        before !== "" &&
        !after.endsWith("/index.html");
      if (stillNested) {
        paintDarkShell();
        window.location.replace(`${window.location.origin}/`);
      }
    }, 400);
  };

  return (
    <Link href="/" prefetch={false} className={className} onClick={goHome}>
      {children}
    </Link>
  );
}
