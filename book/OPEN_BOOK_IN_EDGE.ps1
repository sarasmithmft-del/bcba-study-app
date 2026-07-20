$ErrorActionPreference = "Stop"

$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$compileScript = Join-Path $base "compile_full_manuscript_html.ps1"
$publisherHtml = Join-Path $base "Chairnomics_The_Golden_Chair_Playbook_PUBLISHER_PRINT.html"
$fullHtml = Join-Path $base "The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"

if (Test-Path $compileScript) {
    & $compileScript
}

$targetPath = $null
if (Test-Path $publisherHtml) {
    $targetPath = $publisherHtml
} elseif (Test-Path $fullHtml) {
    $targetPath = $fullHtml
} else {
    throw "Could not find either publisher or full HTML output."
}

$edgeCandidates = @(
    "$Env:ProgramFiles(x86)\Microsoft\Edge\Application\msedge.exe",
    "$Env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "$Env:LocalAppData\Microsoft\Edge\Application\msedge.exe"
)

$edgePath = $null
foreach ($candidate in $edgeCandidates) {
    if ($candidate -and (Test-Path $candidate)) {
        $edgePath = $candidate
        break
    }
}

if (-not $edgePath) {
    $edgeCommand = Get-Command msedge -ErrorAction SilentlyContinue
    if ($edgeCommand) { $edgePath = $edgeCommand.Source }
}

$targetUri = "file:///" + (($targetPath -replace "\\", "/"))

if ($edgePath) {
    Start-Process -FilePath $edgePath -ArgumentList @("--new-window", $targetUri)
} else {
    Start-Process -FilePath $targetPath
}

