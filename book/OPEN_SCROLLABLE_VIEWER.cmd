@echo off
setlocal

set "REPO_DIR=C:\Users\Euphoria\OneDrive\Desktop\aba"
set "EDGE_EXE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "URL=http://127.0.0.1:8765/book/The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"
set "PY_CMD="

where py >nul 2>&1
if not errorlevel 1 set "PY_CMD=py -3"
if not defined PY_CMD (
  where python >nul 2>&1
  if not errorlevel 1 set "PY_CMD=python"
)

if not defined PY_CMD (
  echo Python not found. Install Python first.
  pause
  exit /b 1
)

start "book-server" cmd /c "cd /d \"%REPO_DIR%\" && %PY_CMD% -m http.server 8765 --bind 127.0.0.1"
timeout /t 2 >nul

if exist "%EDGE_EXE%" (
  "%EDGE_EXE%" --new-window "%URL%"
) else (
  start "" "%URL%"
)

exit /b 0

