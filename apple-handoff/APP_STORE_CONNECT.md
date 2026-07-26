# App Store Connect — field draft

Use these values when creating the app record. Adjust marketing copy if branding changes before submit.

## Identity

| Field | Value |
|-------|--------|
| Name | BCBA Study Workbook |
| Bundle ID | `com.euphoria.bcbaworkbook` |
| SKU | `bcba-study-workbook` (or any unique SKU you prefer) |
| Primary language | English (U.S.) |

## Subscription

| Field | Value |
|-------|--------|
| Group name | BCBA Workbook Pro |
| Product ID | `monthly_pro` |
| Reference name | Monthly Pro |
| Price | $9.99 USD / month |
| Introductory offer | Free trial — 3 days |
| Type | Auto-renewable subscription |

## Privacy (nutrition labels)

Align with in-app `/privacy` page (current design):

- **Data Not Collected** for analytics / contact info / user content leaving the device
- Purchases handled by Apple; entitlement signal via StoreKit / RevenueCat
- If RevenueCat identifiers are used, disclose per Apple + RevenueCat guidance before submit
- Update both this listing and `src/app/privacy/page.tsx` if data practices change

## Suggested listing copy (draft)

**Subtitle (30 chars max):**  
`Cooper chapters · mocks · drills`

**Description (draft):**

```
BCBA Study Workbook is an interactive study app aligned with Cooper, Heron, and Heward.

• Chapter readings with citations and practice
• Activities, worksheets, and chapter quizzes
• Full-length BCBA mock exams with domain feedback
• Graph and SCC labs
• Study schedule helper and companion resources

Progress stays on your device. Start with a 3-day free trial, then continue with a monthly subscription.
```

**Keywords (draft, comma-separated, 100 chars max):**  
`BCBA,ABA,behavior analysis,Cooper,mock exam,study,quiz,SAFMEDS,BACB`

## Review notes (draft)

```
This app is a study workbook. Subscription unlocks full content after a 3-day free trial via StoreKit.
No account or login is required. Progress is stored on-device only.
Sandbox tester: <add when created>
```

## Screenshots to capture (after Simulator/device build)

Capture from the signed iOS build, not only desktop Chrome:

1. Home / chapter list  
2. Chapter reading + quiz  
3. Mock exam question + feedback  
4. Labs (graph or SCC)  
5. Subscribe / paywall screen  

Use the device sizes App Store Connect requires at submission time.
