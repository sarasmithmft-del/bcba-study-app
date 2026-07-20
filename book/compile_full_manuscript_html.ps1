$ErrorActionPreference = "Stop"
$bookTitle = "Chairnomics: The Golden Chair Playbook"
$fullPrintFileName = "The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"
$secondaryFullPrintFileName = "Chairnomics_The_Golden_Chair_Playbook_FULL_MANUSCRIPT_PRINT.html"

function Convert-InlineMarkdown {
    param([string]$text)

    if ($null -eq $text) { return "" }

    $encoded = [System.Net.WebUtility]::HtmlEncode($text)
    # Keep regex patterns simple and linear for very long manuscript lines.
    $encoded = $encoded -replace '\[([^\]\r\n]+)\]\(([^)\r\n]+)\)', '<a href="$2">$1</a>'
    $encoded = $encoded -replace '\*\*([^*\r\n]+)\*\*', '<strong>$1</strong>'
    $encoded = $encoded -replace '\*([^*\r\n]+)\*', '<em>$1</em>'
    $encoded = $encoded -replace '`([^`\r\n]+)`', '<code>$1</code>'
    return $encoded
}

function Convert-FastMarkdownToHtml {
    param([string]$markdown)

    $encoded = [System.Net.WebUtility]::HtmlEncode($markdown)
    $encoded = $encoded -replace '\r\n', "`n"
    $encoded = $encoded -replace '\r', "`n"
    $encoded = $encoded -replace '\n#{1}\s+([^\n]+)', "<h1>`$1</h1>"
    $encoded = $encoded -replace '\n#{2}\s+([^\n]+)', "<h2>`$1</h2>"
    $encoded = $encoded -replace '\n#{3}\s+([^\n]+)', "<h3>`$1</h3>"
    $encoded = $encoded -replace '^(#{1})\s+([^\n]+)', "<h1>`$2</h1>"
    $encoded = $encoded -replace '^(#{2})\s+([^\n]+)', "<h2>`$2</h2>"
    $encoded = $encoded -replace '^(#{3})\s+([^\n]+)', "<h3>`$2</h3>"
    $encoded = $encoded -replace '\n---\n', "<hr />"
    $encoded = $encoded -replace '\n&gt;\s?([^\n]+)', "<blockquote><p>`$1</p></blockquote>"
    $encoded = $encoded -replace '^&gt;\s?([^\n]+)', "<blockquote><p>`$1</p></blockquote>"
    $encoded = $encoded -replace '\n\*\*([^\n*]+)\*\*', "`n<strong>`$1</strong>"
    $encoded = $encoded -replace '\n\*([^\n*]+)\*', "`n<em>`$1</em>"
    $encoded = $encoded -replace '\n`([^`\n]+)`', "`n<code>`$1</code>"
    $encoded = $encoded -replace '\[([^\]\r\n]+)\]\(([^)\r\n]+)\)', '<a href="$2">$1</a>'

    $chunks = $encoded -split "(\n\s*\n)+"
    $builder = New-Object System.Text.StringBuilder
    foreach ($chunk in $chunks) {
        $trim = $chunk.Trim()
        if ([string]::IsNullOrWhiteSpace($trim)) { continue }
        if ($trim -match '^<h[1-6]>' -or $trim -match '^<blockquote>' -or $trim -match '^<hr\s*/?>') {
            [void]$builder.AppendLine($trim)
        } else {
            $paragraph = $trim -replace "`n", " "
            [void]$builder.AppendLine("<p>$paragraph</p>")
        }
    }

    return $builder.ToString()
}

function Split-TableCells {
    param([string]$line)
    $trimmed = $line.Trim().Trim('|')
    if ($trimmed.Length -eq 0) { return @() }
    return ($trimmed -split '\|') | ForEach-Object { $_.Trim() }
}

