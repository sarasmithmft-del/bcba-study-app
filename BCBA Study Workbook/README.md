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
`Package.resolved` lives at  
`BCBA Study Workbook.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved`.

1. Open `BCBA Study Workbook.xcodeproj` (Xcode will resolve packages on first open)
2. Signing → **Team** → your Apple ID
3. ▶ Run on Simulator

### If you see `The file “swiftpm” doesn’t exist` / package graph fatalError

Do **not** Add Package again (it’s already in the project). On the Mac:

```bash
# From the git clone:
./scripts/fix-desktop-swiftpm.sh

# Quit Xcode (Cmd-Q), then:
defaults write com.apple.dt.Xcode IDEPackageSupportUseBuiltinSCM -bool YES
rm -rf ~/Library/Caches/org.swift.swiftpm
rm -rf ~/Library/Developer/Xcode/DerivedData/BCBA_Study_Workbook-*
```

Reopen the Desktop `.xcodeproj` → **File → Packages → Resolve Package Versions** → wait for Package resolved.

## Refresh website HTML after content changes (Mac)

**Canonical Xcode project:** `~/Desktop/BCBA Study Workbook`  
Do **not** run the old full Desktop overwrite sync — it wipes SPM packages.

From the git clone / repo root:

```bash
./scripts/sync-swiftui-out-only.sh
```

That rebuilds the site and copies **only** `out/` into the Desktop project.  
Then in Xcode: Product → Clean Build Folder → ▶ Run.

## Before App Store submit

- RevenueCat iOS key is already set to production `appl_…` in `BCBAStudyWorkbookApp.swift`
- See [`../apple-handoff/APP_STORE_SUBMISSION.md`](../apple-handoff/APP_STORE_SUBMISSION.md)

## Note vs Capacitor

- **This folder** = **primary** App Store path (native SwiftUI + RevenueCat).
- **`ios/App/App.xcodeproj`** = Capacitor shell (secondary / unused for v1).
