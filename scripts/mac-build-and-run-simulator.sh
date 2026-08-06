#!/usr/bin/env bash
# Build BCBA Study Workbook for the iOS Simulator and launch it.
# Run on macOS with Xcode installed. Does NOT require clicking ▶ Run in Xcode
# when simulator signing succeeds.
#
# Usage:
#   ./scripts/mac-build-and-run-simulator.sh
#   BCBA_SIMULATOR="iPhone 16" ./scripts/mac-build-and-run-simulator.sh
#
# Falls back to opening Xcode if the command-line build/launch fails.

set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

LOG="${HOME}/Desktop/BCBA-XCODE-LOG.txt"
BUNDLE_ID="com.euphoria.bcbaworkbook"
PROJECT="ios/App/App.xcodeproj"
SCHEME="App"
DERIVED="${ROOT}/build/DerivedData"
SIMULATOR_NAME="${BCBA_SIMULATOR:-}"
OPEN_XCODE_FALLBACK="${BCBA_OPEN_XCODE_FALLBACK:-1}"

mkdir -p "${HOME}/Desktop"
{
  echo "BCBA Study Workbook — local Xcode / Simulator build"
  echo "Started: $(date)"
  echo "Folder: ${ROOT}"
  echo "User: $(whoami)"
  echo "Mac: $(sw_vers 2>/dev/null | tr '\n' ' ' || uname -a)"
  echo "----------------------------------------"
} >"${LOG}"

log() { echo "$1" | tee -a "${LOG}"; }
fail() {
  log ""
  log "FAILED: $1"
  log "Full log: ${LOG}"
  if [[ "${OPEN_XCODE_FALLBACK}" == "1" && -d "${PROJECT}" ]]; then
    log "Opening Xcode so you can set Team and press ▶ Run…"
    open "${PROJECT}" 2>/dev/null || true
  fi
  exit 1
}

require_mac() {
  [[ "$(uname -s)" == "Darwin" ]] || fail "This script must run on a Mac (found $(uname -s))."
}

pick_simulator() {
  if [[ -n "${SIMULATOR_NAME}" ]]; then
    echo "${SIMULATOR_NAME}"
    return
  fi
  # Prefer common devices; fall back to any available iPhone simulator.
  local candidates=("iPhone 16 Pro" "iPhone 16" "iPhone 15 Pro" "iPhone 15" "iPhone 14 Pro")
  local available
  available="$(xcrun simctl list devices available 2>/dev/null || true)"
  local name
  for name in "${candidates[@]}"; do
    if echo "${available}" | grep -q "${name}"; then
      echo "${name}"
      return
    fi
  done
  echo "${available}" | awk -F'[()]' '/iPhone/{gsub(/^[[:space:]]+/,"",$1); print $1; exit}'
}

require_mac

log "==> Checking tools…"
command -v npm >/dev/null 2>&1 || fail "npm/Node not found. Install Node LTS from https://nodejs.org"
command -v xcodebuild >/dev/null 2>&1 || fail "Xcode not found. Install from Mac App Store, open once, accept license."
command -v xcrun >/dev/null 2>&1 || fail "xcrun missing — install Xcode Command Line Tools."
[[ -d "${PROJECT}" ]] || fail "${PROJECT} missing. Run from the repo root."

log "node: $(node --version 2>&1)"
log "npm: $(npm --version 2>&1)"
log "xcodebuild: $(xcodebuild -version 2>&1 | tr '\n' ' ')"

