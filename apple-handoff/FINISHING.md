# Finish the iPhone app — simple path

Do these **in order**. Stop if something fails and fix that step before continuing.

**Names to use**
- Folder: `~/Desktop/bcba study app`
- Bundle ID: `com.euphoria.bcbaworkbook`
- App name: `BCBA Study Workbook`
- Product ID: `monthly_pro` ($9.99/mo, 3-day trial)

---

## Step 1 · Refresh the project (Terminal on Mac)

```bash
cd ~/Desktop/"bcba study app"
git remote set-url origin https://github.com/sarasmithmft-del/bcba-study-app.git
git fetch origin
git checkout cursor/apple-handoff-desktop-3ee0 2>/dev/null || git checkout main
git pull
npm install
npm run build
```

If `ios` folder is **missing**:

```bash
npx cap add ios
npx cap sync ios
npx cap open ios
```

If `ios` folder **already exists**:

```bash
npx cap sync ios
npx cap open ios
```

---

## Step 2 · Xcode signing (must be green / no red errors)

1. Left sidebar → blue **App** project → **TARGETS → App**
2. **Signing & Capabilities**
3. ✅ **Automatically manage signing**
4. **Team** = your Apple Developer team
5. **Bundle Identifier** = `com.euphoria.bcbaworkbook`
6. **General** → Minimum Deployments → **iOS 16.0**

---

## Step 3 · Run in Simulator

1. Top bar → choose **iPhone 16 Pro** (or 15 Pro)
2. Press **▶** (`Cmd + R`)
3. Confirm: home → one chapter → mock exam

**Blank screen?** Run Step 1 build/sync again, then ▶ again.

---

## Step 4 · App Store Connect (website)

1. https://appstoreconnect.apple.com → **My Apps**
2. Open **BCBA Study Workbook** (or create it — see `APPLE_DEVELOPER_FOR_BEGINNERS.md`)
3. **Subscriptions** → group `BCBA Workbook Pro` → product `monthly_pro`  
   $9.99/month · 3-day free trial
4. Fill listing later: name, description, screenshots (drafts in `APP_STORE_CONNECT.md`)

---

## Step 5 · Native polish (still in Xcode)

1. App icon: Assets → AppIcon → drop a **1024×1024** PNG  
2. Splash is already configured dark `#121212` in Capacitor  
3. Re-run Simulator and check notch/safe area looks OK  

---

## Step 6 · Subscriptions in code (Phase 4 — needs RevenueCat)

Only after Simulator works and `monthly_pro` exists:

1. Create a free account at https://www.revenuecat.com  
2. Link the Apple app + shared secret  
3. On Mac Cursor, ask:  
   > Wire RevenueCat for product `monthly_pro`. Replace stub in `src/lib/subscription/subscriptionClient.ts` and wrap `<SubscriptionGate>` in `layout.tsx`. Then `npm run build && npx cap sync ios`.

(This cloud agent cannot put secrets into your Mac Xcode project.)

---

## Step 7 · TestFlight

1. Xcode menu → **Product → Archive**
2. When archive finishes → **Distribute App** → App Store Connect → Upload
3. In App Store Connect → **TestFlight** → wait for processing
4. Add yourself as internal tester → install on your iPhone → smoke test

---

## Step 8 · Submit for Review

1. App Store Connect → app → add screenshots + privacy labels  
2. Select the TestFlight build  
3. **Add for Review** → **Submit**

---

## “Done for today” checklist

- [ ] Simulator shows the workbook  
- [ ] Bundle ID / Team signing OK in Xcode  
- [ ] App exists in App Store Connect  
- [ ] (Later) `monthly_pro` subscription created  
- [ ] (Later) Archive uploaded → TestFlight  
- [ ] (Later) Submitted for review  

---

## Best way to get hands-on help

Open **Cursor on your Mac** → folder `~/Desktop/bcba study app` → new chat → paste:

> Walk me through finishing for the App Store. Follow `apple-handoff/FINISHING.md`. Bundle ID `com.euphoria.bcbaworkbook`. Tell me the next single click whenever I get stuck. Do not rewrite study content.
