/**
 * Isolate route shell so `/mock-exam` always paints readable chrome even if nested client UI errs.
 */
export default function MockExamLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="min-h-dvh w-full px-4 py-6 md:py-10"
      style={{
        background: "var(--aba-bg,#121212)",
        color: "var(--aba-fg,#e5e7eb)",
      }}
    >
      {children}
    </div>
  );
}
