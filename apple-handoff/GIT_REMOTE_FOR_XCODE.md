# Git remote URL for Xcode

Paste this exact URL when Xcode asks to **Update Remote URL**:

```text
https://github.com/sarasmithmft-del/bcba-study-app.git
```

## Or set it in Terminal (Mac)

```bash
cd ~/Desktop/"bcba study app"
git remote set-url origin https://github.com/sarasmithmft-del/bcba-study-app.git
git remote -v
git pull
```

You should see:

```text
origin  https://github.com/sarasmithmft-del/bcba-study-app.git (fetch)
origin  https://github.com/sarasmithmft-del/bcba-study-app.git (push)
```

## Notes

- Use **HTTPS** (the URL above). Do not paste a temporary `x-access-token` URL.
- Sign in with your **GitHub** account if prompted (not your Apple ID).
- Repo name: `bcba-study-app`
- Owner: `sarasmithmft-del`
