# BCBA interactive study app

**Roadmap (accounts, login, saved progress, web + iPhone, payments):** see [`docs/PRODUCT-ROADMAP.md`](./docs/PRODUCT-ROADMAP.md).

Next.js app with **The Codex** (split viewer + footnote inspector), drag-and-drop rehearsal (MTS, behavior-chain sorting, SAFMEDS), rubric worksheets, and BDS items with exploded feedback. Content lives in `src/content/modules/*.json`.

## Where this project should live

Windows often gives you **two** “Desktop” locations:

| Location | Typical path |
|----------|----------------|
| **Physical Desktop** | `C:\Users\<you>\Desktop\ABA` (may display as `aba`; names differ only by casing on NTFS) |
| **OneDrive Desktop** | `C:\Users\<you>\OneDrive\Desktop\aba` |

If **`...\OneDrive\Desktop\aba`** was empty but **`...\Desktop\ABA`** had the app, Explorer was pointing at OneDrive while the build landed on the physical Desktop. The project has been copied into **`OneDrive\Desktop\aba`** as well — open **that** folder in Cursor if that’s the Desktop you use.

Canonical lowercase folder name: **`aba`**, with `package.json` and `src\` at the top level.

If your copy is still named **`ABA`** on the physical Desktop only, Windows may block a direct case-only rename while something has the folder open (IDE, terminal `cd`, or `npm run dev`). Do this:

1. Stop the dev server and close any terminal whose current directory is inside the project.
2. Close Cursor/VS Code if this folder is the workspace root (or switch the workspace away first).
3. In PowerShell **from Desktop**:

```powershell
cd $env:USERPROFILE\Desktop
Rename-Item -Path .\ABA -NewName _aba_rename_tmp
Rename-Item -Path .\_aba_rename_tmp -NewName aba
```

4. Re-open the project from `...\Desktop\aba`.

5. Optional: delete `.next` inside `aba` and run `npm run build` once so build metadata matches the new path.

## Commands

```bash
npm install
npm run dev    # http://127.0.0.1:3333 (use 127.0.0.1; see mock-exam section if refused)
npm run build
npm run lint
```

**Stuck on blank/black pages or `localhost` errors?** Read **[`WHY-THINGS-DONT-WORK.md`](./WHY-THINGS-DONT-WORK.md)** (Git vs server vs OneDrive). **`LAUNCH-PRODUCTION.bat`** builds + runs production on **`http://127.0.0.1:3333/`** without `next dev`.

**Database:** **PostgreSQL** via Prisma. Set **`DATABASE_URL`** in `.env` (see **`.env.example`** and **[`docs/PHASE1-DATABASE.md`](./docs/PHASE1-DATABASE.md)**). Run **`npx prisma migrate deploy`** once per environment after setting the URL.

**Black page + “Internal Server Error”?** Almost always means a **broken or half-built** `.next` folder or an **old server** still stuck on port **3333**. Double‑click **[`FIX-500.bat`](./FIX-500.bat)** — it stops that port, clears `.next`, rebuilds, and starts **`npm run serve:local`**.

**Put the site on the internet:** push to GitHub and deploy (e.g. Vercel). Step-by-step: **[`DEPLOY.md`](./DEPLOY.md)**. For a quick cloud deploy without a database, set **`DISABLE_PROGRESS_DB=1`** in the host’s environment variables.

## Mock exam (`/mock-exam`)

**`localhost refused to connect` (`ERR_CONNECTION_REFUSED`) usually means one of:**
1. **No dev server running** — the site only exists while **`npm run dev`** stays **open** somewhere. Closing that window kills the site instantly.
2. **Wrong address** — development is pinned to **`http://127.0.0.1:3333/`** (avoid old **`:3000`** bookmarks).

**Prefer `127.0.0.1` over `localhost`:** some school/work **proxies** mishandle the name `localhost`; the IP usually works.

Stable URLs (**after `npm run dev` shows Ready**):
- **Home:** `http://127.0.0.1:3333/`
- **Mock exam:** `http://127.0.0.1:3333/mock-exam`

**Edge/Chrome “check proxy and firewall”:** that line is **generic**. It does **not** prove a firewall problem. **Connection refused** almost always means **no program is listening** on that port (dev server off) or the **URL/port is wrong**.

Quick test: double‑click **`CHECK-DEV-SERVER.bat`** — it tells you if **`127.0.0.1:3333`** responds. If it says **FAIL**, start **`RUN-MOCK-EXAM.bat`** or run **`npm run dev`** and fix any **red errors** in that window (example: run **`npm install`** once).

**If you use a system proxy:** Windows **Settings → Network & Internet → Proxy** — add bypass / exceptions for **`localhost`**, **`127.0.0.1`**, and **`<local>`** / **`<loopback>`** if your build has that option, then retry the URLs above.

### Easiest (Windows — double‑click)

1. **File Explorer** → open folder that contains **`package.json`**.
2. **Double‑click `RUN-MOCK-EXAM.bat`.**
   - Window **`ABA NEXT SERVER - DO NOT CLOSE`** runs **`npm run dev`** → **leave it open**.
   - Waits until **port `3333`** answers, then opens **`/mock-exam`**.

Optional: **`OPEN-MOCK-EXAM.bat`** only opens the browser (use **after** the server shows **Ready**).

If **`npm was not found`**, install **[Node.js LTS](https://nodejs.org)** then run **`npm install`** in this folder.

### Already in a terminal?

```powershell
cd path\to\aba
npm run dev
```

Then **`npm run open-site`** (home) or **`npm run open-mock-exam`**. Older PowerShell: **`;`** not **`&&`**.

If Cursor **Simple Browser** is black, use Chrome or Edge with **`http://127.0.0.1:3333/`**.

If recap does not save, **`npm run dev`** must stay running, **`DATABASE_URL`** must point at a reachable Postgres instance, and migrations must be applied (**`npx prisma migrate deploy`**). Optional: **`DISABLE_PROGRESS_DB=1`** turns off server-side saves.

## Stack
- Next.js App Router, React 19, TypeScript, Tailwind v4
- Prisma + PostgreSQL (`prisma/schema.prisma`, migrations under `prisma/migrations`; see `docs/PHASE1-DATABASE.md`)
- `@dnd-kit` for drag-and-drop
