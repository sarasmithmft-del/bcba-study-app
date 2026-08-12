import SwiftUI
import RevenueCat
import RevenueCatUI

/// Gates the workbook behind any active RevenueCat entitlement.
/// Unsubscribed → PaywallView · Subscribed → workbook WebView.
/// App Review can unlock with code `APPREVIEWBCBASARA` (no purchase needed).
struct RootView: View {
    private static let reviewUnlockCode = "APPREVIEWBCBASARA"
    private static let reviewUnlockKey = "bcba.reviewUnlock"

    @State private var customerInfo: CustomerInfo?
    @State private var showCustomerCenter = false
    @State private var loadError: String?
    @State private var reviewUnlocked = UserDefaults.standard.bool(forKey: RootView.reviewUnlockKey)
    @State private var showReviewEntry = false
    @State private var reviewCodeInput = ""
    @State private var reviewCodeMessage: String?

    private var isSubscribed: Bool {
        if reviewUnlocked { return true }
        guard let info = customerInfo else { return false }
        // Unlock on ANY active entitlement (single Pro tier).
        return !info.entitlements.active.isEmpty
    }

    var body: some View {
        Group {
            if let loadError, !reviewUnlocked {
                VStack(spacing: 16) {
                    Text("Couldn’t load subscription status")
                        .font(.headline)
                    Text(loadError)
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                        .multilineTextAlignment(.center)
                    Button("Retry") {
                        self.loadError = nil
                        Task { await refreshCustomerInfo() }
                    }
                    .buttonStyle(.borderedProminent)
                    reviewAccessControls
                }
                .padding()
            } else if customerInfo == nil && !reviewUnlocked {
                ProgressView("Loading…")
                    .tint(.white)
            } else if isSubscribed {
                ContentView(onOpenSubscription: { showCustomerCenter = true })
            } else {
                ZStack(alignment: .bottom) {
                    PaywallView()
                    reviewAccessControls
                        .padding()
                        .padding(.bottom, 8)
                }
            }
        }
        .task {
            await listenForCustomerInfo()
        }
        .sheet(isPresented: $showCustomerCenter) {
            CustomerCenterView()
        }
        .alert("App Review Access", isPresented: $showReviewEntry) {
            TextField("Access code", text: $reviewCodeInput)
                .textInputAutocapitalization(.characters)
                .autocorrectionDisabled()
            Button("Unlock") { applyReviewCode() }
            Button("Cancel", role: .cancel) {
                reviewCodeInput = ""
                reviewCodeMessage = nil
            }
        } message: {
            Text(reviewCodeMessage ?? "Enter the App Review access code.")
        }
    }

    private var reviewAccessControls: some View {
        Button("App Review access") {
            reviewCodeInput = ""
            reviewCodeMessage = nil
            showReviewEntry = true
        }
        .font(.footnote.weight(.semibold))
        .foregroundStyle(.white.opacity(0.85))
        .buttonStyle(.plain)
        .padding(.horizontal, 14)
        .padding(.vertical, 8)
        .background(Color.black.opacity(0.45), in: Capsule())
    }

    private func applyReviewCode() {
        let trimmed = reviewCodeInput.trimmingCharacters(in: .whitespacesAndNewlines)
        if trimmed.caseInsensitiveCompare(Self.reviewUnlockCode) == .orderedSame {
            UserDefaults.standard.set(true, forKey: Self.reviewUnlockKey)
            reviewUnlocked = true
            reviewCodeInput = ""
            reviewCodeMessage = nil
            showReviewEntry = false
        } else {
            reviewCodeMessage = "That code wasn’t recognized. Try again."
            showReviewEntry = true
        }
    }

    private func listenForCustomerInfo() async {
        // First fetch so we don't flash the paywall while the stream warms up.
        await refreshCustomerInfo()
        for await info in Purchases.shared.customerInfoStream {
            customerInfo = info
            loadError = nil
        }
    }

    private func refreshCustomerInfo() async {
        do {
            customerInfo = try await Purchases.shared.customerInfo()
            loadError = nil
        } catch {
            loadError = error.localizedDescription
        }
    }
}

struct ContentView: View {
    var onOpenSubscription: (() -> Void)?

    var body: some View {
        WebView(
            url: Self.workbookURL,
            resourceRoot: Self.resourceRoot,
            onOpenSubscription: onOpenSubscription
        )
        .ignoresSafeArea()
        .preferredColorScheme(.dark)
    }

    /// Directory containing the built site (`out/`), when present in the app bundle.
    private static var resourceRoot: URL? {
        if let index = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "out") {
            return index.deletingLastPathComponent()
        }
        if let index = Bundle.main.url(forResource: "index", withExtension: "html") {
            return index.deletingLastPathComponent()
        }
        return nil
    }

    /// Loads the built Next.js site from the app bundle (`out/`),
    /// or falls back to the local dev server when running without bundled HTML.
    private static var workbookURL: URL {
        if resourceRoot != nil {
            return URL(string: "bcba-workbook://localhost/")!
        }
        return URL(string: "http://127.0.0.1:3333/")!
    }
}

#Preview {
    ContentView()
}
