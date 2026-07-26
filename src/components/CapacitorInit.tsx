"use client";

import { useEffect } from "react";

/**
 * Native-only bootstrap for Capacitor iOS (no-op in the browser).
 * Keeps StatusBar aligned with the dark splash / app chrome.
 */
export function CapacitorInit() {
  useEffect(() => {
    void (async () => {
      try {
        const { Capacitor } = await import("@capacitor/core");
        if (!Capacitor.isNativePlatform()) return;

        const { StatusBar, Style } = await import("@capacitor/status-bar");
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: "#121212" });

        const { SplashScreen } = await import("@capacitor/splash-screen");
        await SplashScreen.hide().catch(() => undefined);
      } catch {
        // Web, or plugins not available yet — ignore.
      }
    })();
  }, []);

  return null;
}
