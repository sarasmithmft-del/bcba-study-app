#!/usr/bin/env bash
# Double-click on your Mac to BUILD and LAUNCH the app in the iOS Simulator.
# Prefer this over OPEN-XCODE.command when you want the phone app without clicking ▶ Run.

cd "$(dirname "$0")"
chmod +x scripts/mac-build-and-run-simulator.sh 2>/dev/null || true
./scripts/mac-build-and-run-simulator.sh
STATUS=$?
echo ""
echo "Press Enter to close this window…"
read -r _
exit "${STATUS}"
