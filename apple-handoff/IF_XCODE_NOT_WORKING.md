# If Xcode / Simulator is “not working”

Paste **one block** in Mac Terminal. It finds or clones the project, builds, opens Xcode, and saves a log on your Desktop.

```bash
cd ~/Desktop
rm -rf bcba-fix-tmp
git clone --branch cursor/ios-clean-test-folder-1314 https://github.com/sarasmithmft-del/bcba-study-app.git bcba-fix-tmp
bash bcba-fix-tmp/scripts/mac-fix-and-open-xcode.sh
```

Then look on your **Desktop** for **`BCBA-XCODE-LOG.txt`**.

## After Xcode opens

1. **Signing & Capabilities** → **Team** → your Apple ID  
2. Bundle ID: `com.euphoria.bcbaworkbook`  
3. Pick an **iPhone** simulator → press **▶ Run**

## Common problems

| What you see | Fix |
|--------------|-----|
| `npm: command not found` | Install Node LTS from https://nodejs.org |
| `xcodebuild` / Xcode missing | Mac App Store → install **Xcode**, open once |
| ▶ Run disabled / signing error | Set **Team** in Signing & Capabilities |
| Blank black Simulator | Run the script again, then ▶ Run |
| `git clone` asks for login | Sign in with GitHub (`sarasmithmft-del`) |

If it still fails: open **`BCBA-XCODE-LOG.txt`** and paste its contents into Cursor.
