#!/usr/bin/env bash
# Opens BCBA Study Workbook in Xcode on your Mac.
# Double-click OPEN-XCODE.command (or run this script from Terminal).
#
# This prepares the website, syncs it into the iOS project, then launches Xcode.
# You still need to pick your Team and press ▶ Run once inside Xcode.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo ""
echo "========================================"
echo "  BCBA Study Workbook → Xcode"
echo "========================================"
echo "Folder: $ROOT"
echo ""

if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: Node/npm not found."
  echo "Install from https://nodejs.org (LTS), then double-click OPEN-XCODE.command again."
  exit 1
fi

if [[ ! -d "ios/App/App.xcodeproj" ]]; then
  echo "ERROR: ios/App/App.xcodeproj is missing."
  echo "On this Mac run once:"
  echo "  npm install && npm run build && npx cap add ios && npx cap sync ios"
  exit 1
fi

# Prefer the latest iOS-clean / fix branch when present.
BRANCH="${BCBA_BRANCH:-}"
if [[ -z "$BRANCH" ]]; then
  if git rev-parse --verify origin/cursor/ios-clean-test-folder-1314 >/dev/null 2>&1; then
    BRANCH="cursor/ios-clean-test-folder-1314"
  elif git rev-parse --verify origin/cursor/fix-bcba-study-workbook-1314 >/dev/null 2>&1; then
    BRANCH="cursor/fix-bcba-study-workbook-1314"
  else
    BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)"
  fi
fi

if [[ -d .git ]]; then
  echo "==> Updating git ($BRANCH)…"
  git fetch origin || true
  if git rev-parse --verify "origin/$BRANCH" >/dev/null 2>&1; then
    git checkout "$BRANCH" 2>/dev/null || git checkout -b "$BRANCH" "origin/$BRANCH"
    git pull --ff-only origin "$BRANCH" || true
  fi
fi

echo "==> npm install…"
npm install

echo "==> Building website (out/)…"
npm run build

if [[ ! -d out ]]; then
  echo "ERROR: out/ missing after build."
  exit 1
fi

echo "==> Syncing website into iOS (Capacitor)…"
npx cap sync ios

echo ""
echo "==> Opening Xcode…"
open "ios/App/App.xcodeproj"

echo ""
echo "========================================"
echo "  In Xcode, do ONLY these 3 things:"
echo "========================================"
echo "  1. Left sidebar → blue App project → App target"
echo "     Signing & Capabilities → Team → your name/Apple ID"
echo "     Bundle ID: com.euphoria.bcbaworkbook"
echo ""
echo "  2. Top bar device menu → iPhone 16 Pro (or any iPhone simulator)"
echo ""
echo "  3. Press the ▶ Play button (or Cmd+R)"
echo ""
echo "Full picture guide: apple-handoff/FOR_SARA_OPEN_XCODE.md"
echo "========================================"
echo ""
