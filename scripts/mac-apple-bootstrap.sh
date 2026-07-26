#!/usr/bin/env bash
# Creates/updates ~/Desktop/bcba study app and prepares the web build for Capacitor.
# Run on macOS. Requires: git, Node/npm. Capacitor iOS add still needs Xcode + CocoaPods.

set -euo pipefail

DESKTOP_DIR="${HOME}/Desktop/bcba study app"
REPO_URL="${BCBA_REPO_URL:-https://github.com/sarasmithmft-del/bcba-study-app.git}"
BRANCH="${BCBA_BRANCH:-main}"

echo "==> Target Desktop folder: ${DESKTOP_DIR}"
mkdir -p "${HOME}/Desktop"

if [[ -d "${DESKTOP_DIR}/.git" ]]; then
  echo "==> Existing git repo found — pulling ${BRANCH}"
  git -C "${DESKTOP_DIR}" fetch origin
  git -C "${DESKTOP_DIR}" checkout "${BRANCH}"
  git -C "${DESKTOP_DIR}" pull --ff-only origin "${BRANCH}"
elif [[ -d "${DESKTOP_DIR}" ]] && [[ -f "${DESKTOP_DIR}/package.json" ]]; then
  echo "==> Folder exists with package.json but no .git — leaving files in place"
else
  if [[ -d "${DESKTOP_DIR}" ]] && [[ -z "$(ls -A "${DESKTOP_DIR}" 2>/dev/null || true)" ]]; then
    rmdir "${DESKTOP_DIR}"
  fi
  if [[ -e "${DESKTOP_DIR}" ]]; then
    echo "ERROR: ${DESKTOP_DIR} exists but is not this repo. Move/rename it, then re-run."
    exit 1
  fi
  echo "==> Cloning ${REPO_URL} → ${DESKTOP_DIR}"
  git clone --branch "${BRANCH}" "${REPO_URL}" "${DESKTOP_DIR}"
fi

cd "${DESKTOP_DIR}"
echo "==> npm install"
npm install
echo "==> npm run build (must produce out/)"
npm run build

if [[ ! -d out ]]; then
  echo "ERROR: out/ missing after build — static export failed"
  exit 1
fi

echo ""
echo "========================================"
echo " Desktop folder ready:"
echo "   ${DESKTOP_DIR}"
echo "========================================"
echo ""
echo "Next (Mac + Xcode + CocoaPods required):"
echo "  cd \"${DESKTOP_DIR}\""
echo "  npx cap add ios          # once"
echo "  npx cap sync ios"
echo "  npx cap open ios"
echo ""
echo "Then in Xcode: team signing, bundle ID com.euphoria.bcbaworkbook, iOS 16.0+"
echo "Checklist: apple-handoff/CHECKLIST.md"
echo "Cursor prompt: apple-handoff/MAC_CURSOR_PROMPT.md"
echo ""
