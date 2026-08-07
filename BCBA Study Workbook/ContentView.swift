import SwiftUI
import RevenueCat
import RevenueCatUI

/// Gates the workbook behind any active RevenueCat entitlement.
/// Unsubscribed → PaywallView · Subscribed → workbook WebView.
struct RootView: View {
    @State private var customerInfo: CustomerInfo?
    @State private var showCustomerCenter = false
    @State private var loadError: String?

    private var isSubscribed: Bool {
        guard let info = customerInfo else { return false }
        // Unlock on ANY active entitlement (single Pro tier).
        return !info.entitlements.active.isEmpty
    }

    var body: some View {
        Group {
            if let loadError {
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
                }
                .padding()
            } else if customerInfo == nil {
                ProgressView("Loading…")
                    .tint(.white)
            } else if isSubscribed {
                ContentView(onOpenSubscription: { showCustomerCenter = true })
            } else {
                PaywallView()
            }
        }
        .task {
            await listenForCustomerInfo()
        }
        .sheet(isPresented: $showCustomerCenter) {
            CustomerCenterView()
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
