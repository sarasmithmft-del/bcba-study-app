import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BCBA Interactive Study Workbook",
  description:
    "Chapter readings, practice activities, worksheets, and quizzes aligned with Cooper/Heron/Heward.",
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
        {children}
      </body>
    </html>
  );
}
