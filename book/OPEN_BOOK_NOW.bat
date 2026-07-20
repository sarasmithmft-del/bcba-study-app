@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%PS_EXE%" set "PS_EXE=powershell"
set "BUILD_PS1=%SCRIPT_DIR%compile_full_manuscript_html.ps1"
set "OPEN_PS1=%SCRIPT_DIR%OPEN_BOOK_IN_EDGE.ps1"
set "EDGE_EXE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "BOOK_URL=file:///C:/Users/Euphoria/OneDrive/Desktop/aba/book/Chairnomics_The_Golden_Chair_Playbook_PUBLISHER_PRINT.html"

if exist "%BUILD_PS1%" (
  "%PS_EXE%" -ExecutionPolicy Bypass -NoProfile -File "%BUILD_PS1%"
)

if exist "%EDGE_EXE%" (
  "%EDGE_EXE%" --new-window "%BOOK_URL%" >nul 2>&1
  if not errorlevel 1 exit /b 0
)

if not exist "%OPEN_PS1%" (
  echo Could not find:
  echo %OPEN_PS1%
  pause
  exit /b 1
)

"%PS_EXE%" -ExecutionPolicy Bypass -NoProfile -File "%OPEN_PS1%"
if errorlevel 1 (
  echo.
  echo Could not open book automatically.
  echo Press any key to close.
  pause >nul
  exit /b 1
)
exit /b 0