chmod +x OPEN-XCODE.command scripts/*.sh RUN-ON-SIMULATOR.command 2>/dev/null || true

log "==> npm install…"
npm install >>"${LOG}" 2>&1 || fail "npm install failed — see log."

log "==> npm run build (produces out/)…"
npm run build >>"${LOG}" 2>&1 || fail "npm run build failed — see log."
[[ -d out ]] || fail "out/ missing after build."

log "==> npx cap sync ios…"
npx cap sync ios >>"${LOG}" 2>&1 || fail "cap sync ios failed — see log."
[[ -d ios/App/App/public ]] || fail "ios/App/App/public missing after sync."
[[ -f ios/App/App/public/index.html ]] || fail "ios/App/App/public/index.html missing after sync."

SIMULATOR_NAME="$(pick_simulator)"
[[ -n "${SIMULATOR_NAME}" ]] || fail "No iPhone Simulator found. Xcode → Settings → Platforms → download iOS Simulator."
log "==> Simulator device: ${SIMULATOR_NAME}"

DESTINATION="platform=iOS Simulator,name=${SIMULATOR_NAME}"
log "==> xcodebuild (Simulator)…"
# Simulator builds typically do not need a paid team. Disable code signing for the sim build.
set +e
xcodebuild \
  -project "${PROJECT}" \
  -scheme "${SCHEME}" \
  -configuration Debug \
  -destination "${DESTINATION}" \
  -derivedDataPath "${DERIVED}" \
  CODE_SIGNING_ALLOWED=NO \
  CODE_SIGNING_REQUIRED=NO \
  CODE_SIGN_IDENTITY=- \
  build >>"${LOG}" 2>&1
BUILD_STATUS=$?
set -e

if [[ ${BUILD_STATUS} -ne 0 ]]; then
  log "First build attempt failed — retrying with default signing…"
  set +e
  xcodebuild \
    -project "${PROJECT}" \
    -scheme "${SCHEME}" \
    -configuration Debug \
    -destination "${DESTINATION}" \
    -derivedDataPath "${DERIVED}" \
    build >>"${LOG}" 2>&1
  BUILD_STATUS=$?
  set -e
fi

[[ ${BUILD_STATUS} -eq 0 ]] || fail "xcodebuild failed. Open the log, or set Team in Xcode and press ▶ Run."

APP_PATH="$(find "${DERIVED}/Build/Products" -path '*Debug-iphonesimulator/*.app' -maxdepth 3 -type d 2>/dev/null | head -n 1 || true)"
[[ -n "${APP_PATH}" && -d "${APP_PATH}" ]] || fail "Built .app not found under ${DERIVED}/Build/Products"

log "==> Built app: ${APP_PATH}"

log "==> Booting Simulator…"
# Resolve UDID for the chosen device name (first available match).
UDID="$(xcrun simctl list devices available \
  | grep -F "${SIMULATOR_NAME}" \
  | grep -oE '\([A-F0-9-]{36}\)' \
  | head -n 1 \
  | tr -d '()')"

if [[ -z "${UDID}" ]]; then
  # Fallback: boot by name
  xcrun simctl boot "${SIMULATOR_NAME}" >>"${LOG}" 2>&1 || true
else
  xcrun simctl boot "${UDID}" >>"${LOG}" 2>&1 || true
fi
open -a Simulator >>"${LOG}" 2>&1 || true

# Wait until a simulator is booted
for _ in {1..60}; do
  BOOTED="$(xcrun simctl list devices | awk -F'[()]' '/\(Booted\)/{print $2; exit}')"
  [[ -n "${BOOTED}" ]] && break
  sleep 1
done
BOOTED="$(xcrun simctl list devices | awk -F'[()]' '/\(Booted\)/{print $2; exit}')"
[[ -n "${BOOTED}" ]] || fail "Simulator did not boot. Open Simulator.app manually, then re-run."

log "==> Installing ${BUNDLE_ID} on Simulator (${BOOTED})…"
xcrun simctl install "${BOOTED}" "${APP_PATH}" >>"${LOG}" 2>&1 \
  || fail "simctl install failed — see log."

log "==> Launching app…"
xcrun simctl launch "${BOOTED}" "${BUNDLE_ID}" >>"${LOG}" 2>&1 \
  || fail "simctl launch failed — see log."

log ""
log "SUCCESS — BCBA Study Workbook should be open in the iOS Simulator."
log "Bundle ID: ${BUNDLE_ID}"
log "Log file: ${LOG}"
log ""

echo ""
echo "========================================"
echo " App launched in Simulator"
echo " Log: ~/Desktop/BCBA-XCODE-LOG.txt"
echo "========================================"
echo ""
