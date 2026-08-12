#!/usr/bin/env bash
# Run Archive from Terminal and print the real errors (Xcode Organizer only
# opens after a SUCCESSFUL archive).
#
# Usage (Mac):
#   ./scripts/archive-and-show-errors.sh
#
# Log is also written to ~/Desktop/BCBA-ARCHIVE-LOG.txt

set -euo pipefail

PROJ="${HOME}/Desktop/BCBA Study Workbook/BCBA Study Workbook.xcodeproj"
SCHEME="BCBA Study Workbook"
LOG="${HOME}/Desktop/BCBA-ARCHIVE-LOG.txt"
ARCHIVE_PATH="${HOME}/Library/Developer/Xcode/Archives/BCBA-Study-Workbook-$(date +%Y%m%d-%H%M%S).xcarchive"

if [[ ! -d "${PROJ}" ]]; then
  echo "ERROR: Project not found:"
  echo "  ${PROJ}"
  exit 1
fi

echo "Project: ${PROJ}"
echo "Scheme:  ${SCHEME}"
echo "Log:     ${LOG}"
echo ""
echo "Resolving packages…"
xcodebuild -project "${PROJ}" -scheme "${SCHEME}" -resolvePackageDependencies 2>&1 | tee "${LOG}"

echo ""
echo "Archiving (this can take several minutes)…"
set +e
xcodebuild \
  -project "${PROJ}" \
  -scheme "${SCHEME}" \
  -configuration Release \
  -destination "generic/platform=iOS" \
  -archivePath "${ARCHIVE_PATH}" \
  clean archive \
  CODE_SIGN_STYLE=Automatic \
  2>&1 | tee -a "${LOG}"
STATUS=$?
set -e

echo ""
echo "========================================"
echo " Exit code: ${STATUS}"
echo " Full log:  ${LOG}"
echo "========================================"
echo ""
echo "--- Likely errors (filtered) ---"
rg -n "error:|❌|No profiles|Provisioning|CodeSign|Signing|ARCHIVE FAILED|does not support|No such module|AppIcon|Communication with Apple" "${LOG}" | tail -80 || true
echo ""
if [[ ${STATUS} -eq 0 ]]; then
  echo "SUCCESS. Open Organizer: Xcode → Window → Organizer"
  echo "Archive path: ${ARCHIVE_PATH}"
else
  echo "FAILED. Copy the filtered lines above (or the red errors) and paste them in chat."
fi
exit "${STATUS}"
