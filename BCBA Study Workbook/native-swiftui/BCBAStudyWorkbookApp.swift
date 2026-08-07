import SwiftUI
import RevenueCat

/// SwiftUI entry point for BCBA Study Workbook.
/// Bundle Identifier: `com.euphoria.bcbaworkbook`
///
/// Requires SPM packages (add in Xcode → File → Add Package Dependencies):
///   https://github.com/RevenueCat/purchases-ios-spm.git
///   → products: **RevenueCat** + **RevenueCatUI**
@main
struct BCBAStudyWorkbookApp: App {
    init() {
        #if DEBUG
        Purchases.logLevel = .debug
        #endif
        // TEST key for Simulator / sandbox. Swap to `appl_…` before App Store submit.
        Purchases.configure(withAPIKey: "test_YQNTLAoyxXeLlBWjvWjhQUrKybo")
    }

    var body: some Scene {
        WindowGroup {
            RootView()
                .preferredColorScheme(.dark)
        }
    }
}
