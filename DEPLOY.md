# Deploy this site (put it on the internet)

Your app is a **Next.js** project. Running it only on your PC is fine for study; to share it as a real website you **build** it and **host** it on a provider.

## Fix “Internal Server Error” on your computer first

Common causes on Windows:

1. **OneDrive locks build files** — the project path `OneDrive\Desktop\aba` often causes `EPERM` when Next.js deletes `.next`, which leaves a **broken build** and 500 errors.  
   **Fix:** Move the whole folder to something like `C:\Projects\aba` (not under OneDrive), then:
```bash
npm run clean
npm install
# Set DATABASE_URL in .env to your Postgres URL first (see docs/PHASE1-DATABASE.md)
npx prisma migrate deploy
npm run dev
```
2. **Corrupt `.next` folder** — run `npm run clean`, then `npm run build` again (or use `LAUNCH-PRODUCTION.bat`, which cleans before building).

3. **Database optional** — progress is stored in **PostgreSQL** when `DATABASE_URL` is set and migrations ran. If the DB is unavailable or you set **`DISABLE_PROGRESS_DB=1`**, the app still runs; server-side saves are skipped.

---

## Use Git (version control)

From the project folder:

```bash
git init
git add .
git commit -m "Initial commit"
```

Create an empty repository on **GitHub** (github.com → New repository), then:

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Do **not** commit secrets. `.env` is gitignored; use hosting “Environment variables” instead.

---

## Easiest public deploy: Vercel (made for Next.js)

1. Push your code to GitHub (above).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. **Import** your repository.
4. **Build command:** `prisma generate && next build` (or leave default if `prebuild` already runs `prisma generate` from `package.json`).
5. **Environment variables** (Project → Settings → Environment Variables):
   - **Persist progress:** set **`DATABASE_URL`** to your hosted Postgres URL (Neon/Supabase/Railway — see `docs/PHASE1-DATABASE.md`). After the first deploy, run **`prisma migrate deploy`** against that database (Vercel build already runs **`prisma generate`** via `prebuild`; migrations must reach the DB — use Neon’s shell, or a CI step, or a one-off `npx prisma migrate deploy` locally with prod `DATABASE_URL`).
   - **Simplest demo (no DB):** `DISABLE_PROGRESS_DB` = `1` — site works; **quiz progress is not stored on the server**.
6. Deploy. Vercel gives you a URL like `https://your-app.vercel.app`.

The project **expects PostgreSQL** for Prisma (`schema.prisma`). SQLite **`file:`** URLs are not supported anymore.

---

## Environment reference

| Variable | Local | Vercel (simple) |
|----------|--------|------------------|
| `DATABASE_URL` | Postgres URL from `.env` (see `.env.example`) | Set when you want server-side saves; omit if using `DISABLE_PROGRESS_DB=1` |
| `DISABLE_PROGRESS_DB` | omit for DB saves | `1` keeps deploy simple |

Copy from `.env.example` when setting up a new machine.
