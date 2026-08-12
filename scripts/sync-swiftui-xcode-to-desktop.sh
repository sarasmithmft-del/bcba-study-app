#!/usr/bin/env bash
# DEPRECATED destructive full-copy sync.
# The canonical Mac project is ~/Desktop/BCBA Study Workbook (with SPM packages).
# This script NO LONGER deletes that folder.
#
# For web updates use:
#   ./scripts/sync-swiftui-out-only.sh
#
# If you truly need to recreate a missing Desktop project from the repo template,
# set FORCE_FULL_COPY=1 (still refuses if Package Dependencies / purchases-ios-spm
# already exist in the Desktop .xcodeproj).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${ROOT}/BCBA Study Workbook"
DEST="${HOME}/Desktop/BCBA Study Workbook"

echo "========================================"
echo " NOTE: Prefer non-destructive out/ sync:"
echo "   ./scripts/sync-swiftui-out-only.sh"
echo "========================================"
echo ""

if [[ "${FORCE_FULL_COPY:-}" != "1" ]]; then
  echo "Refusing full Desktop overwrite (would wipe SPM packages)."
  echo "Run:  ./scripts/sync-swiftui-out-only.sh"
  echo "Or:   FORCE_FULL_COPY=1 ./scripts/sync-swiftui-xcode-to-desktop.sh"
  exit 1
fi

if [[ -f "${DEST}/BCBA Study Workbook.xcodeproj/project.pbxproj" ]] \
  && grep -q 'purchases-ios-spm' "${DEST}/BCBA Study Workbook.xcodeproj/project.pbxproj"; then
  echo "ERROR: ${DEST} already has RevenueCat SPM wired."
  echo "Will not overwrite. Use ./scripts/sync-swiftui-out-only.sh instead."
  exit 1
fi

cd "$ROOT"
npm install
npm run build
[[ -d out ]] || { echo "ERROR: out/ missing"; exit 1; }

rm -rf "${SRC}/out"
cp -a out "${SRC}/out"

mkdir -p "${HOME}/Desktop"
rm -rf "${DEST}"
mkdir -p "${DEST}"
rsync -a --exclude native-swiftui --exclude .DS_Store "${SRC}/" "${DEST}/"
chmod +x "${DEST}/OPEN-IN-XCODE.command" 2>/dev/null || true
open "${DEST}/BCBA Study Workbook.xcodeproj"

echo "Full template copied to ${DEST} (FORCE_FULL_COPY=1)."
