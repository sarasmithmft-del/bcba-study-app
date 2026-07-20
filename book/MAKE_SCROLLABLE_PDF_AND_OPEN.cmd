@echo off
setlocal

set "BOOK_DIR=C:\Users\Euphoria\OneDrive\Desktop\aba\book"
set "REPO_DIR=C:\Users\Euphoria\OneDrive\Desktop\aba"
set "HTML_URL=http://127.0.0.1:8765/book/The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"
set "PDF_OUT=%BOOK_DIR%\Chairnomics_The_Golden_Chair_Playbook_SCROLLABLE.pdf"
set "EDGE_EXE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
set "PY_CMD="

if not exist "%EDGE_EXE%" (
  echo Edge not found at:
  echo %EDGE_EXE%
  pause
  exit /b 1
)

where py >nul 2>&1
if not errorlevel 1 set "PY_CMD=py -3"
if not defined PY_CMD (
  where python >nul 2>&1
  if not errorlevel 1 set "PY_CMD=python"
)

if not defined PY_CMD (
  echo Python not found. Install Python first, then re-run this file.
  pause
  exit /b 1
)

REM Start local web server in a separate window.
start "book-server" cmd /c "cd /d \"%REPO_DIR%\" && %PY_CMD% -m http.server 8765 --bind 127.0.0.1"

REM Give server time to start.
timeout /t 3 >nul

REM Build scrollable PDF from fully rendered HTML page.
"%EDGE_EXE%" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=120000 --print-to-pdf="%PDF_OUT%" "%HTML_URL%"

if exist "%PDF_OUT%" (
  "%EDGE_EXE%" --new-window "file:///C:/Users/Euphoria/OneDrive/Desktop/aba/book/Chairnomics_The_Golden_Chair_Playbook_SCROLLABLE.pdf"
  exit /b 0
)

echo PDF build failed.
echo Expected output:
echo %PDF_OUT%
pause
exit /b 1

