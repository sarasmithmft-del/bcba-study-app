import type { NextConfig } from "next";

/**
 * Phase 1: static export for the iOS build.
 *
 * - `output: "export"` produces a fully static `out/` at build time. Every page
 *   is prerendered; no runtime Node server is needed. This is what Capacitor
 *   will ship inside the iOS WKWebView in Phase 2.
 * - `images.unoptimized: true` disables the Next.js image optimizer (which
 *   requires a Node runtime). We don't use `next/image` heavily anyway.
 * - `trailingSlash: true` emits `/route/index.html` instead of `/route.html`.
 *   Required for Capacitor's file:// serving inside WKWebView to resolve
 *   nested routes without server-side rewrites.
 * - `allowedDevOrigins`: preserved from the dev-server config so
 *   `npm run dev` on 127.0.0.1:3333 keeps working during Windows development.
 *
 * OneDrive/Windows note: this project lives under OneDrive, and OneDrive can
 * lock files inside `.next` while webpack is rebuilding, producing repeated
 * EBUSY errors. The fix is to make `.next` a Windows directory junction that
 * points to a folder outside OneDrive (e.g. %LOCALAPPDATA%\bcba-workbook-next).
 * Run `npm run onedrive-fix` to create the junction. Once the junction exists,
 * OneDrive treats it as an opaque link and never sync-locks its contents.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
