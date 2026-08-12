#!/usr/bin/env bash
# NON-DESTRUCTIVE: copy RootView/paywall Swift sources into Desktop Xcode project.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${ROOT}/BCBA Study Workbook"
DEST="${HOME}/Desktop/BCBA Study Workbook"
for f in ContentView.swift BCBAStudyWorkbookApp.swift WebView.swift; do
  if [[ -f "${SRC}/${f}" ]]; then
    cp "${SRC}/${f}" "${DEST}/${f}"
    echo "Updated ${DEST}/${f}"
  fi
done
echo "Done. In Xcode: Product → Clean Build Folder, then rebuild / Archive again."
