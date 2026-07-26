# Apple Developer — beginner walkthrough (BCBA Study Workbook)

You already have an **Apple Developer Program** membership.  
You do **not** need to “join” again. You only need to **create the app record** and **sign the Xcode project**.

Use these exact values:

| What | Value |
|------|--------|
| App name | BCBA Study Workbook |
| Bundle ID | `com.euphoria.bcbaworkbook` |
| Subscription product ID | `monthly_pro` |
| Price | $9.99 / month |
| Trial | 3 days free |

---

## Part 1 — Register the Bundle ID (Apple Developer website)

1. On your Mac, open Safari or Chrome.
2. Go to: https://developer.apple.com/account  
3. Sign in with the **same Apple ID** you use for the Developer Program.
4. Click **Certificates, Identifiers & Profiles** (or **Identifiers**).
5. Click the **+** button.
6. Choose **App IDs** → Continue.
7. Choose **App** → Continue.
8. Fill in:
   - **Description:** `BCBA Study Workbook`
   - **Bundle ID:** select **Explicit**, type exactly:  
     `com.euphoria.bcbaworkbook`
9. Capabilities: you can leave defaults for now. (In-App Purchase will be needed later for subscriptions — enable **In-App Purchase** if you see the checkbox.)
10. Click **Continue** → **Register**.

If it says the Bundle ID is already taken **by you**, that’s fine — skip to Part 2.

---

## Part 2 — Create the app in App Store Connect

1. Go to: https://appstoreconnect.apple.com  
2. Sign in with the same Apple ID.
3. Click **My Apps**.
4. Click the **+** button → **New App**.
5. Fill in:
   - **Platforms:** iOS
   - **Name:** `BCBA Study Workbook`
   - **Primary Language:** English (U.S.)
   - **Bundle ID:** choose `com.euphoria.bcbaworkbook` from the dropdown  
     (if it’s missing, finish Part 1 first, wait a minute, refresh)
   - **SKU:** `bcba-study-workbook` (any unique code; users never see this)
   - **User Access:** Full Access
6. Click **Create**.

You now have an empty App Store listing. That’s expected.

---

## Part 3 — Tell Xcode to use your team (signing)

1. Open your project in **Xcode** (the `ios/App` project / Capacitor app).
2. Left sidebar: click the blue **App** project at the top.
3. Under **TARGETS**, click **App**.
4. Click the **Signing & Capabilities** tab.
5. Check ✅ **Automatically manage signing**.
6. **Team:** click the dropdown → pick **your name / company** (your Developer team).
7. **Bundle Identifier** must show: `com.euphoria.bcbaworkbook`  
   If it’s wrong, edit it to match exactly.

### If you see a red error
- **“Failed to register bundle identifier”** → do Part 1, then click Team again.
- **“No accounts”** → Xcode menu → **Settings** (or Preferences) → **Accounts** → **+** → add your Apple ID → download teams.
- **“Bundle ID is not available”** → someone else owns that ID, or a typo. Check spelling carefully.

---

## Part 4 — Run on the Simulator (proof it works)

1. At the top of Xcode, click the device menu (it may say “Any iOS Device”).
2. Choose **iPhone 16 Pro** or **iPhone 15 Pro**.
3. Press the **▶ Play** button (or press `Cmd + R`).
4. Wait for the Simulator. You should see the study workbook.

### If the screen is blank or old
Open **Terminal** on the Mac and run:

```bash
cd ~/Desktop/bcba\ study\ app
npm install
npm run build
npx cap sync ios
```

Then go back to Xcode and press ▶ again.

---

## Part 5 — Subscription product (do this AFTER Simulator works)

Still in **App Store Connect** → your app:

1. Left sidebar → **Subscriptions** (or **Monetization → Subscriptions**).
2. Create a **Subscription Group** named: `BCBA Workbook Pro`
3. Add a subscription:
   - **Reference Name:** `Monthly Pro`
   - **Product ID:** `monthly_pro` ← must match the app code exactly
   - **Duration:** 1 month
   - **Price:** $9.99
   - **Introductory Offer:** Free → 3 days (or “Free Trial” 3 days)

You do **not** need RevenueCat keys to create this product.  
Wiring RevenueCat into the app code is a later step (Phase 4) — ask Cursor **on the Mac** for that after the Simulator runs.

---

## Part 6 — What you can ignore for now

- TestFlight (later)
- App Review submit (later)
- Screenshots (later)
- Privacy nutrition labels (later — copy ideas are in `APP_STORE_CONNECT.md`)
- Push notifications, Sign in with Apple (not needed for v1)

---

## Where you should be when you’re “done for today”

✅ Bundle ID registered  
✅ App exists in App Store Connect  
✅ Xcode Team selected, no red signing errors  
✅ ▶ Run shows the workbook in Simulator  

Next day / next session: icon, subscription wiring (RevenueCat), TestFlight.

---

## Stuck? Copy this into Cursor **on your Mac**

Open Cursor on the Mac → open folder `~/Desktop/bcba study app` → new chat → paste:

> I'm a beginner. Walk me through Apple Developer / App Store Connect and Xcode signing for bundle ID `com.euphoria.bcbaworkbook`. The Capacitor iOS project is already open in Xcode. Do not re-author study content. Follow `apple-handoff/APPLE_DEVELOPER_FOR_BEGINNERS.md` and `apple-handoff/XCODE_STEPS_NOW.md`.
