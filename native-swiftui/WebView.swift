import SwiftUI
import UniformTypeIdentifiers
import WebKit

/// Custom scheme so Next.js absolute paths (`/_next/...`, `/module/...`) resolve
/// against the bundled `out/` folder instead of the device filesystem root.
private let workbookScheme = "bcba-workbook"

/// WKWebView wrapper so SwiftUI can display the BCBA study HTML app.
struct WebView: UIViewRepresentable {
    let url: URL
    /// Directory that contains `index.html` (usually the bundled `out/` folder).
    let resourceRoot: URL?

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.preferences.javaScriptCanOpenWindowsAutomatically = true

        if let root = resourceRoot {
            let handler = WorkbookSchemeHandler(root: root)
            config.setURLSchemeHandler(handler, forURLScheme: workbookScheme)
            context.coordinator.schemeHandler = handler
        }

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.scrollView.bounces = true
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 0.07, green: 0.07, blue: 0.07, alpha: 1) // #121212
        webView.navigationDelegate = context.coordinator

        if let root = resourceRoot {
            // Serve via custom scheme so `/_next/...` and `/module/...` work.
            let start = URL(string: "\(workbookScheme)://localhost/")!
            context.coordinator.schemeHandler?.root = root
            webView.load(URLRequest(url: start))
        } else if url.isFileURL {
            // Fallback: loadFileURL (absolute `/` asset paths will still break).
            let readAccess = url.deletingLastPathComponent()
            webView.loadFileURL(url, allowingReadAccessTo: readAccess)
        } else {
            webView.load(URLRequest(url: url))
        }
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {
        // no-op
    }

    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    final class Coordinator: NSObject, WKNavigationDelegate {
        var schemeHandler: WorkbookSchemeHandler?

        func webView(
            _ webView: WKWebView,
            decidePolicyFor navigationAction: WKNavigationAction,
            decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
        ) {
            decisionHandler(.allow)
        }
    }
}

/// Maps `bcba-workbook://localhost/...` to files under the bundled `out/` directory.
final class WorkbookSchemeHandler: NSObject, WKURLSchemeHandler {
    var root: URL

    init(root: URL) {
        self.root = root
    }

    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        guard let requestURL = urlSchemeTask.request.url else {
            urlSchemeTask.didFailWithError(URLError(.badURL))
            return
        }

        var relative = requestURL.path
        if relative.isEmpty || relative == "/" {
            relative = "/index.html"
        } else if relative.hasSuffix("/") {
            relative += "index.html"
        } else {
            let last = (relative as NSString).lastPathComponent
            if !last.contains(".") {
                relative += "/index.html"
            }
        }

        // Strip leading "/" then resolve under out/
        let trimmed = relative.hasPrefix("/") ? String(relative.dropFirst()) : relative
        let fileURL = root.appendingPathComponent(trimmed)

        guard FileManager.default.fileExists(atPath: fileURL.path),
              let data = try? Data(contentsOf: fileURL) else {
            urlSchemeTask.didFailWithError(URLError(.fileDoesNotExist))
            return
        }

        let mime = Self.mimeType(for: fileURL)
        let response = URLResponse(
            url: requestURL,
            mimeType: mime,
            expectedContentLength: data.count,
            textEncodingName: "utf-8"
        )
        urlSchemeTask.didReceive(response)
        urlSchemeTask.didReceive(data)
        urlSchemeTask.didFinish()
    }

    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        // nothing to cancel for sync file reads
    }

    private static func mimeType(for fileURL: URL) -> String {
        if let type = UTType(filenameExtension: fileURL.pathExtension),
           let mime = type.preferredMIMEType {
            return mime
        }
        switch fileURL.pathExtension.lowercased() {
        case "html", "htm": return "text/html"
        case "js", "mjs": return "text/javascript"
        case "css": return "text/css"
        case "json": return "application/json"
        case "svg": return "image/svg+xml"
        case "png": return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "ico": return "image/x-icon"
        case "woff": return "font/woff"
        case "woff2": return "font/woff2"
        case "txt": return "text/plain"
        default: return "application/octet-stream"
        }
    }
}