function Convert-BasicMarkdownToHtml {
    param([string]$markdown)

    $lines = $markdown -split "`r?`n"
    $sb = New-Object System.Text.StringBuilder

    $inCode = $false
    $inUl = $false
    $inOl = $false
    $inP = $false
    $inTable = $false

    $closeParagraph = {
        if ($inP) {
            [void]$sb.AppendLine("</p>")
            $inP = $false
        }
    }

    $closeLists = {
        if ($inUl) {
            [void]$sb.AppendLine("</ul>")
            $inUl = $false
        }
        if ($inOl) {
            [void]$sb.AppendLine("</ol>")
            $inOl = $false
        }
    }

    $closeTable = {
        if ($inTable) {
            [void]$sb.AppendLine("</tbody></table>")
            $inTable = $false
        }
    }

    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]
        $trim = $line.Trim()

        if ($inCode) {
            if ($trim -match '^```') {
                [void]$sb.AppendLine("</code></pre>")
                $inCode = $false
                continue
            }
            [void]$sb.AppendLine([System.Net.WebUtility]::HtmlEncode($line))
            continue
        }

        if ($trim -match '^```') {
            & $closeParagraph
            & $closeLists
            & $closeTable
            [void]$sb.AppendLine("<pre><code>")
            $inCode = $true
            continue
        }

        if ([string]::IsNullOrWhiteSpace($trim)) {
            & $closeParagraph
            & $closeLists
            & $closeTable
            continue
        }

        if ($inTable -and $trim -notmatch '\|') {
            & $closeTable
            $i--
            continue
        }

        if ($trim -match '^(#{1,6})\s+(.+)$') {
            & $closeParagraph
            & $closeLists
            & $closeTable
            $level = $matches[1].Length
            $text = Convert-InlineMarkdown $matches[2]
            [void]$sb.AppendLine("<h$level>$text</h$level>")
            continue
        }

        if ($trim -match '^-{3,}$') {
            & $closeParagraph
            & $closeLists
            & $closeTable
            [void]$sb.AppendLine("<hr />")
            continue
        }

        if ($trim -match '^>\s?(.*)$') {
            & $closeParagraph
            & $closeLists
            & $closeTable
            $text = Convert-InlineMarkdown $matches[1]
            [void]$sb.AppendLine("<blockquote><p>$text</p></blockquote>")
            continue
        }

        if (-not $inTable -and $trim -match '\|' -and $i + 1 -lt $lines.Count) {
            $nextLine = $lines[$i + 1].Trim()
            if ($nextLine -match '^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$') {
                & $closeParagraph
                & $closeLists
                & $closeTable

                $headers = Split-TableCells $trim
                [void]$sb.AppendLine("<table><thead><tr>")
                foreach ($h in $headers) {
                    [void]$sb.AppendLine("<th>$(Convert-InlineMarkdown $h)</th>")
                }
                [void]$sb.AppendLine("</tr></thead><tbody>")
                $inTable = $true
                $i++
                continue
            }
        }

        if ($inTable -and $trim -match '\|') {
            $cells = Split-TableCells $trim
            [void]$sb.AppendLine("<tr>")
            foreach ($c in $cells) {
                [void]$sb.AppendLine("<td>$(Convert-InlineMarkdown $c)</td>")
            }
            [void]$sb.AppendLine("</tr>")
            continue
        }

        if ($trim -match '^[-*]\s+(.+)$') {
            & $closeParagraph
            & $closeTable
            if (-not $inUl) {
                [void]$sb.AppendLine("<ul>")
                $inUl = $true
            }
            [void]$sb.AppendLine("<li>$(Convert-InlineMarkdown $matches[1])</li>")
            continue
        } elseif ($inUl) {
            [void]$sb.AppendLine("</ul>")
            $inUl = $false
        }

        if ($trim -match '^\d+\.\s+(.+)$') {
            & $closeParagraph
            & $closeTable
            if (-not $inOl) {
                [void]$sb.AppendLine("<ol>")
                $inOl = $true
            }
            [void]$sb.AppendLine("<li>$(Convert-InlineMarkdown $matches[1])</li>")
            continue
        } elseif ($inOl) {
            [void]$sb.AppendLine("</ol>")
            $inOl = $false
        }

        if (-not $inP) {
            [void]$sb.Append("<p>")
            $inP = $true
            [void]$sb.Append((Convert-InlineMarkdown $trim))
        } else {
            [void]$sb.Append(" ")
            [void]$sb.Append((Convert-InlineMarkdown $trim))
        }
    }

    if ($inCode) { [void]$sb.AppendLine("</code></pre>") }
    if ($inP) { [void]$sb.AppendLine("</p>") }
    if ($inUl) { [void]$sb.AppendLine("</ul>") }
    if ($inOl) { [void]$sb.AppendLine("</ol>") }
    if ($inTable) { [void]$sb.AppendLine("</tbody></table>") }

    return $sb.ToString()
}

