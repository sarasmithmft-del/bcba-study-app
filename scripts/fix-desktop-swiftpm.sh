#!/usr/bin/env bash
# Fix: Xcode error "The file “swiftpm” doesn’t exist" / package graph fatalError
# when resolving RevenueCat (purchases-ios-spm).
#
# Creates the missing Package.resolved folder on the Desktop project and
# optionally seeds Package.resolved from this repo. Does NOT delete Desktop.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DESKTOP="${HOME}/Desktop/BCBA Study Workbook"
PROJ="${DESKTOP}/BCBA Study Workbook.xcodeproj"
SWIFTPM="${PROJ}/project.xcworkspace/xcshareddata/swiftpm"
SRC_RESOLVED="${ROOT}/BCBA Study Workbook/BCBA Study Workbook.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved"

if [[ ! -d "${PROJ}" ]]; then
  echo "ERROR: Desktop Xcode project not found at:"
  echo "  ${PROJ}"
  exit 1
fi

echo "Creating: ${SWIFTPM}"
mkdir -p "${SWIFTPM}"

if [[ -f "${SRC_RESOLVED}" ]]; then
  if [[ ! -f "${SWIFTPM}/Package.resolved" ]]; then
    cp "${SRC_RESOLVED}" "${SWIFTPM}/Package.resolved"
    echo "Seeded Package.resolved (5.83.1)"
  else
    echo "Package.resolved already present — leaving it"
  fi
fi

echo
echo "Next (Mac Terminal — quit Xcode first with Cmd-Q):"
echo "  defaults write com.apple.dt.Xcode IDEPackageSupportUseBuiltinSCM -bool YES"
echo "  rm -rf ~/Library/Caches/org.swift.swiftpm"
echo "  rm -rf ~/Library/Developer/Xcode/DerivedData/BCBA_Study_Workbook-*"
echo
echo "Then reopen the Desktop .xcodeproj and use:"
echo "  File → Packages → Resolve Package Versions"
echo
echo "Do NOT File → Add Package again — RevenueCat is already in project.pbxproj."
echo "Done."
