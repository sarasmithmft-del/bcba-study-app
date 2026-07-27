# When everything looks black or “localhost refuses”

## Does installing Git fix it?

**Not by itself.** Git is **version control** (save history, push/pull with GitHub). It does **not**:

- compile the site,
- start a server, or
- turn the app into a folder of `.html` you double‑click like a Word doc.

Git **does** become useful **if**:

- You put the code on **GitHub** and deploy (see below), or
- You want a backup you can clone on another PC.

---

## Why the app feels “broken” locally

This is a **Next.js** app — it runs as a **small web server on your PC**. There is nothing useful to open with `File → Open` in the browser (`file:///...` URLs will fail). You need **`npm`** (Node.js) plus **one running server process**:

- **`npm run dev`** = development mode (hot reload)
- **`npm run build:start`** = production **static** build (`out/`), then **`npm run serve:local`** on port **3333** (often more stable than `next dev`)

Until that process is listening, **every** chapter route will look “offline” — not just mock exam.

**If Edge says “proxy / firewall”:** that wording is generic. **`ERR_CONNECTION_REFUSED`** usually means **no server is listening** — not that Windows Firewall decided to block you.

---

## Best local path without fighting `next dev`

1. Install **[Node.js LTS](https://nodejs.org)** (includes `npm`).
2. In PowerShell (**use `;` not `&&` on older shells**):

   ```powershell
   cd path\to\aba   # folder that contains package.json
   npm install
   npm run build:start
   ```

3. Leave that terminal **OPEN**. In the browser go to **`http://127.0.0.1:3333/`**.

Or double‑click **`LAUNCH-PRODUCTION.bat`** in this folder (builds, then **`npm run serve:local`** on **`http://127.0.0.1:3333/`**).

> **Important:** Scripts in this repo open **`127.0.0.1:3333`**, not `:3000` and preferably not bare `localhost` (school/work proxies sometimes break `localhost`).

Also try **`CHECK-DEV-SERVER.bat`** — tells you quickly if something answers on `:3333`.

---

## Moving off OneDrive (big win on Windows)

If the folder lives under **OneDrive\Desktop**, turn off sync for it or move a copy to e.g. **`C:\studies\aba`**. Sync/AV locks `.next`, `node_modules`, and SQLite (`dev.db`), which produces “blank/black” shells and flaky `npm`.

---

## If you truly want something that is NOT “localhost”

You need **hosting**:

1. Push the repo to GitHub (**Git helps here**).
2. Deploy on **[Vercel](https://vercel.com)** (free tier usually works for Next apps).  
   You get **`https://your-app.vercel.app`** — classmates can open it in a browser with no installs.

Hosting still **builds** the same Next.js app; it doesn’t magically avoid “HTML + JavaScript”— it runs on their servers instead of your laptop.

There is **no supported “just double‑click HTML” zip** for this whole workbook without ripping out database + server logic that chapters use.
