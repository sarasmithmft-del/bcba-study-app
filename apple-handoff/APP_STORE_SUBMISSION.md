# App Store submission plan — BCBA Study Workbook

**Goal:** ship to the Apple App Store.  
**Decided 2026-08-07:** ship the **native SwiftUI** app, not Capacitor.

## Primary ship path (native SwiftUI)

| Item | Value |
|------|--------|
| Xcode project | `~/Desktop/BCBA Study Workbook/BCBA Study Workbook.xcodeproj` (also in repo under `BCBA Study Workbook/`) |
| Bundle ID | `com.euphoria.bcbaworkbook` |
| Monetization | **Native RevenueCat + StoreKit** (Swift SDK, not JS) |
| Entitlement | Unlock on **any active entitlement** (Pro tier) |
| Entitlement display name | `BCBA Study Workbook Pro` |
| Products | `monthly` **$12.99** · `yearly` **$129.99** · **3-day free trial** each |
| RevenueCat iOS SDK key | `appl_QzcHkxpeYxGesZtXYcmEsDxCQGG` (public client key) |

### Swift wiring (in repo)

- `BCBAStudyWorkbookApp.swift` — `Purchases.configure`
- `ContentView.swift` — `RootView` gate: PaywallView if unsubscribed, workbook if subscribed, CustomerCenter sheet
- `WebView.swift` — `/subscribe` taps open Customer Center

### Xcode on Mac

SPM packages **RevenueCat** + **RevenueCatUI** are already linked in
`BCBA Study Workbook.xcodeproj` (repo URL `purchases-ios-spm`, up to next major from 5.0.0).

1. Sync / open the project (Xcode resolves packages on first open)  
2. Signing → Team → your Apple ID  
3. ▶ Run (sandbox / StoreKit testing)

If Package Dependencies are empty after a merge conflict, re-add via  
File → Add Package Dependencies → `https://github.com/RevenueCat/purchases-ios-spm.git`.

## Secondary / unused for v1

- Capacitor app at `ios/App/App.xcodeproj`
- Web `/subscribe` paywall + JS RevenueCat (keep for later; not the ship path)

## v1 content cuts

- **Chat removed** (`/chat`, `/api/chat`, “Study assistant” footer) — needs a server + API key; would fail Guideline **2.1** offline.

## Phases

0. **Accounts / legal** — Apple Developer Program, App Store Connect app record, Paid Apps agreement, **public** privacy-policy URL  
1. **IAP live** — ASC products `monthly` / `yearly`, RevenueCat offering (`$rc_monthly` / `$rc_annual`), sandbox purchase + restore  
2. **Chat removed** — done in repo  
3. **iOS config** — Team signing, app icon 1024 + sizes, version `1.0` / build `1`, `ITSAppUsesNonExemptEncryption=false`  
4. **Archive + upload**  
5. **TestFlight** — real device + sandbox IAP  
6. **Listing** — 6.7" iPhone (+ iPad if needed) screenshots, App Privacy (disclose RevenueCat purchase data), age rating  
7. **Submit** — review notes covering interactive quizzes / mocks / labs (Guideline **4.2**)

## Rejection risks watched

| Guideline | Risk |
|-----------|------|
| 3.1.1 | Digital content must use IAP (we do). External “Get the book” link for physical textbook is OK. |
| 2.1 | No broken features (chat removed). |
| 4.2 | WebView wrapper minimum functionality — emphasize quizzes, mocks, labs in review notes. |
| 3.1.2 | Paywall must show price, duration, trial, restore, EULA, privacy (RevenueCatUI PaywallView). |
| 5.2 | BACB/BCBA + Cooper/Heron/Heward trademark disclaimers. |

## Before submit checklist

- [x] RevenueCat iOS SDK key set to production `appl_…`  

- [ ] ASC subscription products Approved / Ready to Submit  
- [ ] Privacy policy URL live  
- [ ] App icon set  
- [ ] TestFlight sandbox purchase + restore verified  
- [ ] Screenshots  
- [ ] App Privacy nutrition labels  
