@echo off
setlocal

set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%PS_EXE%" set "PS_EXE=powershell"
set "SCRIPT=%~dp0OPEN_BOOK_LOCALHOST.ps1"

if not exist "%SCRIPT%" (
  echo Missing launcher script:
  echo %SCRIPT%
  pause
  exit /b 1
)

"%PS_EXE%" -ExecutionPolicy Bypass -NoProfile -File "%SCRIPT%"
if errorlevel 1 (
  echo.
  echo Could not start localhost book launcher.
  echo Press any key to close.
  pause >nul
  exit /b 1
)
exit /b 0

