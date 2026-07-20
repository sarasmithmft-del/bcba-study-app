@echo off
setlocal

set SCRIPT_DIR=%~dp0
set PS1=%SCRIPT_DIR%compile_full_manuscript_html.ps1
set OUT=%SCRIPT_DIR%Chairnomics_The_Golden_Chair_Playbook_FULL_MANUSCRIPT_PRINT.html
set WRAP=%SCRIPT_DIR%Chairnomics_The_Golden_Chair_Playbook_PUBLISHER_PRINT.html
set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%PS_EXE%" set "PS_EXE=powershell"

"%PS_EXE%" -ExecutionPolicy Bypass -NoProfile -File "%PS1%"
set "PS_EXIT=%ERRORLEVEL%"

if exist "%OUT%" (
  echo.
  if not "%PS_EXIT%"=="0" (
    echo HTML compile returned code %PS_EXIT%, opening latest available file anyway:
  ) else (
    echo HTML compile succeeded.
  )
  start "" "%OUT%" >nul 2>&1
  if errorlevel 1 (
    echo Standard open failed. Trying Explorer...
    explorer "%OUT%"
  )
  echo Opened: %OUT%
  echo Press any key to close.
  pause >nul
  exit /b 0
)

echo.
if not "%PS_EXIT%"=="0" (
  echo HTML compile failed with code %PS_EXIT%.
) else (
  echo HTML compile finished but output file was not found.
)
echo HTML file was not created at:
echo %OUT%
if exist "%WRAP%" (
  echo Opening publisher wrapper for manual fallback...
  start "" "%WRAP%" >nul 2>&1
)
echo Press any key to close.
pause >nul
exit /b 1
