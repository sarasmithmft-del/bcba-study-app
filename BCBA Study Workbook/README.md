# BCBA Study Workbook — native SwiftUI (App Store path)

**This is the v1 ship target** (not Capacitor).

| Item | Path |
|------|------|
| Xcode project | `BCBA Study Workbook.xcodeproj` |
| App entry | `BCBAStudyWorkbookApp.swift` (RevenueCat configure) |
| Gate + workbook | `ContentView.swift` (`RootView` → Paywall / WebView / Customer Center) |
| HTML shell | `WebView.swift` (`bcba-workbook://` + Subscription → Customer Center) |
| Bundled site | `out/` (**blue folder** in Resources) |

Bundle ID: `com.euphoria.bcbaworkbook`  
Pricing: **$12.99/mo** · **$129.99/yr** · **3-day free trial**

## Open in Xcode (Mac)

RevenueCat + RevenueCatUI are already wired into `BCBA Study Workbook.xcodeproj` via SPM
(`https://github.com/RevenueCat/purchases-ios-spm.git`, up to next major from 5.0.0).

1. Open `BCBA Study Workbook.xcodeproj` (Xcode will resolve packages on first open)
2. Signing → **Team** → your Apple ID
3. ▶ Run on Simulator

If Package Dependencies are missing after a bad merge: **File → Add Package Dependencies…** → same URL → add **RevenueCat** + **RevenueCatUI**.

## Refresh website HTML after content changes

From the **repo root**:

```bash
npm install
npm run build
rm -rf "BCBA Study Workbook/out"
cp -R out "BCBA Study Workbook/out"
```

Then ▶ Run again.

## Before App Store submit

- RevenueCat iOS key is already set to production `appl_…` in `BCBAStudyWorkbookApp.swift`
- See [`../apple-handoff/APP_STORE_SUBMISSION.md`](../apple-handoff/APP_STORE_SUBMISSION.md)

## Note vs Capacitor

- **This folder** = **primary** App Store path (native SwiftUI + RevenueCat).
- **`ios/App/App.xcodeproj`** = Capacitor shell (secondary / unused for v1).
