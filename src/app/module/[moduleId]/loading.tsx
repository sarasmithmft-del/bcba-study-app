export default function ModuleLoading() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4"
      style={{ background: "var(--aba-bg,#121212)", color: "var(--aba-fg,#e5e7eb)" }}
      role="status"
    >
      <p className="text-[0.85rem] font-semibold uppercase tracking-[0.22em] text-aba-muted">
        Loading chapter…
      </p>
    </div>
  );
}
