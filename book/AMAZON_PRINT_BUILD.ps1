$ErrorActionPreference = "Stop"

$bookDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$compileScript = Join-Path $bookDir "compile_full_manuscript_html.ps1"
$htmlPath = Join-Path $bookDir "The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"
$pdfPath = Join-Path $bookDir "Chairnomics_The_Golden_Chair_Playbook_Amazon_Print.pdf"

if (-not (Test-Path $compileScript)) {
    throw "Missing compile script: $compileScript"
}

# 1) Build fully static HTML (no chapter clicking required).
& $compileScript

if (-not (Test-Path $htmlPath)) {
    throw "Expected manuscript HTML not found: $htmlPath"
}

# 2) Resolve Edge path.
$edgeCandidates = @(
    "$Env:ProgramFiles(x86)\Microsoft\Edge\Application\msedge.exe",
    "$Env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "$Env:LocalAppData\Microsoft\Edge\Application\msedge.exe"
)
$edgePath = $edgeCandidates | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1
if (-not $edgePath) {
    $edgeCmd = Get-Command msedge -ErrorAction SilentlyContinue
    if ($edgeCmd) { $edgePath = $edgeCmd.Source }
}
if (-not $edgePath) {
    throw "Microsoft Edge not found."
}

# 3) Headless print to PDF from static HTML.
$htmlUri = "file:///" + ($htmlPath -replace "\\", "/")
$pdfUri = "file:///" + ($pdfPath -replace "\\", "/")
$args = @(
    "--headless",
    "--disable-gpu",
    "--allow-file-access-from-files",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=120000",
    "--print-to-pdf-no-header",
    "--print-to-pdf=$pdfPath",
    $htmlUri
)

$proc = Start-Process -FilePath $edgePath -ArgumentList $args -PassThru -Wait
$pdfExists = Test-Path $pdfPath

if ($proc.ExitCode -eq 0 -and $pdfExists) {
    # 4) Open generated PDF for review.
    Start-Process -FilePath $edgePath -ArgumentList @("--new-window", $pdfPath)
    Write-Host "Created PDF: $pdfPath"
} else {
    # Fallback: always open the manuscript HTML so user can still print to PDF manually.
    Start-Process -FilePath $edgePath -ArgumentList @("--new-window", $htmlPath)
    $reason = "Edge exit code: $($proc.ExitCode). PDF exists: $pdfExists."
    throw "Amazon PDF auto-build failed. Opened manuscript HTML instead so you can Print -> Save as PDF. $reason"
}

