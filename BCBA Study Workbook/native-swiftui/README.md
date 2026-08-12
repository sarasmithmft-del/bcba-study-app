# SwiftUI reader for BCBA Study Workbook

These Swift files plus the built HTML are what SwiftUI / Xcode need:

| File / folder | Role |
|------|------|
| `BCBAStudyWorkbookApp.swift` | `@main` SwiftUI app |
| `ContentView.swift` | Root view |
| `WebView.swift` | Loads the HTML workbook |
| `out/index.html` | Built website (add whole `out/` folder to the Xcode target) |

## Create the Xcode SwiftUI project (Mac)

1. Open **Xcode** → **File → New → Project…**
2. **iOS → App** → Next  
3. Product Name: `BCBAStudyWorkbook`  
4. Team: your Apple team  
5. Organization Identifier: `com.euphoria`  
6. Bundle ID becomes: `com.euphoria.BCBAStudyWorkbook`  
   (or set it to `com.euphoria.bcbaworkbook` in Signing)  
7. Interface: **SwiftUI** · Language: **Swift** → Create  
   Save to: `~/Desktop/BCBA/native-swiftui-xcode` (or similar)

8. Delete the stub `ContentView.swift` / `*App.swift` Xcode generated.  
9. Drag these three files from `native-swiftui/` into the Xcode project (copy items if needed).  
10. In Terminal, build the website and add `out/` to the Xcode target:

```bash
cd ~/Desktop/BCBA   # or your repo folder
npm install
npm run build
```

11. In Xcode: right-click the app folder → **Add Files to…** → select the `out` folder  
    ✅ Copy items if needed  
    ✅ Create folder references (blue folder)  
    ✅ Add to target  

12. ▶ Run on Simulator.

### Dev mode (no `out/` in bundle yet)

Keep `npm run dev` running, then Run in Simulator — `ContentView` falls back to `http://127.0.0.1:3333/`.

### Bundled HTML loading

The WebView serves `out/` through the custom URL scheme `bcba-workbook://` so Next.js absolute paths (`/_next/...`, `/module/...`) resolve correctly. Do **not** open `index.html` with a plain `file://` load if you want chapters and assets to work.

## Note vs Capacitor

- **`ios/App/App.xcodeproj`** = Capacitor shell (recommended for App Store).  
- **`native-swiftui/`** = pure SwiftUI WebView shell (what you asked for).  

You only need one of these to ship; Capacitor is the path already set up for App Store Connect.
