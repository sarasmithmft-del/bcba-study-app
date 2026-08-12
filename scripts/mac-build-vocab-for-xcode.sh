#!/usr/bin/env bash
# Pull the Xcode branch (includes vocabulary quizzes), rebuild the website,
# sync into Capacitor + SwiftUI Desktop project, and open Xcode.
#
# Paste on Mac:
#   cd ~/Desktop/"bcba study app" && bash scripts/mac-build-vocab-for-xcode.sh

set -u

LOG="${HOME}/Desktop/BCBA-XCODE-LOG.txt"
REPO_URL="${BCBA_REPO_URL:-https://github.com/sarasmithmft-del/bcba-study-app.git}"
BRANCH="${BCBA_BRANCH:-cursor/local-xcode-build-8982}"

mkdir -p "${HOME}/Desktop"
{
  echo "BCBA Study Workbook — build vocab quiz for Xcode"
  echo "Started: $(date)"
  echo "Branch: ${BRANCH}"
  echo "----------------------------------------"
} >"${LOG}"

log() { echo "$1" | tee -a "${LOG}"; }
fail() { log ""; log "FAILED: $1"; log "Log: ${LOG}"; exit 1; }

if [[ -f package.json && -d .git ]]; then
  ROOT="$(pwd)"
elif [[ -f "${HOME}/Desktop/bcba study app/package.json" ]]; then
  ROOT="${HOME}/Desktop/bcba study app"
else
  ROOT="${HOME}/Desktop/bcba study app"
  log "==> Cloning ${BRANCH} → ${ROOT}"
  git clone --branch "${BRANCH}" "${REPO_URL}" "${ROOT}" >>"${LOG}" 2>&1 || fail "git clone failed"
fi

cd "${ROOT}" || fail "Could not enter ${ROOT}"
log "Working directory: $(pwd)"

command -v npm >/dev/null 2>&1 || fail "npm not found — install Node LTS from https://nodejs.org"
command -v git >/dev/null 2>&1 || fail "git not found"

log "==> Stash local edits + checkout ${BRANCH}…"
git stash push -u -m "bcba-xcode-vocab-$(date +%Y%m%d-%H%M%S)" >>"${LOG}" 2>&1 || true
git fetch origin >>"${LOG}" 2>&1 || fail "git fetch failed"
git checkout -f "${BRANCH}" >>"${LOG}" 2>&1 \
  || git checkout -B "${BRANCH}" "origin/${BRANCH}" >>"${LOG}" 2>&1 \
  || fail "checkout failed"
git reset --hard "origin/${BRANCH}" >>"${LOG}" 2>&1 || fail "reset failed"
log "Commit: $(git rev-parse --short HEAD)"

chmod +x scripts/*.sh *.command "BCBA Study Workbook/"*.command 2>/dev/null || true

log "==> npm install…"
npm install >>"${LOG}" 2>&1 || fail "npm install failed — see log"
# ignore allow-scripts warnings; they are normal

log "==> npm run build (includes Vocabulary quiz UI)…"
npm run build >>"${LOG}" 2>&1 || fail "npm run build failed — see log"
[[ -d out ]] || fail "out/ missing after build"

log "==> Refresh SwiftUI Desktop out/ bundle…"
rm -rf "BCBA Study Workbook/out" native-swiftui/out
cp -a out "BCBA Study Workbook/out"
cp -a out native-swiftui/out

if [[ -d ios/App/App.xcodeproj ]]; then
  log "==> npx cap sync ios…"
  npx cap sync ios >>"${LOG}" 2>&1 || fail "cap sync failed — see log"
fi

# Prefer Capacitor Xcode project (App Store path); also refresh Desktop SwiftUI copy
if [[ -f scripts/sync-swiftui-xcode-to-desktop.sh ]]; then
  log "==> Sync SwiftUI project to ~/Desktop/BCBA Study Workbook…"
  # sync script rebuilds again — call its copy/open parts via env skip? Just run it.
  # To avoid double npm install, do Desktop copy here:
  DEST="${HOME}/Desktop/BCBA Study Workbook"
  rm -rf "${DEST}"
  mkdir -p "${DEST}"
  if command -v rsync >/dev/null 2>&1; then
    rsync -a --exclude native-swiftui --exclude .DS_Store "BCBA Study Workbook/" "${DEST}/"
  else
    cp -R "BCBA Study Workbook/." "${DEST}/"
    rm -rf "${DEST}/native-swiftui"
  fi
  chmod +x "${DEST}/OPEN-IN-XCODE.command" 2>/dev/null || true
fi

log "==> Opening Xcode…"
if [[ -d ios/App/App.xcodeproj ]]; then
  open "ios/App/App.xcodeproj" || fail "Could not open Capacitor Xcode project"
  log "Opened Capacitor project: ios/App/App.xcodeproj"
elif [[ -d "${HOME}/Desktop/BCBA Study Workbook/BCBA Study Workbook.xcodeproj" ]]; then
  open "${HOME}/Desktop/BCBA Study Workbook/BCBA Study Workbook.xcodeproj" \
    || fail "Could not open SwiftUI Xcode project"
  log "Opened SwiftUI Desktop project"
else
  fail "No Xcode project found"
fi

log ""
log "SUCCESS — Xcode should be open with the rebuilt app (Vocabulary quiz included)."
log "In Xcode: Team → iPhone simulator → ▶ Run"
log "In the app: open a chapter → scroll to end of Reading, or tap Vocabulary quiz"
log "Log: ${LOG}"

echo ""
echo "========================================"
echo " Xcode opened with Vocabulary quiz build"
echo " Then: Team → ▶ Run"
echo " Log: ~/Desktop/BCBA-XCODE-LOG.txt"
echo "========================================"
echo ""
