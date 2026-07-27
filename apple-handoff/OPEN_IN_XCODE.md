# Open this project in Xcode (Swift / Capacitor)

You do **not** upload the website as a single Swift file.  
Capacitor already created a real Xcode project with Swift:

| Path | What it is |
|------|------------|
| `ios/App/App.xcodeproj` | **Open this in Xcode** |
| `ios/App/App/AppDelegate.swift` | Swift app entry |
| `ios/App/App/BCBAStudyApp.swift` | App name / bundle ID constants |
| `ios/App/App/public/` | Built website (from `npm run build` + `npx cap sync ios`) |

Bundle ID: `com.euphoria.bcbaworkbook`  
Display name: `BCBA Study Workbook`

## On your Mac (easiest)

Double-click **`OPEN-XCODE.command`** in the project folder  
(or follow [`FOR_SARA_OPEN_XCODE.md`](./FOR_SARA_OPEN_XCODE.md)).

## On your Mac (manual)

```bash
cd ~/Desktop/"bcba study app"
git pull
npm install
npm run build
npx cap sync ios
open ios/App/App.xcodeproj
```

Then in Xcode: Team signing → ▶ Run.

## If Xcode asks for a Git remote

Use: `https://github.com/sarasmithmft-del/bcba-study-app.git`  
(or cancel — Git is optional for building)
