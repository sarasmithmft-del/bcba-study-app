Option Explicit

Dim shell, cmd
Set shell = CreateObject("WScript.Shell")

cmd = """C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"" --new-window --allow-file-access-from-files --disable-web-security ""file:///C:/Users/Euphoria/OneDrive/Desktop/aba/book/The_Sacred_Chair_FULL_MANUSCRIPT_PRINT.html"""
shell.Run cmd, 1, False

