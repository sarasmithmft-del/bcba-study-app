@echo off
title Fix Internal Server Error — clean rebuild + start server
setlocal EnableExtensions
cd /d "%~dp0"

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo Install Node.js LTS first: https://nodejs.org
  pause
  goto :eof
)

echo.
echo === Stop anything already using port 3333 ===
for /f "tokens=5" %%p in ('netstat -ano 2^>nul ^| findstr ":3333" ^| findstr LISTENING') do (
  echo Closing PID %%p ...
  taskkill /PID %%p /F 2>nul
)

timeout /t 2 /nobreak >nul

echo.
echo === Remove old build (.next folder) ===
call npm.cmd run clean
if errorlevel 1 (
  echo npm run clean had a problem — try deleting the folder .next by hand.
)

echo.
echo === Fresh production build ===
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED. Common fixes:
  echo   Move this project OUT of OneDrive ^(example: C:\Projects\aba^) — OneDrive locks build files.
  echo   Close other terminals using this folder, then double-click FIX-500.bat again.
  pause
  goto :eof
)

echo.
echo === Starting server ===
echo LEAVE THIS WINDOW OPEN. Browser: http://127.0.0.1:3333/
echo.

call npm.cmd run serve:local
pause
