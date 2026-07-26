import Foundation

/// BCBA Study Workbook — native identity helpers for the Capacitor iOS shell.
///
/// You do **not** need to "upload" the Next.js app through this Swift file.
/// Capacitor loads the built website from `App/public` (created by
/// `npm run build` + `npx cap sync ios`).
///
/// Open the Xcode project: `ios/App/App.xcodeproj`
/// Bundle ID: `com.euphoria.bcbaworkbook`
enum BCBAStudyApp {
    static let displayName = "BCBA Study Workbook"
    static let bundleId = "com.euphoria.bcbaworkbook"
    static let marketingVersion = "1.0"
}
