#!/usr/bin/env bash
# Double-click this file on your Mac to open BCBA Study Workbook in Xcode.
# (Finder → this file → double-click. If macOS blocks it: right-click → Open.)

cd "$(dirname "$0")"
chmod +x scripts/open-xcode.sh 2>/dev/null || true
./scripts/open-xcode.sh
echo ""
echo "Press Enter to close this window…"
read -r _
