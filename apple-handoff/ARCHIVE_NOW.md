# Archive keeps failing — do this

Organizer opens **only after a successful Archive**. A failed Archive never opens it.

## Most likely cause (your earlier error)

> Your team has no devices… No profiles for `com.euphoria.bcbaworkbook`

**Fix (pick one):**

1. **Plug in an iPhone** → Trust → in Xcode set destination to that iPhone → press ▶ once  
   Then: destination **Any iOS Device (arm64)** → **Product → Archive**
2. Or register any device at  
   https://developer.apple.com/account/resources/devices/list  
   then Archive again.

## Get the real error (don’t guess)

### Option A — Xcode
1. **Product → Archive**
2. When it fails: **View → Navigators → Reports** (or Cmd+9)
3. Click the failed Archive
4. Copy the **first red `error:` line**

### Option B — Terminal (best)
From your git clone:

```bash
cd "$HOME/Desktop/bcba study app"
./scripts/archive-and-show-errors.sh
```

Then open `~/Desktop/BCBA-ARCHIVE-LOG.txt` or paste the filtered errors from Terminal.

## Checklist before Archive

- [ ] Open **Desktop** project: `~/Desktop/BCBA Study Workbook/…xcodeproj`
- [ ] Signing → Team = your name (**Admin**), Automatically manage signing ON
- [ ] Bundle ID = `com.euphoria.bcbaworkbook`
- [ ] Destination = **Any iOS Device (arm64)** (not Simulator)
- [ ] **File → Packages → Resolve Package Versions** finished
- [ ] App icon present (Assets → AppIcon)
- [ ] At least one device registered on the team (see above)
