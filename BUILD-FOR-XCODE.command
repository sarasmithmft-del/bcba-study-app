#!/usr/bin/env bash
# Double-click on your Mac to rebuild the app (with Vocabulary quiz) and open Xcode.
cd "$(dirname "$0")"
chmod +x scripts/mac-build-vocab-for-xcode.sh 2>/dev/null || true
bash scripts/mac-build-vocab-for-xcode.sh
STATUS=$?
echo ""
echo "Press Enter to close this window…"
read -r _
exit "${STATUS}"
