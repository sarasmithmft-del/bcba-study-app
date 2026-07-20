@echo off
title Open mock exam (browser only)
setlocal EnableExtensions

set "URL=http://127.0.0.1:3333/mock-exam"

echo.
echo  IMPORTANT: This only opens the browser. Nothing will load unless the dev server is running.
echo  If Edge/Chrome shows CONNECTION REFUSED, double-click RUN-MOCK-EXAM.bat instead.
echo.
echo  Correct URL while using this project after `npm run dev`:
echo    %URL%
echo.

start "" "%URL%"

:DONE
echo.
echo Nothing opened ^? Paste this into your address bar AFTER `npm run dev` shows Ready:
echo    %URL%
echo.
pause
