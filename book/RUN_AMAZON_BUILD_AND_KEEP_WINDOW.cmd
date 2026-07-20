@echo off
setlocal

set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%PS_EXE%" set "PS_EXE=powershell"

set "SCRIPT=C:\Users\Euphoria\OneDrive\Desktop\aba\book\AMAZON_PRINT_BUILD.ps1"

"%PS_EXE%" -ExecutionPolicy Bypass -NoProfile -File "%SCRIPT%"
echo.
echo Build command finished. Press any key to close.
pause >nul
exit /b 0

