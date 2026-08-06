#!/usr/bin/env bash
# One-shot Mac helper for Sara:
# - finds or clones the project
# - installs, builds, syncs Capacitor
# - opens Xcode
# - writes a log to ~/Desktop/BCBA-XCODE-LOG.txt
#
# Usage (paste in Terminal on Mac):
#   curl -fsSL raw... OR clone then:
#   bash scripts/mac-fix-and-open-xcode.sh

set -u

LOG="${HOME}/Desktop/BCBA-XCODE-LOG.txt"
REPO_URL="${BCBA_REPO_URL:-https://github.com/sarasmithmft-del/bcba-study-app.git}"
BRANCH="${BCBA_BRANCH:-cursor/local-xcode-build-8982}"
DEST=""

mkdir -p "${HOME}/Desktop"
{
  echo "BCBA Study Workbook — Xcode fix log"
  echo "Started: $(date)"
  echo "User: $(whoami)"
  echo "Mac: $(sw_vers 2>/dev/null | tr '\n' ' ' || uname -a)"
  echo "Branch target: ${BRANCH}"
  echo "----------------------------------------"
} >"${LOG}"

log() { echo "$1" | tee -a "${LOG}"; }
fail() {
  log ""
  log "FAILED: $1"
  log "Full log saved to: ${LOG}"
  log "Copy/paste that file (or this Terminal text) back to Cursor."
  exit 1
}

log "==> Checking tools…"
command -v git >/dev/null 2>&1 || fail "git not found. Install Xcode Command Line Tools: xcode-select --install"
command -v npm >/dev/null 2>&1 || fail "npm/Node not found. Install Node LTS from https://nodejs.org then run this again."
if ! command -v xcodebuild >/dev/null 2>&1; then
  fail "Xcode not found. Install Xcode from the Mac App Store, open it once, then run this again."
fi
log "git: $(git --version)"
log "node: $(node --version 2>&1)"
log "npm: $(npm --version 2>&1)"
log "xcodebuild: $(xcodebuild -version 2>&1 | tr '\n' ' ')"

# Prefer existing folders, else clone
CANDIDATES=(
  "${HOME}/Desktop/bcba study app"
  "${HOME}/Desktop/TEST"
  "${HOME}/Desktop/BCBA"
  "${HOME}/Desktop/bcba-study-app"
)

for c in "${CANDIDATES[@]}"; do
  if [[ -f "${c}/package.json" && -d "${c}/ios/App/App.xcodeproj" ]]; then
    DEST="$c"
    break
  fi
done

if [[ -z "${DEST}" ]]; then
  DEST="${HOME}/Desktop/bcba study app"
  log "==> Project not found. Cloning into: ${DEST}"
  if [[ -e "${DEST}" ]]; then
    fail "${DEST} exists but is not a valid project. Rename/move that folder, then run again."
  fi
  git clone --branch "${BRANCH}" "${REPO_URL}" "${DEST}" >>"${LOG}" 2>&1 \
    || git clone "${REPO_URL}" "${DEST}" >>"${LOG}" 2>&1 \
    || fail "git clone failed (sign in to GitHub if asked, then retry)."
else
  log "==> Using existing project: ${DEST}"
fi

cd "${DEST}" || fail "Could not enter ${DEST}"
log "Working directory: $(pwd)"

if [[ -d .git ]]; then
  log "==> Updating git → ${BRANCH}"
  git fetch origin >>"${LOG}" 2>&1 || log "(fetch warning — continuing)"
  if git rev-parse --verify "origin/${BRANCH}" >/dev/null 2>&1; then
    git checkout "${BRANCH}" >>"${LOG}" 2>&1 \
      || git checkout -B "${BRANCH}" "origin/${BRANCH}" >>"${LOG}" 2>&1 \
      || log "(checkout warning — continuing on $(git rev-parse --abbrev-ref HEAD))"
    git pull --ff-only origin "${BRANCH}" >>"${LOG}" 2>&1 || log "(pull warning — continuing)"
  else
    log "(branch ${BRANCH} not on remote — staying on $(git rev-parse --abbrev-ref HEAD 2>/dev/null))"
  fi
  log "Current commit: $(git rev-parse --short HEAD 2>/dev/null) ($(git rev-parse --abbrev-ref HEAD 2>/dev/null))"
fi

chmod +x OPEN-XCODE.command scripts/*.sh 2>/dev/null || true

log "==> npm install…"
npm install >>"${LOG}" 2>&1 || fail "npm install failed — see log."

log "==> npm run build…"
npm run build >>"${LOG}" 2>&1 || fail "npm run build failed — see log."
[[ -d out ]] || fail "Build finished but out/ folder is missing."

log "==> npx cap sync ios…"
npx cap sync ios >>"${LOG}" 2>&1 || fail "cap sync ios failed — see log."
[[ -d ios/App/App/public ]] || fail "After sync, ios/App/App/public is missing."

# Prefer automatic Simulator launch (no ▶ Run). Falls back to opening Xcode.
if [[ -x "${DEST}/scripts/mac-build-and-run-simulator.sh" ]] || [[ -f "${DEST}/scripts/mac-build-and-run-simulator.sh" ]]; then
  log "==> Building + launching iOS Simulator (no ▶ Run needed)…"
  chmod +x "${DEST}/scripts/mac-build-and-run-simulator.sh" 2>/dev/null || true
  # Avoid nested log overwrite: child script rewrites the same Desktop log.
  if BCBA_OPEN_XCODE_FALLBACK=1 bash "${DEST}/scripts/mac-build-and-run-simulator.sh"; then
    log ""
    log "SUCCESS — app should be open in the iOS Simulator."
    log "Log file: ${LOG}"
    open -R "${LOG}" 2>/dev/null || true
    echo ""
    echo "========================================"
    echo " App launched in Simulator"
    echo " Log: ~/Desktop/BCBA-XCODE-LOG.txt"
    echo "========================================"
    echo ""
    exit 0
  fi
  log "Automatic Simulator launch failed — opening Xcode for manual ▶ Run…"
fi

log "==> Opening Xcode…"
open "${DEST}/ios/App/App.xcodeproj" || fail "Could not open Xcode project."

log ""
log "Xcode should be open. Do these 3 things:"
log "  1. Left sidebar → blue App → Signing & Capabilities → Team = your Apple ID"
log "     Bundle ID must be: com.euphoria.bcbaworkbook"
log "  2. Top bar → pick iPhone 16 Pro (or any iPhone simulator)"
log "  3. Press ▶ Run (Cmd+R)"
log ""
log "Or double-click RUN-ON-SIMULATOR.command to try automatic launch again."
log "Log file: ${LOG}"
open -R "${LOG}" 2>/dev/null || true

echo ""
echo "========================================"
echo " Done. Log is on your Desktop:"
echo "   BCBA-XCODE-LOG.txt"
echo "========================================"
echo ""
