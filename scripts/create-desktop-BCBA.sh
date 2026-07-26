#!/usr/bin/env bash
# Creates ~/Desktop/BCBA with a full clone ready to launch in Xcode / browser.
set -euo pipefail
DEST="${HOME}/Desktop/BCBA"
REPO_URL="${BCBA_REPO_URL:-https://github.com/sarasmithmft-del/bcba-study-app.git}"
BRANCH="${BCBA_BRANCH:-main}"

mkdir -p "${HOME}/Desktop"
if [[ -d "${DEST}/.git" ]]; then
  git -C "${DEST}" fetch origin
  git -C "${DEST}" checkout "${BRANCH}"
  git -C "${DEST}" pull --ff-only origin "${BRANCH}" || true
elif [[ -e "${DEST}" ]]; then
  echo "ERROR: ${DEST} exists but is not a git clone. Move/rename it, then re-run."
  exit 1
else
  git clone --branch "${BRANCH}" "${REPO_URL}" "${DEST}"
fi

cd "${DEST}"
npm install
npm run build
npx cap sync ios

cat > "${DEST}/START-HERE.txt" <<'EOT'
BCBA Study Workbook

Double-click LAUNCH-ON-MAC.command
OR in Terminal:
  cd ~/Desktop/BCBA
  open ios/App/App.xcodeproj

Web: npm run dev → http://127.0.0.1:3333/
EOT

cat > "${DEST}/LAUNCH-ON-MAC.command" <<'EOT'
#!/bin/bash
cd "$(dirname "$0")"
set -e
npm install
npm run build
npx cap sync ios
open ios/App/App.xcodeproj
echo "In Xcode: Team signing → ▶ Run"
EOT
chmod +x "${DEST}/LAUNCH-ON-MAC.command"

echo ""
echo "Ready: ${DEST}"
echo "Open Xcode: open \"${DEST}/ios/App/App.xcodeproj\""
