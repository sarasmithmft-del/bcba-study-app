# Product roadmap: accounts, progress, web + iPhone, payments (draft)

This is a **sequential plan** from your current local/SQLite workbook to a **finished consumer product**: users sign up with **username + password**, use the site **online** and in an **iPhone app wrapper**, and **progress is saved** to your database. You are already in the **Apple Developer Program**—that covers **distribution and signing**, not the backend (you still build auth, API, and hosting).

**Effort (realistic):** solo or small team, expect **roughly 6–12+ weeks** of focused work for “web + accounts + progress + deploy + iOS shell,” plus more for **payments**, **polish**, and **App Review** iteration. Timelines shrink if you hire help.

---

## Guiding decisions (locked for this plan)

| Topic | Choice | Why |
|--------|--------|-----|
| **Core product** | Keep **Next.js** as the main app | You already have it; fastest path. |
| **iPhone “app”** | **Capacitor** (or similar) **WebView** → your **HTTPS** site | One product for web and phone; App Store presence without rewriting the UI. |
| **Login** | **Username + password** (you store credentials; properly hashed) | Matches your request; use a maintained auth layer (see below). |
| **Database** | **PostgreSQL** (hosted: Neon, Supabase, Railway, etc.) | Required for many concurrent users + reliable cloud progress. SQLite on the server does not scale for this. |
| **Progress** | Extend your existing **study attempt / activity** writes with **`userId`** | Same idea as today’s saves, but scoped per account. |

**Auth implementation options (pick one when you build Phase 2):**

- **Better Auth** or **Auth.js (NextAuth) + Prisma** with a **Credentials** provider: full control, username/password, sessions in DB or JWT strategy you design.
- **Clerk / Auth0**: faster UI and security patches, but you must confirm they support **username** (not only email) the way you want.

This roadmap assumes **Prisma + Postgres** + **sessions after login** (cookies for web; **same-site cookie** + HTTPS for Capacitor WebView often works once domains align—details in Phase 5).

---

## Phase 0 — Hygiene (1–3 days)

**Goal:** stable builds so you’re not debugging OneDrive/`EPERM` while adding auth.

- [ ] Move the repo **out of OneDrive** to something like `C:\Projects\aba` (or keep syncing only `src/` if you insist on cloud backup—prefer full folder outside sync).
- [ ] Confirm **`npm run build`** and **`FIX-500.bat`** (or `clean` → `build` → `serve:local`) work reliably.
- [ ] Decide **production domain** (e.g. `study.yourbrand.com`)—you’ll need it for cookies, Stripe, and the App Store privacy form.

**Exit:** clean build on a non-synced path; domain name chosen or placeholder documented.

---

## Phase 1 — Cloud database + Prisma on Postgres (3–7 days)

**Goal:** all server data lives in **Postgres**, not `dev.db`.

- [ ] Create a **Postgres** instance (Neon/Supabase/Railway).
- [x] Change `prisma/schema.prisma` `datasource` to **postgresql** and set **`DATABASE_URL`** (`docs/PHASE1-DATABASE.md`).
- [x] Design tables (**minimal Phase 1**):
  - **`User`** — `id`, `username` (unique), **`passwordHash`**, timestamps. *(Optional `email` + **`Session`** table deferred to Phase 2.)*
  - **`StudyAttempt`** — optional **`userId`** FK; **`moduleId`**, **`kind`**, **`reference`**, **`score`**, **`payload`**, **`createdAt`** unchanged.
- [ ] Migrate legacy **SQLite** data if you need old local trials (**usually no** — start empty on Postgres).
- [ ] Deploy migrations in CI/hosting (`prisma migrate deploy` on each release / before traffic).

**Exit:** deployed or local **Postgres**; Prisma connects; SQLite removed from this repo.

---

## Phase 2 — Username + password auth (7–14 days)

**Goal:** register, login, logout, **protected routes**.

- [ ] Registration: validate username (length, charset), **unique** check; **hash password** (Argon2 or bcrypt via a audited library—not hand-rolled crypto).
- [ ] Login: verify hash; establish **session** (httpOnly cookie recommended for browser).
- [ ] Middleware: if not authenticated, redirect **`/login`** (marketing pages can stay public).
- [ ] Password reset (email) is **strongly recommended** before public launch—even if MVP uses “contact support”; plan it now.
- [ ] Rate-limit login/register endpoints (slow brute-force).

**Exit:** you can create a user, log in, refresh page, still logged in; logged-out user cannot hit `/module/...` or `/mock-exam` (your choice on what’s paywalled later).

---

