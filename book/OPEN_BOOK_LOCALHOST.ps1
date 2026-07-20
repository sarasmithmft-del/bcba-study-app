$ErrorActionPreference = "Stop"

$bookDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $bookDir
$port = 8765
$bookUrl = "http://127.0.0.1:$port/book/The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"

# Detect Python launcher
$pythonCommand = $null
if (Get-Command py -ErrorAction SilentlyContinue) {
    $pythonCommand = "py -3 -m http.server $port --bind 127.0.0.1"
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
    $pythonCommand = "python -m http.server $port --bind 127.0.0.1"
}

if (-not $pythonCommand) {
    throw "Python not found. Install Python or run the exact Edge file:// command that already works."
}

# Start local server in its own terminal window if not already listening.
$isListening = $false
try {
    $test = Invoke-WebRequest -Uri "http://127.0.0.1:$port/" -UseBasicParsing -TimeoutSec 1
    if ($test.StatusCode -ge 200) { $isListening = $true }
} catch {
    $isListening = $false
}

if (-not $isListening) {
    $serverCmd = "cd /d `"$repoRoot`" && $pythonCommand"
    Start-Process -FilePath "cmd.exe" -ArgumentList "/k", $serverCmd
    Start-Sleep -Seconds 2
}

# Locate Edge
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

if ($edgePath) {
    Start-Process -FilePath $edgePath -ArgumentList @("--new-window", $bookUrl)
} else {
    Start-Process $bookUrl
}

Write-Host "Opened: $bookUrl"

