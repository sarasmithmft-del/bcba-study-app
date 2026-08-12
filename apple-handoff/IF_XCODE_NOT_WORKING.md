# If Xcode / Simulator is “not working”

Your website can work in Chrome while the **iPhone Simulator app** still needs a Mac build. Use this path.

## Fastest: build + launch Simulator (no ▶ Run)

Paste **one block** in Mac **Terminal**:

```bash
cd ~/Desktop
rm -rf bcba-fix-tmp
git clone --branch cursor/local-xcode-build-8982 https://github.com/sarasmithmft-del/bcba-study-app.git bcba-fix-tmp
bash bcba-fix-tmp/scripts/mac-fix-and-open-xcode.sh
# Then, from the project folder the script selected (usually ~/Desktop/bcba\ study\ app):
cd ~/Desktop/"bcba study app" 2>/dev/null || cd ~/Desktop/TEST 2>/dev/null || cd ~/Desktop/bcba-fix-tmp
git fetch origin
git checkout cursor/local-xcode-build-8982
git pull origin cursor/local-xcode-build-8982
chmod +x RUN-ON-SIMULATOR.command scripts/*.sh
./scripts/mac-build-and-run-simulator.sh
```

Or, if the project is already on your Desktop:

```bash
cd ~/Desktop/"bcba study app"
git fetch origin && git checkout cursor/local-xcode-build-8982 && git pull
chmod +x RUN-ON-SIMULATOR.command scripts/mac-build-and-run-simulator.sh
./scripts/mac-build-and-run-simulator.sh
```

**Or double-click** `RUN-ON-SIMULATOR.command` in Finder (right-click → Open the first time).

That script:

1. Runs `npm install` + `npm run build`
2. Syncs the website into the iOS project (`npx cap sync ios`)
3. Builds with `xcodebuild` for the Simulator
4. Installs and **launches** `BCBA Study Workbook` (`com.euphoria.bcbaworkbook`)
5. Writes **`~/Desktop/BCBA-XCODE-LOG.txt`**

## If the automatic launch fails

The script opens Xcode as a fallback. Then:

1. **Signing & Capabilities** → **Team** → your Apple ID  
2. Bundle ID: `com.euphoria.bcbaworkbook`  
3. Pick an **iPhone** simulator → press **▶ Run**

## Local changes blocking `git checkout` (package-lock.json)

If Terminal says local changes would be overwritten:

```bash
cd ~/Desktop/"bcba study app"
git stash push -u -m "temp" || true
git fetch origin
git checkout -f cursor/local-xcode-build-8982
git reset --hard origin/cursor/local-xcode-build-8982
chmod +x CONTINUE-ON-MAC.command scripts/*.sh
./scripts/mac-resume-and-open-swiftui.sh
```

Or double-click **`CONTINUE-ON-MAC.command`** after you’re on that branch.

## Common problems

| What you see | Fix |
|--------------|-----|
| `npm: command not found` | Install Node LTS from https://nodejs.org |
| `xcodebuild` / Xcode missing | Mac App Store → install **Xcode**, open once |
| No iPhone Simulator | Xcode → Settings → Platforms → download iOS Simulator |
| ▶ Run disabled / signing error | Set **Team** in Signing & Capabilities |
| Blank black Simulator | Re-run `./scripts/mac-build-and-run-simulator.sh` |
| `git clone` asks for login | Sign in with GitHub (`sarasmithmft-del`) |
| checkout blocked by `package-lock.json` | Use the stash block above |

If it still fails: open **`BCBA-XCODE-LOG.txt`** and paste its contents into Cursor.

## Do not

- Create a **new** blank Xcode project  
- Open random `.html` files and expect the iPhone app  
- Use Copilot for Xcode / Claude in Xcode for this step — they do not replace the build script
