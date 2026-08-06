#!/usr/bin/env bash
# Builds the site, refreshes BCBA Study Workbook/out, copies the ready Xcode
# project to ~/Desktop/BCBA Study Workbook, and opens it.
# The blue "out" folder reference is already in the .xcodeproj — no drag needed.
#
# Usage (Mac):
#   ./scripts/sync-swiftui-xcode-to-desktop.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${ROOT}/BCBA Study Workbook"
DEST="${HOME}/Desktop/BCBA Study Workbook"

cd "$ROOT"

echo "==> npm install + build…"
npm install
npm run build
[[ -d out ]] || { echo "ERROR: out/ missing"; exit 1; }

echo "==> Refreshing ${SRC}/out…"
rm -rf "${SRC}/out"
cp -a out "${SRC}/out"

echo "==> Copying ready Xcode project → ${DEST}"
mkdir -p "${HOME}/Desktop"
rm -rf "${DEST}"
# Copy project pieces (skip nested native-swiftui duplicate to keep Desktop clean)
mkdir -p "${DEST}"
rsync -a \
  --exclude native-swiftui \
  --exclude .DS_Store \
  "${SRC}/" "${DEST}/"

chmod +x "${DEST}/OPEN-IN-XCODE.command" 2>/dev/null || true

echo "==> Opening Xcode…"
open "${DEST}/BCBA Study Workbook.xcodeproj"

echo ""
echo "========================================"
echo " Opened: ${DEST}/BCBA Study Workbook.xcodeproj"
echo " Left sidebar should show a BLUE folder: out"
echo " Then: Signing → Team → ▶ Run"
echo "========================================"
echo ""
