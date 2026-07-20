@echo off
title Quick check — is Next.js listening?
echo.
echo  Testing http://127.0.0.1:3333 ...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command "try { $r = Invoke-WebRequest -Uri 'http://127.0.0.1:3333/' -UseBasicParsing -TimeoutSec 5; Write-Host ('  OK — server answered HTTP status ' + $r.StatusCode) -ForegroundColor Green; exit 0 } catch { Write-Host '  FAIL — nothing is listening on 127.0.0.1:3333' -ForegroundColor Red; Write-Host '  Run npm run dev in THIS folder or double-click RUN-MOCK-EXAM.bat. Keep that window OPEN.' -ForegroundColor Yellow; exit 1 }"

echo.
pause
