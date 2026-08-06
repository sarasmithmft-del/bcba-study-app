"use client";

import type { ReactNode, MouseEvent } from "react";

interface HomeLinkProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Home control that works inside Capacitor / WKWebView.
 *
 * Next.js `<Link href="/">` soft-routing often fails to leave nested
 * static-export routes (`/module/.../`) in the iOS WebView. A full
 * document navigation to `/` (or `/index.html` on file/custom schemes)
 * reliably returns to the chapter list.
 */
export function HomeLink({ className, children = "← Home" }: HomeLinkProps) {
  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    try {
      const { protocol, origin } = window.location;
      // Custom / file schemes: land on the bundled index.html
      if (
        protocol === "file:" ||
        protocol === "bcba-workbook:" ||
        protocol === "capacitor:"
      ) {
        const base = origin && origin !== "null" ? origin : `${protocol}//localhost`;
        window.location.href = `${base}/index.html`;
        return;
      }
      // Capacitor https://localhost and normal browsers
      window.location.assign(`${origin}/`);
    } catch {
      window.location.href = "/index.html";
    }
  };

  return (
    <a href="/" className={className} onClick={goHome}>
      {children}
    </a>
  );
}
