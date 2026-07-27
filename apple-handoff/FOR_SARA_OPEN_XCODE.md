# Sara — open BCBA Study Workbook in Xcode (easy path)

I **cannot click Xcode on your Mac**. This guide + the double-click script do almost everything for you. You only pick your Team and press ▶ Run.

---

## One-time: get the fixed code on your Mac

Open **Terminal** (Spotlight → type `Terminal` → Enter) and paste this whole block, then press Enter:

```bash
cd ~/Desktop
git clone https://github.com/sarasmithmft-del/bcba-study-app.git "bcba study app" 2>/dev/null || true
cd ~/Desktop/"bcba study app"
git fetch origin
git checkout cursor/fix-bcba-study-workbook-1314
git pull origin cursor/fix-bcba-study-workbook-1314
chmod +x OPEN-XCODE.command scripts/open-xcode.sh
```

If you already have `~/Desktop/bcba study app`, the clone line is fine to skip — the `checkout` / `pull` lines still update you.

---

## Every time you want Xcode

### Option A — double-click (easiest)

1. Open Finder → **Desktop** → **bcba study app**
2. Double-click **`OPEN-XCODE.command`**
3. If Mac says it can’t open: **right-click** the file → **Open** → **Open**
4. Wait until Terminal says **Opening Xcode…** (build can take a few minutes the first time)

### Option B — Terminal one-liner

```bash
cd ~/Desktop/"bcba study app" && ./scripts/open-xcode.sh
```

---

## Inside Xcode (only 3 clicks)

Xcode should already be open on `App.xcodeproj`.

### 1 · Signing (so ▶ Run is allowed)

1. Left sidebar: click the blue **App** icon at the top  
2. Middle pane: click the **App** target (under TARGETS)  
3. Tab: **Signing & Capabilities**  
4. Check **Automatically manage signing**  
5. **Team:** choose your Apple ID / developer team  
6. **Bundle Identifier** must be: `com.euphoria.bcbaworkbook`

Wait until any red signing error goes away.

### 2 · Pick a phone

Top center of Xcode → device menu → **iPhone 16 Pro** (or **iPhone 15 Pro**).

### 3 · Run

Press the **▶** button (or keys **⌘ R**).

Simulator opens. You should see the chapter list for **BCBA Study Workbook**.

---

## If the screen is blank / stuck on Loading

In Terminal:

```bash
cd ~/Desktop/"bcba study app"
./scripts/open-xcode.sh
```

That rebuilds the website, syncs it into iOS, and reopens Xcode. Then ▶ Run again.

---

## What you do **not** need to do

- Do **not** create a new Xcode project from scratch  
- Do **not** drag Swift files by hand (Capacitor project is already in `ios/App/`)  
- Do **not** open random `.html` files in Safari for the iPhone app  
- Do **not** fight the separate “BCBA Study Workbook” SwiftUI folder unless you want that alternate shell later  

**Use:** `OPEN-XCODE.command` → Xcode → Team → ▶ Run  

---

## Still stuck?

| Message | What to do |
|--------|------------|
| `npm: command not found` | Install Node LTS from https://nodejs.org then retry |
| Xcode not installed | Mac App Store → install **Xcode**, open it once, accept license |
| Signing / Team empty | Xcode → Settings → Accounts → add your Apple ID |
| “Unable to boot simulator” | Xcode → Settings → Platforms → download an iOS Simulator |

More detail (optional): [`XCODE_STEPS_NOW.md`](./XCODE_STEPS_NOW.md) · [`OPEN_IN_XCODE.md`](./OPEN_IN_XCODE.md)