$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputHtml = Join-Path $base $fullPrintFileName
$secondaryOutputHtml = Join-Path $base $secondaryFullPrintFileName

$files = @(
    "front_matter_a_note_from_the_chair.md",
    "front_matter_how_to_use_this_book.md",
    "chapter_01_the_most_expensive_chair.md",
    "chapter_02_hygiene_is_not_a_cost_center.md",
    "chapter_03_the_chair_is_sacred_ground.md",
    "chapter_04_connect_the_first_90_seconds.md",
    "chapter_05_hear_and_hunt.md",
    "chapter_06_assess_and_articulate.md",
    "chapter_07_invite.md",
    "chapter_08_reinforce_and_reengage.md",
    "chapter_09_the_double_hygiene_decision_matrix.md",
    "chapter_10_accelerated_and_assisted_hygiene.md",
    "chapter_11_the_hygiene_health_score.md",
    "chapter_12_the_mentor_cadence.md",
    "epilogue_a_letter_to_the_hygienist_reading_this_at_9pm.md",
    "appendix_coined_terms.md"
)

$missing = @()
foreach ($f in $files) {
    $full = Join-Path $base $f
    if (-not (Test-Path $full)) { $missing += $full }
}
if ($missing.Count -gt 0) {
    throw ("Missing required manuscript files:`n" + ($missing -join "`n"))
}

$canConvert = $false
$usedFallback = $false
$sections = New-Object System.Collections.Generic.List[string]

