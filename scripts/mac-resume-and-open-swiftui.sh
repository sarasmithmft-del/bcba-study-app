#!/usr/bin/env bash
# Recover from local git conflicts (e.g. package-lock.json), switch to the
# Xcode branch, sync the SwiftUI project to Desktop, and open it.
#
# Paste on Mac:
#   cd ~/Desktop/"bcba study app" && bash scripts/mac-resume-and-open-swiftui.sh
#
# Or clone fresh if that folder is a mess — see bottom of this file's comments.

set -u

LOG="${HOME}/Desktop/BCBA-XCODE-LOG.txt"
REPO_URL="${BCBA_REPO_URL:-https://github.com/sarasmithmft-del/bcba-study-app.git}"
BRANCH="${BCBA_BRANCH:-cursor/local-xcode-build-8982}"

mkdir -p "${HOME}/Desktop"
{
  echo "BCBA Study Workbook — Mac resume log"
  echo "Started: $(date)"
  echo "User: $(whoami)"
  echo "Branch: ${BRANCH}"
  echo "----------------------------------------"
} >"${LOG}"

log() { echo "$1" | tee -a "${LOG}"; }
fail() {
  log ""
  log "FAILED: $1"
  log "Full log: ${LOG}"
  exit 1
}

# Find project root
if [[ -f package.json && -d .git ]]; then
  ROOT="$(pwd)"
elif [[ -f "${HOME}/Desktop/bcba study app/package.json" ]]; then
  ROOT="${HOME}/Desktop/bcba study app"
elif [[ -f "${HOME}/Desktop/TEST/package.json" ]]; then
  ROOT="${HOME}/Desktop/TEST"
else
  ROOT="${HOME}/Desktop/bcba study app"
  log "==> No project found — cloning ${BRANCH} → ${ROOT}"
  if [[ -e "${ROOT}" && ! -d "${ROOT}/.git" ]]; then
    fail "${ROOT} exists but is not a git repo. Rename/move it, then re-run."
  fi
  if [[ ! -d "${ROOT}/.git" ]]; then
    git clone --branch "${BRANCH}" "${REPO_URL}" "${ROOT}" >>"${LOG}" 2>&1 \
      || fail "git clone failed"
  fi
fi

cd "${ROOT}" || fail "Could not enter ${ROOT}"
log "Working directory: $(pwd)"

command -v git >/dev/null 2>&1 || fail "git not found"
command -v npm >/dev/null 2>&1 || fail "npm/Node not found — install from https://nodejs.org"

log "==> Saving any local edits (stash) so checkout can proceed…"
# Stash everything that would block checkout, including untracked helpers.
git stash push -u -m "bcba-mac-resume-$(date +%Y%m%d-%H%M%S)" >>"${LOG}" 2>&1 \
  || log "(nothing to stash — ok)"

log "==> Fetch + checkout ${BRANCH}…"
git fetch origin >>"${LOG}" 2>&1 || fail "git fetch failed"
if git rev-parse --verify "origin/${BRANCH}" >/dev/null 2>&1; then
  git checkout -f "${BRANCH}" >>"${LOG}" 2>&1 \
    || git checkout -B "${BRANCH}" "origin/${BRANCH}" >>"${LOG}" 2>&1 \
    || fail "git checkout ${BRANCH} failed — see log"
  git reset --hard "origin/${BRANCH}" >>"${LOG}" 2>&1 || fail "git reset --hard failed"
  git pull --ff-only origin "${BRANCH}" >>"${LOG}" 2>&1 || log "(pull warning — continuing)"
else
  fail "Branch origin/${BRANCH} not found. Check GitHub / network."
fi

log "Now on: $(git rev-parse --abbrev-ref HEAD) @ $(git rev-parse --short HEAD)"

chmod +x scripts/*.sh CONTINUE-ON-MAC.command \
  "BCBA Study Workbook/OPEN-IN-XCODE.command" \
  RUN-ON-SIMULATOR.command OPEN-XCODE.command 2>/dev/null || true

[[ -f scripts/sync-swiftui-xcode-to-desktop.sh ]] \
  || fail "sync-swiftui-xcode-to-desktop.sh missing after checkout — wrong branch?"

log "==> Building site + copying ready Xcode project to Desktop…"
bash scripts/sync-swiftui-xcode-to-desktop.sh >>"${LOG}" 2>&1 \
  || fail "sync-swiftui-xcode-to-desktop.sh failed — see log"

log ""
log "SUCCESS"
log "Xcode should be open on ~/Desktop/BCBA Study Workbook"
log "Left sidebar: look for BLUE folder named out"
log "Then: Signing → Team → ▶ Run"
log "Log: ${LOG}"
open -R "${LOG}" 2>/dev/null || true

echo ""
echo "========================================"
echo " Done. Xcode should be open."
echo " Log: ~/Desktop/BCBA-XCODE-LOG.txt"
echo "========================================"
echo ""
