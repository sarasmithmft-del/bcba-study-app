# Phase 1 — PostgreSQL + Prisma

The app stores study attempts (and eventually per-user progress) in **PostgreSQL**. Local **`file:`** SQLite URLs are no longer supported for `DATABASE_URL`; `getPrisma()` refuses them and logs a warning.

## 1. Create a database

Use any Postgres host you prefer, for example:

- [Neon](https://neon.tech) — serverless Postgres, free tier  
- [Supabase](https://supabase.com) — Postgres + extras  
- [Railway](https://railway.app) — simple provisioning  
- **Docker locally:**  
  `docker run --name aba-pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres:16`

Copy the connection string. It must start with **`postgresql://`** or **`postgres://`**.

## 2. Environment variables

Copy `.env.example` to `.env` and set:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require"
```

For local Docker without TLS, omit `sslmode` or use `sslmode=disable` if your client requires it.

Optional (offline / troubleshooting — no DB connection):

```bash
DISABLE_PROGRESS_DB=1
```

## 3. Apply schema (migrations)

From the project root (with `.env` loaded or `DATABASE_URL` set in the shell):

```bash
npx prisma migrate deploy
npx prisma generate
```

`npm run build` runs `prisma generate` via the `prebuild` script.

## 4. First-time checklist

| Step | Command / action |
|------|------------------|
| Dependencies | `npm install` |
| DB URL set | `.env` with Postgres `DATABASE_URL` |
| Migrations | `npx prisma migrate deploy` |
| Client | `npx prisma generate` (or `npm run build`) |
| Run app | `npm run dev` or production `next build` → `next start` |

## 5. What changed in Phase 1

- **`User`** — `username` (unique), `passwordHash`; Phase 2 will create accounts and hashing.  
- **`StudyAttempt`** — optional **`userId`** FK to `User` (anonymous rows remain valid until Phase 3).  
- **SQLite / `better-sqlite3`** — removed from this project.

### Vercel / serverless notes

Prefer a **hosted Postgres** (Neon, etc.) rather than attaching a filesystem DB. Either set **`DATABASE_URL`** after `migrate deploy` against that database, or use **`DISABLE_PROGRESS_DB=1`** if you deliberately skip server-side persistence.
