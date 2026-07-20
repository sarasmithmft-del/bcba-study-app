@echo off
setlocal

call "%~dp0MAKE_FULLY_STATIC_AND_OPEN.cmd"
exit /b %errorlevel%

