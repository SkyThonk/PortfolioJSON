# ⚡ Quick Start Guide

Get your portfolio up and running in 10 minutes!

## 📦 Installation (2 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/SkyThonk/PortfolioJSON.git
cd PortfolioJSON

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Open `http://localhost:4200` in your browser. ✅

---

## ✏️ Customize Your Portfolio (5 minutes)

### Edit `src/assets/data/portfolio-data.json`

1. **Personal Info** (lines 2-27)
   - Update name, title, email, phone
   - Add your social media links
   - Write your summary and about sections

2. **Experience** (lines 28-85)
   - Add your work history
   - List responsibilities and technologies

3. **Education** (lines 86-105)
   - Add your degrees and certifications

4. **Skills** (lines 106-130)
   - List your technical skills
   - Organize by categories

5. **Projects** (lines 250-320)
   - Add your projects
   - Include screenshots and links

6. **Testimonials** (lines 321-400)
   - Add client or colleague recommendations

### Add Project Screenshots

1. Place images in `src/assets/Screenshot/`
2. Reference in JSON: `"imageUrls": ["assets/Screenshot/my-project.png"]`

**Need detailed help?** See [PORTFOLIO-DATA-GUIDE.md](PORTFOLIO-DATA-GUIDE.md)

---

## 🏗️ Build for Production (1 minute)

```bash
npm run build
```

Output will be in `dist/Portfolio/browser/`

---

## 🚀 Deploy to Firebase (2 minutes)

### First Time Setup

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Initialize Firebase
firebase init

# Select:
# - Hosting
# - Use existing project or create new
# - Public directory: dist/Portfolio/browser
# - Single-page app: Yes
# - Overwrite index.html: No
```

### Deploy

```bash
# 1. Build
npm run build

# 2. Deploy
firebase deploy
```

Your site will be live at: `https://your-project.web.app` 🎉

**Need detailed help?** See [FIREBASE-DEPLOYMENT.md](FIREBASE-DEPLOYMENT.md)

---

## 📝 Checklist

- [ ] Updated personal information
- [ ] Added work experience
- [ ] Listed education
- [ ] Added skills with icons
- [ ] Added project screenshots
- [ ] Included testimonials
- [ ] Updated social links
- [ ] Tested locally (`npm start`)
- [ ] Built successfully (`npm run build`)
- [ ] Deployed to Firebase (`firebase deploy`)

---

## 🆘 Common Issues

### Port 4200 already in use
```bash
ng serve --port 4201
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Firebase deployment shows old content
```bash
# Hard refresh browser: Ctrl+Shift+R
# Or clear browser cache
```

### JSON syntax errors
- Use [JSONLint](https://jsonlint.com/) to validate
- Check for missing/extra commas
- Ensure all quotes are properly closed

---

## 📚 Full Documentation

- **[README.md](README.md)** - Complete project documentation
- **[PORTFOLIO-DATA-GUIDE.md](PORTFOLIO-DATA-GUIDE.md)** - Detailed JSON structure guide
- **[FIREBASE-DEPLOYMENT.md](FIREBASE-DEPLOYMENT.md)** - Complete deployment guide

---

## 🎯 Next Steps

1. ✅ Customize your content
2. 🎨 Add your personal touch
3. 📱 Test on mobile devices
4. 🚀 Deploy and share!
5. ⭐ Star the repo if you found it helpful!

---

**Made with ❤️ by [SkyThonk](https://github.com/SkyThonk)**

Questions? Open an issue on GitHub!
