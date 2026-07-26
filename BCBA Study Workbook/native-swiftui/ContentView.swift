import SwiftUI

struct ContentView: View {
    var body: some View {
        WebView(url: Self.workbookURL)
            .ignoresSafeArea()
            .preferredColorScheme(.dark)
    }

    /// Loads the built Next.js site from the app bundle (`out/` copied into Resources),
    /// or falls back to the local dev server when running from Xcode without bundled HTML.
    private static var workbookURL: URL {
        if let bundled = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "out") {
            return bundled
        }
        if let bundled = Bundle.main.url(forResource: "index", withExtension: "html") {
            return bundled
        }
        // Dev fallback — run `npm run dev` on the Mac first.
        return URL(string: "http://127.0.0.1:3333/")!
    }
}

#Preview {
    ContentView()
}
