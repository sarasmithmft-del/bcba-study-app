# Clean Desktop `TEST` package (iOS-only files)

Use this when you want **only the files needed to build the app and open Xcode** — not brand docs, Windows helpers, or duplicate HTML folders.

## Create / refresh `~/Desktop/TEST`

From the full repo on your Mac:

```bash
cd ~/Desktop/"bcba study app"   # or wherever the full repo lives
chmod +x scripts/export-ios-clean-to-desktop.sh
./scripts/export-ios-clean-to-desktop.sh
```

That writes **`~/Desktop/TEST`** (about ~5 MB source, no `node_modules`).

Then:

```bash
cd ~/Desktop/TEST
# double-click OPEN-XCODE.command
# or:
./scripts/open-xcode.sh
```

## Included

| Path | Why |
|------|-----|
| `src/`, `public/` | App + content |
| `ios/` | Capacitor Xcode project |
| `package.json`, lockfile, Next/Capacitor configs | Build |
| `apple-handoff/`, `HANDOFF.md` | App Store / Xcode steps |
| `OPEN-XCODE.command`, `scripts/open-xcode.sh` | One-click open in Xcode |

## Excluded on purpose

- Brand / book strategy markdown (`00_…`–`09_…`, `book/`)
- Windows `.bat` launchers
- Quiz authoring / scrub scripts
- `BCBA Study Workbook/` and `native-swiftui/` (duplicate HTML bundles)
- `node_modules`, `.next`, `out/` (recreated by `npm install` / `npm run build`)

## Zip artifact

Cloud agents may also produce  
`/opt/cursor/artifacts/BCBA-Study-Workbook-TEST.zip`  
— unzip that to your Mac Desktop and rename the folder to **`TEST`**.
