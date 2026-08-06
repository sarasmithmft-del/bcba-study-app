#!/usr/bin/env bash
# Double-click on your Mac (or run from Terminal).
# Fixes local git conflicts, pulls the Xcode branch, builds, and opens
# ~/Desktop/BCBA Study Workbook with the blue "out" folder already included.

cd "$(dirname "$0")"
chmod +x scripts/mac-resume-and-open-swiftui.sh 2>/dev/null || true
bash scripts/mac-resume-and-open-swiftui.sh
STATUS=$?
echo ""
echo "Press Enter to close this window…"
read -r _
exit "${STATUS}"
