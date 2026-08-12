#!/usr/bin/env bash
# NON-DESTRUCTIVE: copy Assets.xcassets (App Icon) into the Desktop Xcode project.
# Does not delete the Desktop project or wipe SPM packages.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${ROOT}/BCBA Study Workbook/Assets.xcassets"
DEST="${HOME}/Desktop/BCBA Study Workbook"

if [[ ! -d "${SRC}" ]]; then
  echo "ERROR: missing ${SRC}"
  exit 1
fi
if [[ ! -d "${DEST}/BCBA Study Workbook.xcodeproj" ]]; then
  echo "ERROR: Desktop project not found at ${DEST}"
  exit 1
fi

echo "Copying Assets.xcassets → ${DEST}/"
rm -rf "${DEST}/Assets.xcassets"
cp -a "${SRC}" "${DEST}/Assets.xcassets"
echo "Done."
echo "If Assets is not in the Xcode left sidebar yet:"
echo "  Finder → drag Assets.xcassets into the BCBA Study Workbook group"
echo "  Uncheck Copy items · check target BCBA Study Workbook → Finish"
echo "Then: General → App Icon → AppIcon"
