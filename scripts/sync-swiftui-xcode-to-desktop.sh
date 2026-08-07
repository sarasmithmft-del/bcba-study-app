#!/usr/bin/env bash
# Builds the site, refreshes BCBA Study Workbook/out, copies the ready Xcode
# project (Swift + SPM RevenueCat packages already in .xcodeproj) to Desktop,
# and opens it.
#
# Prefer nested path used with the git clone:
#   ~/Desktop/bcba study app/BCBA Study Workbook
# Fallback:
#   ~/Desktop/BCBA Study Workbook
#
# Usage (Mac):
#   ./scripts/sync-swiftui-xcode-to-desktop.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${ROOT}/BCBA Study Workbook"

# Prefer the project inside the git clone on Desktop
if [[ -d "${HOME}/Desktop/bcba study app" ]]; then
  DEST="${HOME}/Desktop/bcba study app/BCBA Study Workbook"
else
  DEST="${HOME}/Desktop/BCBA Study Workbook"
fi

cd "$ROOT"

echo "==> npm install + build…"
npm install
npm run build
[[ -d out ]] || { echo "ERROR: out/ missing"; exit 1; }

echo "==> Refreshing ${SRC}/out…"
rm -rf "${SRC}/out"
cp -a out "${SRC}/out"

echo "==> Copying ready Xcode project → ${DEST}"
mkdir -p "$(dirname "${DEST}")"
rm -rf "${DEST}"
mkdir -p "${DEST}"
rsync -a \
  --exclude native-swiftui \
  --exclude .DS_Store \
  "${SRC}/" "${DEST}/"

chmod +x "${DEST}/OPEN-IN-XCODE.command" 2>/dev/null || true

# Confirm SPM wiring is present in the copied project
if ! grep -q 'purchases-ios-spm' "${DEST}/BCBA Study Workbook.xcodeproj/project.pbxproj"; then
  echo "ERROR: RevenueCat SPM reference missing from copied .xcodeproj"
  exit 1
fi

echo "==> Opening Xcode…"
open "${DEST}/BCBA Study Workbook.xcodeproj"

echo ""
echo "========================================"
echo " Opened: ${DEST}/BCBA Study Workbook.xcodeproj"
echo " Packages: RevenueCat + RevenueCatUI (SPM) already linked"
echo " Left sidebar: BLUE folder out + Package Dependencies"
echo " Then: Signing → Team → ▶ Run"
echo " (First open may take a minute while Xcode resolves packages.)"
echo "========================================"
echo ""
