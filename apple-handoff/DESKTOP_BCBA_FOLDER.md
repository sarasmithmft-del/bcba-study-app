# Desktop folder: `BCBA`

Canonical launch folder on your computer:

```text
~/Desktop/BCBA
```

## Create it on your Mac (recommended)

In Terminal:

```bash
# From any clone of the repo:
chmod +x scripts/create-desktop-BCBA.sh
./scripts/create-desktop-BCBA.sh
```

Or one-liner:

```bash
git clone https://github.com/sarasmithmft-del/bcba-study-app.git ~/Desktop/BCBA
cd ~/Desktop/BCBA
npm install && npm run build && npx cap sync ios
```

## Launch

- **iPhone / Xcode:** double-click `LAUNCH-ON-MAC.command`  
  or `open ~/Desktop/BCBA/ios/App/App.xcodeproj` → ▶ Run  
- **Browser:** `cd ~/Desktop/BCBA && npm run dev` → http://127.0.0.1:3333/

Bundle ID: `com.euphoria.bcbaworkbook`
