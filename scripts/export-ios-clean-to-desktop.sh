#!/usr/bin/env bash
# Builds a CLEAN Desktop/TEST folder with only files needed to build the
# BCBA Study Workbook app and open it in Xcode / ship toward App Store.
#
# Excludes: brand/book docs, Windows .bat helpers, quiz-authoring scripts,
# duplicate SwiftUI HTML bundles, node_modules, .next, out (rebuilt on Mac).
#
# Usage (Mac or this environment):
#   ./scripts/export-ios-clean-to-desktop.sh
#   DEST=~/Desktop/TEST ./scripts/export-ios-clean-to-desktop.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="${DEST:-${HOME}/Desktop/TEST}"

echo "==> Source: ${ROOT}"
echo "==> Clean package → ${DEST}"

rm -rf "${DEST}"
mkdir -p "${DEST}"

copy_file() {
  local rel="$1"
  mkdir -p "${DEST}/$(dirname "${rel}")"
  cp -a "${ROOT}/${rel}" "${DEST}/${rel}"
}

copy_dir() {
  local rel="$1"
  mkdir -p "${DEST}/${rel}"
  # Prefer rsync when available; fall back to filtered find+cp.
  if command -v rsync >/dev/null 2>&1; then
    rsync -a \
      --exclude node_modules \
      --exclude .next \
      --exclude out \
      --exclude .git \
      --exclude Pods \
      --exclude build \
      --exclude .build \
      --exclude DerivedData \
      --exclude 'App/public' \
      --exclude '.DS_Store' \
      --exclude '*.log' \
      "${ROOT}/${rel}/" "${DEST}/${rel}/"
  else
    (
      cd "${ROOT}/${rel}"
      find . -type f \
        ! -path '*/node_modules/*' \
        ! -path '*/.next/*' \
        ! -path '*/out/*' \
        ! -path '*/.git/*' \
        ! -path '*/Pods/*' \
        ! -path '*/build/*' \
        ! -path '*/.build/*' \
        ! -path '*/DerivedData/*' \
        ! -path '*/App/public/*' \
        ! -name '.DS_Store' \
        ! -name '*.log' \
        -print0
    ) | while IFS= read -r -d '' f; do
      mkdir -p "${DEST}/${rel}/$(dirname "${f}")"
      cp -a "${ROOT}/${rel}/${f}" "${DEST}/${rel}/${f}"
    done
  fi
}

# --- Core app (Next.js + Capacitor) ---
copy_file package.json
copy_file package-lock.json
copy_file next.config.ts
copy_file tsconfig.json
copy_file postcss.config.mjs
copy_file eslint.config.mjs
copy_file capacitor.config.ts
copy_file .gitignore
copy_file .env.example
copy_file AGENTS.md
copy_file CLAUDE.md

copy_dir src
copy_dir public
copy_dir ios

# --- Apple handoff (how to finish App Store) ---
copy_dir apple-handoff
copy_file HANDOFF.md

# --- One-click Xcode / Simulator helpers ---
copy_file OPEN-XCODE.command
copy_file RUN-ON-SIMULATOR.command
mkdir -p "${DEST}/scripts"
cp -a "${ROOT}/scripts/open-xcode.sh" "${DEST}/scripts/open-xcode.sh"
cp -a "${ROOT}/scripts/mac-build-and-run-simulator.sh" "${DEST}/scripts/mac-build-and-run-simulator.sh"
cp -a "${ROOT}/scripts/mac-apple-bootstrap.sh" "${DEST}/scripts/mac-apple-bootstrap.sh"
cp -a "${ROOT}/scripts/mac-fix-and-open-xcode.sh" "${DEST}/scripts/mac-fix-and-open-xcode.sh"
cp -a "${ROOT}/scripts/export-ios-clean-to-desktop.sh" "${DEST}/scripts/export-ios-clean-to-desktop.sh"
chmod +x "${DEST}/OPEN-XCODE.command" \
  "${DEST}/RUN-ON-SIMULATOR.command" \
  "${DEST}/scripts/open-xcode.sh" \
  "${DEST}/scripts/mac-build-and-run-simulator.sh" \
  "${DEST}/scripts/mac-apple-bootstrap.sh" \
  "${DEST}/scripts/mac-fix-and-open-xcode.sh" \
  "${DEST}/scripts/export-ios-clean-to-desktop.sh" 2>/dev/null || true

