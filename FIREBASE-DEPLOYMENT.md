# 🔥 Firebase Deployment Guide

Step-by-step guide to deploy your Angular portfolio to Firebase Hosting.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [First Deployment](#first-deployment)
- [Subsequent Deployments](#subsequent-deployments)
- [Custom Domain Setup](#custom-domain-setup)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

### 1. Create Firebase Account
- Go to [Firebase Console](https://console.firebase.google.com/)
- Sign in with your Google account
- No credit card required for the free Spark plan

### 2. Install Firebase CLI

**Windows (PowerShell as Administrator):**
```powershell
npm install -g firebase-tools
```

**Mac/Linux:**
```bash
sudo npm install -g firebase-tools
```

**Verify installation:**
```bash
firebase --version
# Should show version number like 13.x.x
```

---

## Initial Setup

### Step 1: Login to Firebase

```bash
firebase login
```

This will:
1. Open your default browser
2. Ask you to select a Google account
3. Request permission to access Firebase
4. Display success message in terminal

**Troubleshooting login:**
```bash
# If browser doesn't open automatically
firebase login --no-localhost

# To logout
firebase logout

# To check current user
firebase login:list
```

### Step 2: Create Firebase Project

**Option A: Via Firebase Console (Recommended)**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter project name (e.g., "my-portfolio")
4. Choose whether to enable Google Analytics (optional)
5. Click **"Create project"**
6. Wait for project creation (takes ~30 seconds)

**Option B: Via CLI**
```bash
firebase projects:create your-project-id
```

### Step 3: Initialize Firebase in Your Project

Navigate to your project directory:
```bash
cd d:\2025\Projects\Portfolio
```

Run initialization:
```bash
firebase init
```

**Follow the prompts:**

1. **Which Firebase features?**
   ```
   ◯ Realtime Database
   ◯ Firestore
   ◯ Functions
   ◉ Hosting        ← Select this (use spacebar)
   ◯ Storage
   ```
   Press `Space` to select, then `Enter`

2. **Project Setup:**
   ```
   ? Please select an option:
   ❯ Use an existing project
     Create a new project
     Add Firebase to an existing Google Cloud project
   ```
   Select **"Use an existing project"**

3. **Select your project:**
   ```
   ? Select a default Firebase project:
   ❯ my-portfolio-xxxxx (my-portfolio)
   ```

4. **Public directory:**
   ```
   ? What do you want to use as your public directory?
   dist/Portfolio/browser    ← Type this
   ```

5. **Single-page app:**
   ```
   ? Configure as a single-page app (rewrite all urls to /index.html)?
   Yes    ← Select Yes
   ```

6. **Set up automatic builds with GitHub:**
   ```
   ? Set up automatic builds and deploys with GitHub?
   No     ← Select No (you can do this later)
   ```

7. **Overwrite index.html:**
   ```
   ? File dist/Portfolio/browser/index.html already exists. Overwrite?
   No     ← IMPORTANT: Select No
   ```

**Success!** You should see:
```
✔  Firebase initialization complete!
```

This creates two files:
- `.firebaserc` - Stores project configuration
- `firebase.json` - Hosting configuration

---

## First Deployment

### Step 1: Build Your Project

```bash
npm run build
```

This creates optimized production files in `dist/Portfolio/browser/`

**Expected output:**
```
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial chunk files   | Names   |  Raw size
main-ABC123.js        | main    | 234.56 kB | 
...

Output location: dist/Portfolio/browser
```

### Step 2: Test Build Locally (Optional but Recommended)

```bash
firebase serve
```

Open `http://localhost:5000` in your browser to preview.

Press `Ctrl+C` to stop the server.

### Step 3: Deploy to Firebase

```bash
firebase deploy
```

**Expected output:**
```
=== Deploying to 'my-portfolio'...

i  deploying hosting
i  hosting[my-portfolio]: beginning deploy...
i  hosting[my-portfolio]: found 15 files in dist/Portfolio/browser
✔  hosting[my-portfolio]: file upload complete
i  hosting[my-portfolio]: finalizing version...
✔  hosting[my-portfolio]: version finalized
i  hosting[my-portfolio]: releasing new version...
✔  hosting[my-portfolio]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/my-portfolio/overview
Hosting URL: https://my-portfolio-xxxxx.web.app
```

🎉 **Your site is now live!**

---

## Subsequent Deployments

After making changes to your portfolio:

```bash
# 1. Build the project
npm run build

# 2. Deploy to Firebase
firebase deploy

# Optional: Deploy only hosting (faster)
firebase deploy --only hosting
```

---

## Custom Domain Setup

### Step 1: Add Custom Domain

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Hosting** → **Custom domains**
4. Click **"Add custom domain"**
5. Enter your domain (e.g., `johndoe.com` or `www.johndoe.com`)

### Step 2: Verify Domain Ownership

Firebase will provide a TXT record:
```
Type: TXT
Name: @
Value: firebase-hosting-xxxxxxxx
```

Add this to your domain's DNS settings (at your domain registrar).

### Step 3: Add DNS Records

After verification, Firebase will provide A records:
```
Type: A
Name: @
Value: 199.36.158.100

Type: A
Name: @
Value: 199.36.158.101
```

Add these to your DNS settings.

**For `www` subdomain:**
```
Type: A
Name: www
Value: 199.36.158.100

Type: A
Name: www
Value: 199.36.158.101
```

### Step 4: Wait for DNS Propagation

- Can take 24-48 hours
- Check status in Firebase Console
- Use [WhatsMyDNS](https://www.whatsmydns.net/) to check propagation

---

## Firebase Configuration Files

### firebase.json

Your `firebase.json` should look like this:

```json
{
  "hosting": {
    "public": "dist/Portfolio/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(css|js)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### .firebaserc

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

---

## Useful Firebase Commands

```bash
# View your projects
firebase projects:list

# Switch between projects
firebase use another-project-id

# View deploy history
firebase hosting:channel:list

# Deploy to preview channel (staging)
firebase hosting:channel:deploy preview

# View site info
firebase hosting:sites:list

# Open Firebase Console
firebase open
```

---

## Troubleshooting

### Error: "Failed to list Firebase projects"

**Solution:**
```bash
firebase logout
firebase login --reauth
```

### Error: "HTTP Error: 403, Permission denied"

**Solution:**
- Check you're logged in to correct Google account
- Ensure you have Owner or Editor role on Firebase project
- Try: `firebase use --add` and select your project

### Error: "Error: Cannot find module 'webpack'"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Build succeeds but deployment shows old content

**Solution:**
```bash
# Clear build cache
rm -rf dist/
npm run build
firebase deploy --only hosting
```

### Error: "Public directory does not exist"

**Solution:**
- Ensure you've run `npm run build` first
- Check `firebase.json` has correct public directory:
  ```json
  "public": "dist/Portfolio/browser"
  ```

### Site shows Firebase placeholder page

**Solution:**
- You selected "Yes" when asked to overwrite index.html
- Rebuild and redeploy:
  ```bash
  npm run build
  firebase deploy --only hosting
  ```

### Changes not showing after deployment

**Solution:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait 5-10 minutes for CDN propagation
4. Check in incognito/private window

---

## Deployment Checklist

Before deploying, ensure:

- [ ] All personal data updated in `portfolio-data.json`
- [ ] Project screenshots added to `src/assets/Screenshot/`
- [ ] Social links are correct
- [ ] Contact information is accurate
- [ ] Build completes without errors
- [ ] Site tested locally (`firebase serve`)
- [ ] No console errors in browser

---

## Cost Information

Firebase Hosting **Free Tier (Spark Plan)**:
- ✅ 10 GB storage
- ✅ 360 MB/day data transfer
- ✅ Custom domain SSL included
- ✅ 1 hosting site

This is sufficient for most portfolio websites!

**Upgrade to Blaze Plan (Pay as you go):**
- Only if you exceed free tier limits
- ~$0.026 per GB storage after 10 GB
- ~$0.15 per GB bandwidth after 360 MB/day

Most personal portfolios stay within free tier.

---

## Next Steps

1. ✅ Deploy your portfolio
2. 📱 Test on mobile devices
3. 🔍 Check SEO with [PageSpeed Insights](https://pagespeed.web.dev/)
4. 📊 Add Google Analytics (optional)
5. 🎨 Customize your domain
6. 🚀 Share your portfolio!

---

## Additional Resources

- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)
- [Firebase Community](https://firebase.google.com/community)
- [Stack Overflow Firebase Tag](https://stackoverflow.com/questions/tagged/firebase)

---

Need help? Open an issue on GitHub! 🚀
