@echo off
echo.
node "%~dp0scripts\setup.js"
if errorlevel 1 (
    echo.
    echo  Something went wrong. See the error message above.
    pause
    exit /b 1
)
pause