# Keep a copy of this exporter inside TEST so Mac can re-run it later from the full repo only.
# (Not required inside TEST itself.)

cat > "${DEST}/START-HERE.txt" <<'EOT'
BCBA Study Workbook — CLEAN iOS package (TEST)

This folder has ONLY what you need to build the app and open it in Xcode.
No brand docs, no Windows helpers, no duplicate HTML bundles.

ON YOUR MAC
-----------
1. Make sure this folder is at:  ~/Desktop/TEST
   (If you downloaded a zip, unzip it to Desktop and rename to TEST.)

2. Install once (if needed):
   - Xcode from the Mac App Store (open it once, accept license)
   - Node.js LTS from https://nodejs.org

3. BEST: double-click  RUN-ON-SIMULATOR.command
   (builds and launches the iPhone Simulator app automatically)

   Fallback: double-click  OPEN-XCODE.command
   OR in Terminal:
     cd ~/Desktop/TEST
     chmod +x RUN-ON-SIMULATOR.command scripts/*.sh
     ./scripts/mac-build-and-run-simulator.sh

4. If Xcode opens instead of the Simulator app:
   - Signing & Capabilities → Team → your Apple ID
   - Bundle ID: com.euphoria.bcbaworkbook
   - Pick an iPhone simulator → press ▶ Run

WHAT IS IN HERE
---------------
  src/                      App screens + study content
  public/                   Static assets
  ios/                      Capacitor Xcode project (App Store path)
  capacitor.config.ts       App ID + webDir
  package.json              Dependencies + build scripts
  apple-handoff/            App Store / Xcode checklists
  HANDOFF.md                Project state for Apple takeover
  RUN-ON-SIMULATOR.command  Build + launch Simulator (preferred)
  OPEN-XCODE.command        Build + sync + open Xcode

WHAT WAS LEFT OUT (on purpose)
------------------------------
  Brand/book strategy markdowns
  Windows .bat files
  Quiz-generator / scrub scripts
  "BCBA Study Workbook/" and native-swiftui/ HTML copies
  node_modules / .next / out  (created when you build)

Bundle ID: com.euphoria.bcbaworkbook
Marketing name: BCBA Study Workbook
EOT

cat > "${DEST}/README.md" <<'EOT'
# BCBA Study Workbook (clean iOS package)

Minimal set of files to **build the study app** and **open it in Xcode** for Apple / iOS.

## Quick start (Mac)

```bash
cd ~/Desktop/TEST
chmod +x RUN-ON-SIMULATOR.command scripts/mac-build-and-run-simulator.sh
./scripts/mac-build-and-run-simulator.sh
```

Or double-click **`RUN-ON-SIMULATOR.command`** (preferred).

Fallback: double-click **`OPEN-XCODE.command`**, then in Xcode: **Team** → **▶ Run**.

See **`START-HERE.txt`** and **`apple-handoff/FOR_SARA_OPEN_XCODE.md`**.

## Commands

```bash
npm install
npm run build          # creates out/
npx cap sync ios       # copies out/ into the iOS project
npm run ios:sim        # build + launch Simulator (Mac + Xcode)
npx cap open ios       # opens Xcode
```

## Bundle

| Item | Value |
|------|--------|
| App name | BCBA Study Workbook |
| Bundle ID | `com.euphoria.bcbaworkbook` |
| Stack | Next.js static export + Capacitor 8 |
EOT

# Count what we shipped
FILE_COUNT="$(find "${DEST}" -type f ! -path '*/.*' | wc -l | tr -d ' ')"
SIZE="$(du -sh "${DEST}" | awk '{print $1}')"

echo ""
echo "========================================"
echo " Clean package ready"
echo "   ${DEST}"
echo "   ${FILE_COUNT} files · ${SIZE}"
echo "========================================"
echo "Next on Mac: double-click RUN-ON-SIMULATOR.command"
echo ""
