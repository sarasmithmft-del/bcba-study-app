# Paste into a fresh Cursor chat on Mac

Copy everything below the line into a new Cursor agent chat **after** `~/Desktop/bcba study app` exists and `npm install` / `npm run build` have succeeded.

---

Read `apple-handoff/START_HERE.md` and `HANDOFF.md` in the repo root. This project is ready for Apple App Store work on macOS.

**Done already:** full study content, static export, Capacitor npm packages, `capacitor.config.ts`, subscription UI stub, privacy page, and the `apple-handoff/` checklist package. GitHub: `sarasmithmft-del/bcba-study-app`.

**My goal:** publish to the Apple App Store.

**Do next (Phase 2):**
1. Confirm we are in `~/Desktop/bcba study app` (or this workspace root with `package.json`).
2. Run `npm run build`, then `npx cap add ios`, then `npx cap sync ios`, then `npx cap open ios`.
3. Walk me through Xcode signing: Apple team, bundle ID `com.euphoria.bcbaworkbook`, minimum iOS 16.0, run on Simulator.
4. After the simulator works, continue with Phase 3 (icon/splash/safe area), then Phase 4 (RevenueCat + `monthly_pro` $9.99/mo 3-day trial — replace `src/lib/subscription/subscriptionClient.ts` and wrap `<SubscriptionGate>` in `layout.tsx`), then TestFlight / submit.

**Do not** re-author content modules or mock exams unless a build error requires it. Follow `apple-handoff/CHECKLIST.md`.
