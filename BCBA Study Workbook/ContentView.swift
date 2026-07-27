import SwiftUI

struct ContentView: View {
    var body: some View {
        WebView(url: Self.workbookURL, resourceRoot: Self.resourceRoot)
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

    /// Loads the built Next.js site from the app bundle (`out/` copied into Resources),
    /// or falls back to the local dev server when running from Xcode without bundled HTML.
    private static var workbookURL: URL {
        if resourceRoot != nil {
            return URL(string: "bcba-workbook://localhost/")!
        }
        // Dev fallback — run `npm run dev` on the Mac first.
        return URL(string: "http://127.0.0.1:3333/")!
    }
}

#Preview {
    ContentView()
}
