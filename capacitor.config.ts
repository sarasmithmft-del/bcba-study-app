import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Capacitor wrapper for the Next.js static export (`out/`).
 *
 * Phase 2 on Mac: `npm run build && npx cap add ios && npx cap sync ios`
 * Bundle ID must match App Store Connect: com.euphoria.bcbaworkbook
 */
const config: CapacitorConfig = {
  appId: "com.euphoria.bcbaworkbook",
  appName: "BCBA Study Workbook",
  webDir: "out",
  server: {
    androidScheme: "https",
    // https scheme keeps Next.js absolute routes (e.g. Home → `/`) working in WKWebView
    iosScheme: "https",
  },
  ios: {
    contentInset: "automatic",
    preferredContentMode: "mobile",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: "#121212",
      showSpinner: false,
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#121212",
    },
  },
};

export default config;
