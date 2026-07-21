# HANDOFF — BCBA Interactive Study Workbook · iOS build

> **Purpose:** Single source of truth for continuing this project after switching from Windows to macOS.
> When you clone this repo on your Mac and start a fresh Cursor chat, paste the prompt in
> the [PROMPT TO START A FRESH CHAT](#prompt-to-start-a-fresh-chat) section and the new
> agent will have everything it needs to pick up exactly where we left off.

- **GitHub repo:** https://github.com/sarasmithmft-del/bcba-study-app
- **Bundle ID:** `com.euphoria.bcbaworkbook`
- **Marketing name:** `BCBA Study Workbook`
- **Pricing model:** 3-day free trial → $9.99/month auto-renewing subscription (via RevenueCat + StoreKit 2)
- **Distribution:** Apple App Store (Apple Developer Program membership already active)
- **Latest content commit:** `a83bd3c` (audit gaps closed) + Capacitor Windows prep on `main`

---

## Where we are (state as of 2026-07-21 evening)

### Windows-side · DONE

- [x] Cooper chapter modules + Domain H/I modules + Phase B supplements (FA protocols, assessment tools, Ethics navigator, test-taking strategy, RFT/ACT)
- [x] Three full 185-item BCBA mocks with **exact TCO weights** A9/B26/C22/D15/E24/F24/G26/H20/I19 (authored vignettes, not templates)
- [x] Cross-chapter synthesis set (25 items)
- [x] Missed-item drill + weak-domain module links on mock results
- [x] Study schedule generator (`/schedule/`) + companion resources (`/resources/`)
- [x] Interactive labs: graph reading (`/labs/graph/`) + SCC/celeration (`/labs/scc/`)
- [x] Static export (`output: "export"`, `trailingSlash: true`)
- [x] IndexedDB on-device attempt persistence
- [x] Subscription surface (stub client, hook, gate, `/subscribe`, `/settings`, `/privacy`)
- [x] Capacitor packages installed + `capacitor.config.ts` committed (`webDir: out`, appId locked)
- [x] GitHub `main` up to date

### Mac-side · TO DO (start here)

```mermaid
flowchart TD
    A[Install Xcode + Homebrew + Node + CocoaPods + Cursor] --> B[Clone repo, npm install, verify build]
    B --> C[Phase 2: npx cap add ios + sync + open Xcode]
    C --> D[Phase 3: Native polish icon/splash/statusbar]
    D --> E[Phase 4: RevenueCat + StoreKit subscription wire-up]
    E --> F[Phase 5: App Store Connect setup]
    F --> G[Phase 6: TestFlight beta + submit for review]
    G --> H[Live on App Store]

    style A fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style B fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style C fill:#7c2d12,stroke:#f97316,color:#fff
    style D fill:#7c2d12,stroke:#f97316,color:#fff
    style E fill:#7c2d12,stroke:#f97316,color:#fff
    style F fill:#166534,stroke:#22c55e,color:#fff
    style G fill:#166534,stroke:#22c55e,color:#fff
    style H fill:#4c1d95,stroke:#a855f7,color:#fff
```

**Windows cannot run `npx cap add ios`** — that step requires macOS + Xcode. Config + npm packages are already in the repo.

---

## Design decisions locked in (do not re-litigate)

| Decision | Value | Why |
|---|---|---|
| Framework | Next.js 16 + React 19, static export (`output: "export"`) | Ships as a pure HTML/JS bundle that Capacitor's iOS WebView serves offline |
| Data persistence | IndexedDB via `src/lib/storage/attemptsStore.ts` | Zero server, works offline |
| Native wrapper | Capacitor 8 (not React Native, not Expo) | Reuses the Next.js `out/` folder |
| Subscription tooling | RevenueCat + StoreKit 2 | Receipt validation, restores, trial |
| Subscription product | Monthly, $9.99, 3-day intro free trial | Product ID: `monthly_pro` |
| Bundle ID | `com.euphoria.bcbaworkbook` | Must match App Store Connect |
| iOS deployment target | iOS 16.0 | Modern WebKit + StoreKit 2 |
| Content-only auth | None | Privacy label: "Data Not Collected" |
| TCO domain schema | A–I with exact 185-item weights above | Matches study blueprint used in Mocks 1–3 |

---

## Mac-side setup · Step by step

### Step 1 · Install prerequisites (30–90 min, mostly waiting on Xcode)

**1a. Xcode (start this first — biggest download)**

- Open the **App Store** app on Mac → search **Xcode** → Install (~15 GB)
- Open Xcode once to finish components; then:
  ```bash
  sudo xcodebuild -license accept
  ```

**1b. Homebrew**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**1c. Node.js 20 + git + CocoaPods**

```bash
brew install node@20 git
echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
node --version
sudo gem install cocoapods
pod --version
```

**1d. Cursor for Mac** — https://cursor.com/download (same account as Windows)

### Step 2 · Get the code (5 min)

```bash
mkdir -p ~/Projects && cd ~/Projects
git clone https://github.com/sarasmithmft-del/bcba-study-app.git
cd bcba-study-app
npm install
npm run build   # must produce out/ + Route table including labs/schedule/resources/mocks
```

Then:

```bash
open -a Cursor .
```

### Step 3 · Paste the fresh-chat prompt (below)

---

## Phase-by-phase roadmap (Mac)

### Phase 2 · Scaffold iOS Xcode project (~30 min)

Packages + `capacitor.config.ts` are already in the repo. On Mac:

```bash
npm run build
npx cap add ios
npx cap sync ios
npx cap open ios
# or: npm run cap:sync && npm run cap:open
```

**In Xcode (one-time):**

- Select **App** project → **Signing & Capabilities** → your Apple team
- Bundle Identifier: `com.euphoria.bcbaworkbook`
- Minimum Deployments → iOS **16.0**
- Run on a Simulator (e.g. iPhone 15 Pro)

### Phase 3 · Native polish (~1 hour)

App icon 1024², splash (dark `#121212`), status bar, safe-area CSS, offline indicator, optional haptics via `@capacitor/haptics`.

### Phase 4 · Subscription wiring (~2 hours)

App Store Connect + RevenueCat setup (see earlier detail in git history / agent transcripts if needed):

- Product ID `monthly_pro`, group **BCBA Workbook Pro**, $9.99/mo, 3-day free trial
- Replace stub in `src/lib/subscription/subscriptionClient.ts`
- Wrap layout with `<SubscriptionGate>`

### Phase 5–6 · Screenshots, TestFlight, submit

Archive in Xcode → upload → TestFlight sandbox → Submit for Review.

---

## Common gotchas

| Problem | Fix |
|---|---|
| `cap add ios` on Windows | Must run on Mac |
| Empty chapters after native change | `npm run build && npx cap sync ios` |
| OneDrive EBUSY on Windows | Pause OneDrive while developing; `npm run onedrive-fix` only cleans cache (do not junction `.next` outside project) |
| Subscription no-op in Simulator | Enable StoreKit Sandbox / use device + sandbox tester |

---

## Key files

| Path | Purpose |
|---|---|
| `capacitor.config.ts` | App ID, `webDir: out`, splash/status bar |
| `next.config.ts` | Static export |
| `src/lib/subscription/subscriptionClient.ts` | Swap stub → RevenueCat in Phase 4 |
| `src/components/subscription/SubscriptionGate.tsx` | Activate in layout in Phase 4 |
| `src/content/mockExam/` | Mocks 1–3 + synthesis — avoid drive-by edits during iOS work |
| `src/app/labs/` | Graph + SCC labs |
| `src/app/schedule/` · `src/app/resources/` | Study planner + official links |

---

## PROMPT TO START A FRESH CHAT

Paste this on the Mac after cloning:

> Read `HANDOFF.md` in the repo root — that's the state of this project. I'm on macOS now, and my goal is to publish this to the Apple App Store. Windows-side content, static export, Capacitor npm packages, and `capacitor.config.ts` are already done and on GitHub `main`. Next: Phase 2 — run `npm run build`, `npx cap add ios`, `npx cap sync ios`, and walk me through Xcode signing. Bundle ID is `com.euphoria.bcbaworkbook`. Apple Developer team is already active. Do not re-author content modules or mock exams unless a build error requires it.

---

_Last updated: 2026-07-21 · Capacitor Windows prep + audit content shipped_
