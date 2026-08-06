# BCBA Study Workbook — SwiftUI Xcode project

Ready-to-open Xcode app. The website HTML is already included as a **blue** `out` folder reference (no Finder drag needed).

| Item | Path |
|------|------|
| Xcode project | `BCBA Study Workbook.xcodeproj` |
| Swift entry | `BCBAStudyWorkbookApp.swift` |
| WebView | `WebView.swift` (custom scheme `bcba-workbook://`) |
| Bundled site | `out/` (**blue folder** in Resources) |

Bundle ID: `com.euphoria.bcbaworkbook`

## Open on Mac

```bash
open "BCBA Study Workbook.xcodeproj"
```

Or double-click **`OPEN-IN-XCODE.command`**.

In Xcode: **Team** → iPhone simulator → **▶ Run**.

You should see a **blue** `out` folder in the Project Navigator. That means it is a folder reference and will ship inside the app bundle.

## Refresh the website after content changes

From the **repo root**:

```bash
npm install
npm run build
rm -rf "BCBA Study Workbook/out"
cp -R out "BCBA Study Workbook/out"
```

Then ▶ Run again in Xcode.

## Note vs Capacitor

- **This folder** = pure SwiftUI WebView shell (what the Desktop “BCBA Study Workbook” project uses).
- **`ios/App/App.xcodeproj`** = Capacitor shell (recommended App Store path). See `RUN-ON-SIMULATOR.command` in the repo root.
