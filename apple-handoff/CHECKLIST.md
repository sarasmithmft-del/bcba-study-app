# Apple takeover checklist

Mark items as you finish them on the Mac. Items under **Already complete** stay checked.

## Already complete (repo / Windows side)

- [x] Study content modules + mocks + labs + schedule + resources
- [x] Static export config (`next.config.ts`)
- [x] Capacitor packages + `capacitor.config.ts`
- [x] Subscription stub + paywall/settings/privacy pages
- [x] `apple-handoff/` package + `scripts/mac-apple-bootstrap.sh`
- [x] GitHub remote: `sarasmithmft-del/bcba-study-app`

## A · Mac machine (prereqs)

- [ ] Xcode installed from Mac App Store; opened once; license accepted
- [ ] Homebrew installed
- [ ] Node 20 via Homebrew (`node --version` shows v20.x)
- [ ] CocoaPods (`pod --version` works)
- [ ] Cursor for Mac installed (same account as before)
- [ ] Signed into Xcode with the Apple Developer team account

## B · Desktop project folder

- [ ] Ran `./scripts/mac-apple-bootstrap.sh` (or manual clone)
- [ ] Folder exists: `~/Desktop/bcba study app`
- [ ] `package.json` is at the root of that folder
- [ ] `npm install` succeeded
- [ ] `npm run build` succeeded and created `out/`
- [ ] Opened that folder in Cursor

## C · Phase 2 — iOS Xcode project

- [ ] `npx cap add ios` (creates `ios/` — Mac only)
- [ ] `npx cap sync ios`
- [ ] `npx cap open ios`
- [ ] Signing & Capabilities → your Apple team selected
- [ ] Bundle Identifier = `com.euphoria.bcbaworkbook`
- [ ] Minimum Deployments = iOS 16.0
- [ ] App runs on Simulator (e.g. iPhone 15/16 Pro)
- [ ] Home, a chapter module, and mock exam open inside the simulator

## D · Phase 3 — Native polish

- [ ] App icon 1024×1024 set in Assets
- [ ] Splash background `#121212` (matches Capacitor config)
- [ ] Status bar / safe-area verified on notched devices
- [ ] Optional: haptics via `@capacitor/haptics` where useful
- [ ] Offline: static `out/` content loads without network

## E · Phase 4 — Subscriptions (RevenueCat + StoreKit)

- [ ] App Store Connect app record created with bundle ID above
- [ ] Subscription group **BCBA Workbook Pro**
- [ ] ASC products `monthly` ($12.99) + `yearly` ($129.99), 3-day trial each
- [ ] RevenueCat offering `$rc_monthly` / `$rc_annual` linked to those products
- [ ] Native SwiftUI: SPM **RevenueCat** + **RevenueCatUI** added in Xcode
- [ ] Test key → production `appl_…` before submit
- [ ] Sandbox purchase + restore verified
- [ ] Chat removed from v1 (done in repo)
- [ ] Sandbox purchase + restore tested (device or StoreKit config)

## F · Phase 5 — App Store Connect listing

- [ ] App name, subtitle, description, keywords (see `APP_STORE_CONNECT.md`)
- [ ] Screenshots for required device sizes
- [ ] Privacy nutrition labels match `/privacy` page
- [ ] Support URL + marketing URL (if any)
- [ ] Age rating / content rights completed
- [ ] Review notes mention sandbox tester if needed

## G · Phase 6 — TestFlight + submit

- [ ] Archive in Xcode
- [ ] Upload to App Store Connect
- [ ] Internal TestFlight build installed and smoke-tested
- [ ] External TestFlight (optional)
- [ ] Submit for App Review
- [ ] Respond to any rejection feedback
- [ ] App live on the App Store

## After every web content change (ongoing)

```bash
cd ~/Desktop/bcba\ study\ app
npm run build
npx cap sync ios
```

Then re-run / re-archive in Xcode as needed.
