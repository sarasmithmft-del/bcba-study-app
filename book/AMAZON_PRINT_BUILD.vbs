Option Explicit

Dim shell, cmd
Set shell = CreateObject("WScript.Shell")

cmd = "powershell -ExecutionPolicy Bypass -NoProfile -File ""C:\Users\Euphoria\OneDrive\Desktop\aba\book\AMAZON_PRINT_BUILD.ps1"""
shell.Run cmd, 1, False

