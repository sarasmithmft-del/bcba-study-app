# Do these in Xcode on your Mac RIGHT NOW

This cloud agent **cannot click Xcode on your Mac**. Complete these in the Xcode window you already have open.

## 1 · Signing (required)

1. In the left sidebar, click the blue **App** project (top item).
2. Select the **App** target.
3. Open **Signing & Capabilities**.
4. Check **Automatically manage signing**.
5. **Team:** pick your Apple Developer team.
6. **Bundle Identifier:** `com.euphoria.bcbaworkbook`  
   (must match App Store Connect later)

If Xcode shows a signing error, fix the team/bundle ID until the red error clears.

## 2 · Deployment target

1. Still on the **App** target → **General**.
2. **Minimum Deployments** (iOS): **16.0**

## 3 · Run on Simulator

1. Top bar device menu → **iPhone 16 Pro** (or 15 Pro).
2. Press **▶ Run** (or `Cmd + R`).
3. Wait for Simulator. Confirm:
   - Home / chapter list loads
   - Open one chapter
   - Open mock exam

If the screen is blank: in Terminal from `~/Desktop/bcba study app` run:

```bash
npm run build
npx cap sync ios
```

Then ▶ Run again in Xcode.

## 4 · After Simulator works

In Terminal (same folder):

```bash
git status
git add ios
git commit -m "Add Capacitor iOS Xcode project"
git push -u origin HEAD
```

Then open **Cursor on this Mac** on `~/Desktop/bcba study app` and paste `apple-handoff/MAC_CURSOR_PROMPT.md` so a local agent can continue Phase 3–6 with you.

## 5 · Not yet (need accounts / assets)

- App icon 1024×1024 (you supply the image)
- App Store Connect app + `monthly_pro` subscription
- RevenueCat API keys
- TestFlight / Submit

Those come after Simulator runs cleanly.
