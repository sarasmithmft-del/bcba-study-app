import type { Metadata, Viewport } from "next";
import { CapacitorInit } from "@/components/CapacitorInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "BCBA Interactive Study Workbook",
  description:
    "Chapter readings, practice activities, worksheets, and quizzes aligned with Cooper/Heron/Heward.",
};

/** Required for notch / home-indicator safe areas inside the Capacitor WKWebView. */
export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className="min-h-full bg-aba-bg font-sans text-aba-fg antialiased"
        suppressHydrationWarning
      >
        <CapacitorInit />
        {children}
      </body>
    </html>
  );
}
