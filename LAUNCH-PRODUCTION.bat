@echo off
title Launch study workbook (production)
setlocal EnableExtensions

cd /d "%~dp0"

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo Install Node.js LTS first: https://nodejs.org
  pause
  goto :eof
)

echo Cleaning old build output (recommended on OneDrive to avoid EPERM / corrupt .next )...
call npm.cmd run clean

echo Building once (can take several minutes first time)...
call npm.cmd run build
if errorlevel 1 (
  echo BUILD FAILED — read red errors above. Often: npm install
  pause
  goto :eof
)

echo.
echo Starting production server — LEAVE THIS WINDOW OPEN.
echo Open: http://127.0.0.1:3333/
echo.

call npm.cmd run serve:local
pause
