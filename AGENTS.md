<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Static-export Next.js 16 app (`output: "export"` in `next.config.ts`), React 19, Tailwind v4. It is a client-only study app; progress persists via browser storage.
- Despite `README.md`/`.env.example` mentioning Prisma + PostgreSQL + `DATABASE_URL`, there is no `prisma/` dir and no Prisma dependency in the current code. No database or `.env` is required to run, lint, build, or test this app.
- Run/build/lint use the standard `package.json` scripts. Dev server: `npm run dev` (webpack) serves on `http://127.0.0.1:3333` (binds `0.0.0.0:3333`); ignore the Windows/OneDrive/`localhost`-proxy troubleshooting docs — they don't apply on this Linux VM.
- `npm run lint` currently reports pre-existing errors and warnings; a clean exit is not expected. Don't treat those pre-existing failures as regressions.
- There is no `test` script and no Jest/Vitest/Playwright setup in this repo; smoke-test via the running app instead.
- Core flow to smoke-test: home (`/`) → `/mock-exam/` → start an exam → select a choice → "LOCK ANSWER & EXPLAIN" shows correctness feedback.
- `.bat` helper scripts (`RUN-MOCK-EXAM.bat`, etc.) are Windows-only and irrelevant here. `npm run build` succeeds (static export to `out/`) and is safe to run while developing; prefer `npm run dev` for interactive work.
