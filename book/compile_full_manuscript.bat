@echo off
setlocal

set SCRIPT_DIR=%~dp0
set PS1=%SCRIPT_DIR%compile_full_manuscript.ps1

powershell -ExecutionPolicy Bypass -NoProfile -File "%PS1%"

echo.
echo Done. Press any key to close.
pause >nul