foreach ($f in $files) {
    Write-Host "Compiling section: $f"
    $full = Join-Path $base $f
    $md = Get-Content -Path $full -Raw -Encoding UTF8

    if ($canConvert) {
        try {
            $sectionHtml = (ConvertFrom-Markdown -Markdown $md).Html
        } catch {
            $sectionHtml = Convert-BasicMarkdownToHtml $md
            $usedFallback = $true
        }
    } else {
        # Fast parser can fail on large manuscript blocks; keep compile stable.
        $sectionHtml = Convert-BasicMarkdownToHtml $md
        $usedFallback = $true
    }

    # Remove trademark markers from final output copy.
    $sectionHtml = $sectionHtml -replace '™', ''
    $sectionHtml = $sectionHtml -replace '\(TM\)', ''

    $sections.Add(@"
<section class="chapter">
  $sectionHtml
</section>
"@) | Out-Null
}

$htmlBody = ($sections -join "`r`n")
$htmlBody = $htmlBody -replace '™', ''
$htmlBody = $htmlBody -replace '&#8482;', ''
$htmlBody = $htmlBody -replace '&trade;', ''
$htmlBody = $htmlBody -replace '\(TM\)', ''
$htmlBody = $htmlBody -replace 'senior hygienist', 'lead hygienist'
$htmlBody = $htmlBody -replace 'corner of the lead hygienist&#39;s operatory', 'corner of a hygienist&#39;s operatory'
$htmlBody = $htmlBody -replace '<hr\s*/>\s*<h2>The Operatory I Keep Walking Into</h2>', '<h2>The Operatory I Keep Walking Into</h2>'
$htmlBody = $htmlBody -replace '\*\*', ''
$htmlBody = $htmlBody -replace '\*([^*\r\n<>][^*\r\n<>]*)\*', '$1'
$htmlBody = $htmlBody -replace '\s\*\s', ' '
$htmlBody = $htmlBody -replace '\s{2,}', ' '
$generated = ""
$fallbackNote = ""

$html = @"
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>$bookTitle - Full Playbook</title>
  <style>
    :root { --ink:#1d1f23; --muted:#5f6368; --line:#d9dde3; --bg:#ffffff; }
    @page { size: 6in 9in; margin: 0.75in; }
    * { box-sizing: border-box; }
    body { margin:0; color:var(--ink); background:var(--bg); font-family:Georgia,"Times New Roman",serif; line-height:1.58; font-size:12pt; }
    .shell { max-width: 6.75in; margin:0 auto; padding:0.35in 0.25in 1in; }
    .frontmatter { text-align:center; margin:0 auto 0.8in; page-break-after:always; break-after:page; }
    .frontmatter h1 { margin:0 0 0.22in; font-size:26pt; line-height:1.1; letter-spacing:0.2px; }
    .frontmatter .subtitle { margin:0 0 0.35in; color:#2f3640; font-size:12.5pt; }
    .frontmatter .author { margin:0.18in 0 0; font-size:13pt; }
    .frontmatter .meta { margin:0.05in 0; color:var(--muted); font-size:10pt; }
    .note { color:var(--muted); font-size:9.5pt; margin:0.1in 0 0; }
    .chapter { margin-bottom: 1.9em; page-break-inside: avoid; break-inside: avoid-page; }
    .content h1, .content h2, .content h3 { color:#111; line-height:1.24; break-after:avoid-page; }
    .content h1 { margin-top:2.1em; margin-bottom:0.5em; font-size:19pt; page-break-before:always; }
    .content h1:first-child { page-break-before:auto; margin-top:0; }
    .content h2 { margin-top:1.5em; margin-bottom:0.45em; font-size:16pt; }
    .content h3 { margin-top:1.15em; margin-bottom:0.35em; font-size:13pt; }
    .content p { margin:0.62em 0; }
    .content ul, .content ol { margin:0.55em 0 0.95em; padding-left:1.35em; }
    .content li { margin:0.22em 0; }
    .content hr { border:0; border-top:1px solid #d7dde4; margin:1.1em 0; }
    .content blockquote { margin:0.95em 0; padding:0.55em 0.95em; border-left:4px solid #bfc8d4; color:#2d3136; background:#fbfcfe; }
    .content table { width:100%; border-collapse:collapse; margin:1em 0; font-size:10.5pt; }
    .content th, .content td { border:1px solid var(--line); padding:6px 8px; vertical-align:top; }
    .content th { background:#f4f7fb; font-weight:700; }
    .content code { font-family:Consolas,"Courier New",monospace; font-size:10pt; background:#f4f6f8; padding:1px 4px; border-radius:4px; }
    .content pre { font-family:Consolas,"Courier New",monospace; font-size:10pt; white-space:pre-wrap; border:1px solid var(--line); border-radius:8px; padding:10px 12px; background:#fafbfd; overflow-wrap:anywhere; }
    @media print {
      .shell { max-width:none; margin:0; padding:0; }
      body { font-size:11.5pt; }
      .content h1 { page-break-before:always; }
      .content h1:first-child { page-break-before:auto; }
      a { color:inherit; text-decoration:none; }
    }
  </style>
</head>
<body>
  <main class="shell">
    <section class="frontmatter">
      <h1>$bookTitle</h1>
      <p class="subtitle">A hygiene-led practice growth playbook</p>
      <p class="author">Sara Smith, RDH</p>
      <p class="meta">Chairnomics</p>
    </section>

    <article class="content" id="content">
      $htmlBody
    </article>
  </main>
</body>
</html>
"@

$html = $html -replace '™', ''
$html = $html -replace '&#8482;', ''
$html = $html -replace '&trade;', ''
$html = $html -replace '\(TM\)', ''
$html = $html -replace '\*\*', ''
$html = $html -replace '\*([^*\r\n<>][^*\r\n<>]*)\*', '$1'
$html = $html -replace '\s\*\s', ' '
$html = $html -replace 'Rendered with internal Markdown parser\.?', ''
$html = $html -replace '\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}', ''

Set-Content -Path $outputHtml -Value $html -Encoding UTF8
Set-Content -Path $secondaryOutputHtml -Value $html -Encoding UTF8

Write-Host "Print-ready HTML created:"
Write-Host $outputHtml
Write-Host $secondaryOutputHtml
