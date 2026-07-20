/**
 * Mock exam section shell — shared across all full-length simulations.
 */
export default function MockExamsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
