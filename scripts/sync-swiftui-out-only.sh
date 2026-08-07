#!/usr/bin/env bash
# NON-DESTRUCTIVE: rebuild website HTML and copy only `out/` into the Desktop
# SwiftUI Xcode project. Does NOT delete the Desktop project or wipe SPM packages.
#
# Canonical Mac project (do not rm -rf this):
#   ~/Desktop/BCBA Study Workbook
#
# Usage (Mac):
#   ./scripts/sync-swiftui-out-only.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="${HOME}/Desktop/BCBA Study Workbook"
# Also refresh nested copy if present (git clone layout)
DEST_NESTED="${HOME}/Desktop/bcba study app/BCBA Study Workbook"

cd "$ROOT"

echo "==> npm install + build…"
npm install
npm run build
[[ -d out ]] || { echo "ERROR: out/ missing"; exit 1; }

# Keep repo template in sync too
echo "==> Refreshing repo template out/…"
rm -rf "${ROOT}/BCBA Study Workbook/out"
cp -a out "${ROOT}/BCBA Study Workbook/out"

copy_out_only() {
  local dest="$1"
  if [[ ! -d "${dest}/BCBA Study Workbook.xcodeproj" ]]; then
    echo "(skip) no Xcode project at: ${dest}"
    return 0
  fi
  echo "==> Updating out/ only → ${dest}/out"
  rm -rf "${dest}/out"
  cp -a out "${dest}/out"
  echo "    OK (Swift sources + .xcodeproj left untouched)"
}

copy_out_only "${DEST}"
copy_out_only "${DEST_NESTED}"

echo ""
echo "========================================"
echo " Web content refreshed (out/ only)."
echo " Desktop Xcode project + SPM packages preserved."
echo " In Xcode: Product → Clean Build Folder, then ▶ Run"
echo "========================================"
echo ""
