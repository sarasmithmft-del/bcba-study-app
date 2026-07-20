# Waits until Next listens on pinned dev port, then opens /mock-exam (see package.json "dev").
$ErrorActionPreference = 'Stop'

$DevPort = 3333

function Test-PortOpen {
    param([int]$Port)
    try {
        $c = New-Object System.Net.Sockets.TcpClient
        $iar = $c.BeginConnect('127.0.0.1', $Port, $null, $null)
        $wait = $iar.AsyncWaitHandle.WaitOne(500, $false)
        if (-not $wait) {
            try { $c.Close() } catch { }
            return $false
        }
        try { $c.EndConnect($iar) } catch {
            try { $c.Close() } catch { }
            return $false
        }
        $c.Close()
        return $true
    }
    catch {
        return $false
    }
}

Write-Host "`n Waiting for Next.js on port $DevPort (up to ~4 minutes)...`n" -ForegroundColor Cyan
Write-Host " Dev command must be: npm run dev  (pins port $DevPort — do not bookmark :3000).`n" -ForegroundColor DarkGray

$deadline = (Get-Date).AddMinutes(4)
$lastEcho = [DateTime]::MinValue

while ((Get-Date) -lt $deadline) {
    if (Test-PortOpen -Port $DevPort) {
        $url = "http://127.0.0.1:${DevPort}/mock-exam"
        Write-Host "`n Found server — opening:`n $url `n" -ForegroundColor Green
        Start-Process $url
        exit 0
    }

    if (((Get-Date) - $lastEcho).TotalSeconds -ge 5) {
        Write-Host '.' -NoNewline
        $lastEcho = Get-Date
    }
    Start-Sleep -Milliseconds 400
}

Write-Host "`r`n`n Nothing is listening on 127.0.0.1:$DevPort" -ForegroundColor Yellow
Write-Host " Check window 'ABA NEXT SERVER - DO NOT CLOSE' for red errors (try: npm install).`n" -ForegroundColor Yellow
Write-Host " BOOKMARK WARNING: localhost:3000 will NOT work for this repo — dev uses:$DevPort`n" -ForegroundColor Yellow
exit 1