## Phase 3 — Progress saved per user (5–10 days)

**Goal:** every “save” is tied to **`userId`**.

- [ ] Update **`recordStudyAttempt`** (server action) to require session and write **`userId`**.
- [ ] Add **read** APIs or server loaders: “resume mock exam,” “worksheet last state,” etc., as needed (start with what you already save today).
- [ ] Add **indexes** on `(userId, moduleId, createdAt)` for performance.
- [ ] Optional: simple **“My progress”** page listing recent activity.

**Exit:** two different test accounts show **different** saved history on the same device/browser.

---

## Phase 4 — Hosting + production deploy (3–7 days)

**Goal:** public **HTTPS** URL for the Next app.

- [ ] Pick host (**Vercel** is the default for Next.js); connect GitHub.
- [ ] Set **environment variables**: `DATABASE_URL`, auth secrets, `NODE_ENV=production`.
- [ ] Run **`prisma generate`** + **`prisma migrate deploy`** in build pipeline.
- [ ] Remove or gate **`DISABLE_PROGRESS_DB`** in production (you want DB on).
- [ ] Privacy policy + terms (even a simple v1) before collecting accounts.

**Exit:** friends can register/login/save progress on the **live URL**.

---

## Phase 5 — iPhone app (Capacitor) (7–14+ days)

**Goal:** App Store binary that opens your **same** site; users log in and progress matches web.

- [ ] Add **Capacitor** iOS project; point **WebView** start URL to **production** `https://…`.
- [ ] Ensure **cookies / session** work in WebView (same domain, **Secure**, **SameSite** appropriate; test on device).
- [ ] App icons, splash, **privacy nutrition labels**, App Store screenshots.
- [ ] Submit to **App Review**; iterate on feedback.

**Payments note:** If users **buy inside** the iOS app, **Apple In‑App Purchase rules** often apply to **digital** goods. Many products use: **purchase on website (Stripe)** + **sign in on app** to access content—compliance must match current App Store guidelines. Plan this **before** you add a “Buy” button in the native shell.

**Exit:** TestFlight or App Store build that logs in and shows saved progress.

---

## Phase 6 — Monetization (parallel or after Phase 4) (7–21 days)

**Goal:** only **paying** users (or subscription) use full content.

- [ ] **Stripe Checkout** on web; **webhooks** set `User.entitlement` or `Subscription` rows.
- [ ] Middleware or server checks: free tier vs paid (e.g. chapter 1 free, rest locked—or full lock).
- [ ] **Stripe Customer Portal** for cancel/renew.

**Exit:** paid test user unlocks modules; unpaid does not.

---

## Phase 7 — TOC / UX edits (your “remove mod numbers”) (ongoing)

**Goal:** polish presentation without renaming every route overnight.

**Short term (code change):**

- [ ] Home list today shows **`Chapter N · mod05`** (`src/app/page.tsx`). Hide **`· {module.id}`** and keep **`Chapter`** + **`title`** only—the URL can stay `/module/mod05` internally.
- [ ] Scan **ModuleWorkspace** / nav for any user-facing **`mod`** labels; swap for **chapter numbers** or neutral labels.

**Long term (if non-devs edit content):**

- [ ] Introduce **content config** (JSON/YAML or small admin UI) for labels, ordering, hiding modules—without redeploy if you adopt a CMS later.

**Exit:** TOC reads the way you want; routes can stay stable for bookmarks.

---

## Phase 8 — “Finished product” checklist (launch hardening)

- [ ] Backups / Postgres PITR (provider feature).
- [ ] Monitoring (host + errors: Sentry, etc.).
- [ ] Support email / status page.
- [ ] Accessibility pass on login + reader.
- [ ] Load test basic endpoints (login, save attempt).

---

## Suggested order (summary)

`0 hygiene → 1 Postgres → 2 auth → 3 progress → 4 deploy → 5 Capacitor iOS → 6 Stripe → 7 TOC polish → 8 launch checklist`

Skipping straight to Capacitor before **auth + Postgres** usually wastes time—you’ll reinstall the wrapper twice.

---

## What you can ask a developer (or Cursor) to do next

Concrete “next sprint” backlog:

1. Migrate Prisma **sqlite → Postgres** + add **`User`** + **`StudyAttempt.userId`**.
2. Implement **signup/login/logout** (username/password) + **middleware** guards.
3. Wire **`recordStudyAttempt`** to **session user**.
4. Deploy to Vercel with **`DATABASE_URL`**.
5. Then Capacitor + TestFlight.

This document is a **living plan**—adjust dates when you choose auth library and hosting.
