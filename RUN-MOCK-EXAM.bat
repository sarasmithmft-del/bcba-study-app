@echo off
title Run mock exam (starts server + opens browser)
setlocal EnableExtensions

cd /d "%~dp0"

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo.
  echo  npm was not found. Install Node.js LTS from https://nodejs.org
  echo  then reopen this folder and double-click RUN-MOCK-EXAM.bat again.
  echo.
  pause
  goto :eof
)

echo.
echo  STEP 1: A second black window titled "ABA NEXT SERVER" will open.
echo           Leave it running while you study. Closing it stops the site.
echo.
echo  STEP 2: This waits for port 3333, then opens the mock exam in your browser.
echo           ^(Use ONLY http://127.0.0.1:3333 - not :3000; try 127.0.0.1 if localhost refuses.^)
echo           Starting server window in 3 seconds...
timeout /t 3 /nobreak >nul

REM Start Next dev in a SEPARATE window — leave it OPEN (closing it stops the site = connection refused).
start "ABA NEXT SERVER - DO NOT CLOSE" cmd.exe /k "cd /d ""%~dp0"" && npm run dev"

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\wait-then-open-mock-exam.ps1"

if errorlevel 1 (
  echo.
  echo  Opening the browser timed out or failed. Read any red errors in the OTHER window titled
  echo  "ABA NEXT SERVER - DO NOT CLOSE", fix them ^(often: run `npm install` in that folder^), then try again.
  echo.
  pause
)
