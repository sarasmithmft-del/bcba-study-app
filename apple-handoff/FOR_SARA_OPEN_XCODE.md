# Sara — open BCBA Study Workbook on the iPhone Simulator

A cloud agent **cannot click Xcode on your Mac**. Use the scripts below on the Mac. Prefer **automatic Simulator launch** (no ▶ Run).

---

## Best path: build + launch Simulator automatically

Open **Terminal** (Spotlight → type `Terminal` → Enter) and paste:

```bash
cd ~/Desktop
git clone https://github.com/sarasmithmft-del/bcba-study-app.git "bcba study app" 2>/dev/null || true
cd ~/Desktop/"bcba study app"
git fetch origin
git checkout cursor/local-xcode-build-8982
git pull origin cursor/local-xcode-build-8982
chmod +x RUN-ON-SIMULATOR.command OPEN-XCODE.command scripts/*.sh
./scripts/mac-build-and-run-simulator.sh
```

Or in Finder: open **Desktop → bcba study app** → double-click **`RUN-ON-SIMULATOR.command`**  
(first time: right-click → **Open** → **Open**).

Wait until Terminal says **App launched in Simulator**. You should see **BCBA Study Workbook** on the fake iPhone.

A log is saved to your Desktop: **`BCBA-XCODE-LOG.txt`**.

---

## Fallback: open Xcode and press ▶ Run

If automatic launch fails:

### Option A — double-click

1. Finder → **Desktop** → **bcba study app**
2. Double-click **`OPEN-XCODE.command`**
3. In Xcode:
   1. **Signing & Capabilities** → **Team** → your Apple ID  
      Bundle ID: `com.euphoria.bcbaworkbook`
   2. Top bar → **iPhone 16 Pro** (or any iPhone)
   3. Press **▶** (or **⌘ R**)

### Option B — Terminal

```bash
cd ~/Desktop/"bcba study app" && ./scripts/open-xcode.sh
```

---

## What you do **not** need to do

- Do **not** create a new Xcode project from scratch  
- Do **not** drag Swift files by hand (Capacitor project is already in `ios/App/`)  
- Do **not** open random `.html` files in Safari for the iPhone app  
- Do **not** expect Copilot for Xcode to launch the app for you  

**Use:** `RUN-ON-SIMULATOR.command` (preferred) or `OPEN-XCODE.command` → Team → ▶ Run  

---

## Still stuck?

| Message | What to do |
|--------|------------|
| `npm: command not found` | Install Node LTS from https://nodejs.org then retry |
| Xcode not installed | Mac App Store → install **Xcode**, open it once, accept license |
| Signing / Team empty | Xcode → Settings → Accounts → add your Apple ID |
| “Unable to boot simulator” | Xcode → Settings → Platforms → download an iOS Simulator |
| Blank / Loading forever | Re-run `./scripts/mac-build-and-run-simulator.sh` |

More detail: [`IF_XCODE_NOT_WORKING.md`](./IF_XCODE_NOT_WORKING.md) · [`XCODE_STEPS_NOW.md`](./XCODE_STEPS_NOW.md)
