@echo off
setlocal

set "BOOK_DIR=C:\Users\Euphoria\OneDrive\Desktop\aba\book"
set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%PS_EXE%" set "PS_EXE=powershell"

set "COMPILE_PS1=%BOOK_DIR%\compile_full_manuscript_html.ps1"
set "OUT_HTML=%BOOK_DIR%\The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"
set "EDGE_EXE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if exist "%COMPILE_PS1%" (
  "%PS_EXE%" -ExecutionPolicy Bypass -NoProfile -File "%COMPILE_PS1%"
) else (
  echo Missing compile script:
  echo %COMPILE_PS1%
  pause
  exit /b 1
)

if not exist "%OUT_HTML%" (
  echo Static output not found:
  echo %OUT_HTML%
  pause
  exit /b 1
)

if exist "%EDGE_EXE%" (
  "%EDGE_EXE%" --new-window "file:///C:/Users/Euphoria/OneDrive/Desktop/aba/book/The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"
  exit /b 0
)

explorer "%OUT_HTML%"
exit /b 0

