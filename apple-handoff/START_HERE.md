# BCBA Study App — Apple takeover (START HERE)

**Canonical Desktop folder name:** `bcba study app`  
**Path on Mac:** `~/Desktop/bcba study app`  
**GitHub:** https://github.com/sarasmithmft-del/bcba-study-app  
**Xcode remote URL:** `https://github.com/sarasmithmft-del/bcba-study-app.git` (see [`GIT_REMOTE_FOR_XCODE.md`](./GIT_REMOTE_FOR_XCODE.md))  
**Bundle ID:** `com.euphoria.bcbaworkbook`  
**Marketing name:** `BCBA Study Workbook`  
**Apple Developer Program:** already active (per project handoff)

This folder in the repo (`apple-handoff/`) is the complete checklist so a Mac + Xcode session can take over without redoing Windows/content work.

---

## What is already DONE (do not redo)

- [x] Full Cooper/Heron/Heward study content + Domain H/I + Phase B modules
- [x] Three 185-item BCBA mocks + synthesis set (TCO weights locked)
- [x] Labs, schedule, resources, settings, subscribe, privacy pages
- [x] Next.js **static export** (`output: "export"` → `out/`)
- [x] IndexedDB on-device progress (no account / no backend required for v1)
- [x] Capacitor 8 npm packages + `capacitor.config.ts` (`webDir: out`, appId locked)
- [x] Subscription **UI + stub client** ready to swap for RevenueCat (Phase 4)
- [x] Privacy policy draft aligned with “Data Not Collected” / on-device storage
- [x] This Apple takeover package + Mac bootstrap script

## What MUST be done on a Mac (cannot be done on Windows/Linux cloud)

| # | Phase | Action |
|---|--------|--------|
| 1 | Machine setup | Install Xcode, Homebrew, Node 20, CocoaPods, Cursor |
| 2 | Desktop folder | Run `scripts/mac-apple-bootstrap.sh` → creates `~/Desktop/bcba study app` |
| 3 | iOS scaffold | `npx cap add ios` + `npx cap sync ios` + open Xcode |
| 4 | Signing | Apple team + bundle ID `com.euphoria.bcbaworkbook` + iOS 16.0 |
| 5 | Native polish | Icon 1024², splash `#121212`, safe areas, status bar |
| 6 | Subscriptions | App Store Connect product `monthly_pro` + RevenueCat + replace stub |
| 7 | Store listing | Screenshots, privacy nutrition labels, description |
| 8 | Ship | Archive → TestFlight → Submit for Review |

Detailed checkboxes: [`CHECKLIST.md`](./CHECKLIST.md)  
**Finishing the app?** → [`FINISHING.md`](./FINISHING.md)  
**New to Apple Developer?** → [`APPLE_DEVELOPER_FOR_BEGINNERS.md`](./APPLE_DEVELOPER_FOR_BEGINNERS.md)  
**Xcode open already?** → [`XCODE_STEPS_NOW.md`](./XCODE_STEPS_NOW.md)  
App Store Connect fields: [`APP_STORE_CONNECT.md`](./APP_STORE_CONNECT.md)  
Fresh Cursor prompt: [`MAC_CURSOR_PROMPT.md`](./MAC_CURSOR_PROMPT.md)

---

## Fastest path on Mac (copy/paste)

**Easiest for opening Xcode (recommended):** follow  
[`FOR_SARA_OPEN_XCODE.md`](./FOR_SARA_OPEN_XCODE.md)  
— or double-click **`OPEN-XCODE.command`** in the repo after it’s on your Desktop.

**Want a clean Desktop folder with only iOS/app files?**  
Run [`../scripts/export-ios-clean-to-desktop.sh`](../scripts/export-ios-clean-to-desktop.sh) → creates **`~/Desktop/TEST`**.  
Details: [`CLEAN_TEST_PACKAGE.md`](./CLEAN_TEST_PACKAGE.md).

```bash
# From a clone of this repo (or after Desktop bootstrap):
chmod +x scripts/mac-apple-bootstrap.sh OPEN-XCODE.command scripts/open-xcode.sh
./scripts/mac-apple-bootstrap.sh
# Then either:
./scripts/open-xcode.sh
# or double-click OPEN-XCODE.command in Finder
```

Bootstrap script:

1. Creates `~/Desktop/bcba study app` (or updates it)
2. Clones/pulls this GitHub repo into that folder
3. Runs `npm install` + `npm run build`
4. Prints the exact next Capacitor / Xcode commands

`open-xcode.sh` / `OPEN-XCODE.command` also run `npx cap sync ios` and open `ios/App/App.xcodeproj`.

Then open Cursor on that folder and paste [`MAC_CURSOR_PROMPT.md`](./MAC_CURSOR_PROMPT.md).

---

## Locked product decisions (do not change without owner approval)

| Item | Value |
|------|--------|
| Framework | Next.js 16 static export + Capacitor 8 |
| Bundle ID | `com.euphoria.bcbaworkbook` |
| IAP product | `monthly_pro` — $9.99/month — 3-day free trial |
| Subscription tooling | RevenueCat + StoreKit 2 |
| Min iOS | 16.0 |
| Auth | None for v1 (on-device only) |

Also see root [`HANDOFF.md`](../HANDOFF.md).
