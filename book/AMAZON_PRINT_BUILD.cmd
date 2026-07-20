@echo off
setlocal

set "BOOK_DIR=C:\Users\Euphoria\OneDrive\Desktop\aba\book"
set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%PS_EXE%" set "PS_EXE=powershell"

set "SCRIPT=%BOOK_DIR%\AMAZON_PRINT_BUILD.ps1"
if not exist "%SCRIPT%" (
  echo Missing build script:
  echo %SCRIPT%
  pause
  exit /b 1
)

"%PS_EXE%" -ExecutionPolicy Bypass -NoProfile -File "%SCRIPT%"
if errorlevel 1 (
  echo.
  echo Amazon print build failed.
  echo Press any key to close.
  pause >nul
  exit /b 1
)

exit /b 0

