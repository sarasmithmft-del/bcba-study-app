#!/usr/bin/env bash
# Double-click to open the SwiftUI Xcode project (out/ already included as a blue folder).
cd "$(dirname "$0")"
open "BCBA Study Workbook.xcodeproj"
echo ""
echo "Xcode should open with a blue 'out' folder already in the project."
echo "Then: Signing → Team → pick iPhone simulator → ▶ Run"
echo ""
echo "Press Enter to close…"
read -r _
