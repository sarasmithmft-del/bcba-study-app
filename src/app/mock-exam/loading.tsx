export default function MockExamLoading() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center gap-4"
      role="status"
      style={{ background: "var(--aba-bg,#121212)", color: "var(--aba-fg,#e5e7eb)" }}
    >
      <p className="text-[0.85rem] font-semibold uppercase tracking-[0.22em]">Loading mock exam…</p>
    </div>
  );
}
