# 📸 Screenshots Guide

Guidelines for adding and optimizing project screenshots for your portfolio.

## 📁 Directory Structure

Place all your screenshots in:
```
src/assets/Screenshot/
```

## 🖼️ Image Specifications

### Recommended Sizes
- **Desktop screenshots**: 1200px × 800px (3:2 ratio)
- **Mobile screenshots**: 750px × 1334px (9:16 ratio)
- **Thumbnail images**: 600px × 400px (3:2 ratio)

### File Formats
- **Preferred**: PNG (for UI screenshots with text)
- **Alternative**: JPG (for photos or large images)
- **Avoid**: GIF (unless animated)

### File Naming Convention
Use descriptive, lowercase names with hyphens:
```
✅ Good:
- ecommerce-dashboard-home.png
- weather-app-mobile.png
- task-manager-kanban.png

❌ Avoid:
- IMG_1234.png
- Screenshot 2024-01-15.png
- project1.png
```

## 🎨 Screenshot Tips

### Capture Best Practices

1. **Clean the interface**
   - Remove demo/test data
   - Use realistic sample data
   - Hide sensitive information
   - Close unnecessary browser tabs

2. **Resolution & Quality**
   - Use retina/high-DPI displays if possible
   - Capture at 2x resolution, scale down
   - Maintain aspect ratio

3. **Browser Window**
   - Clean browser chrome (no extensions visible)
   - Full screen or fixed width
   - Remove address bar if possible

4. **Composition**
   - Show the most important features
   - Include navigation for context
   - Highlight key functionality

### Tools for Taking Screenshots

**Windows:**
- Windows Snipping Tool (Win + Shift + S)
- [ShareX](https://getsharex.com/) - Free, powerful
- [Greenshot](https://getgreenshot.org/) - Free, simple

**Mac:**
- Cmd + Shift + 4 (native)
- [CleanShot X](https://cleanshot.com/) - Paid, professional
- [Monosnap](https://monosnap.com/) - Free

**Cross-platform:**
- [Flameshot](https://flameshot.org/) - Free, open-source
- Browser DevTools (F12) > Take screenshot

### Editing Screenshots

**Free Tools:**
- [GIMP](https://www.gimp.org/) - Full-featured editor
- [Photopea](https://www.photopea.com/) - Online Photoshop alternative
- [Figma](https://www.figma.com/) - For mockups and designs

**What to Edit:**
1. Crop to relevant area
2. Resize to recommended dimensions
3. Add subtle drop shadow (optional)
4. Annotate important features (optional)
5. Blur sensitive information

## 🗜️ Image Optimization

### Optimize Before Upload

**Online Tools:**
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced optimization
- [ImageOptim](https://imageoptim.com/) - Mac app

**Command Line:**
```bash
# Using ImageMagick (install first)
# Resize and optimize
magick input.png -resize 1200x800 -quality 85 output.png

# Batch process all PNGs
for %f in (*.png) do magick "%f" -resize 1200x800 -quality 85 "optimized-%f"
```

### Size Guidelines
- Individual images: < 500 KB (ideally < 200 KB)
- Total screenshots per project: < 2 MB

## 📝 Adding Screenshots to JSON

### Single Screenshot
```json
{
  "id": "proj1",
  "name": "Project Name",
  "imageUrls": ["assets/Screenshot/project-home.png"]
}
```

### Multiple Screenshots
```json
{
  "id": "proj1",
  "name": "Project Name",
  "imageUrls": [
    "assets/Screenshot/project-home.png",
    "assets/Screenshot/project-dashboard.png",
    "assets/Screenshot/project-settings.png"
  ]
}
```

### Using External URLs
```json
{
  "id": "proj1",
  "name": "Project Name",
  "imageUrls": [
    "https://imgur.com/your-image.png",
    "https://i.ibb.co/your-image.jpg"
  ]
}
```

## 🎯 Screenshot Checklist

Before adding screenshots to your portfolio:

- [ ] High resolution (minimum 1200px width)
- [ ] Clear and focused on main features
- [ ] No sensitive/personal information visible
- [ ] Consistent style across all screenshots
- [ ] Optimized file size (< 500 KB each)
- [ ] Proper file naming convention
- [ ] Placed in `src/assets/Screenshot/` directory
- [ ] Referenced correctly in `portfolio-data.json`
- [ ] Tested that images load correctly locally
- [ ] Verified images work in production build

## 🎨 Creating Mockups

If you don't have live screenshots, create mockups:

### Design Tools
- [Figma](https://www.figma.com/) - Professional, free
- [Canva](https://www.canva.com/) - Simple, templates available
- [Adobe XD](https://www.adobe.com/products/xd.html) - Professional

### Device Mockup Generators
- [Shots.so](https://shots.so/) - Beautiful browser mockups
- [Screely](https://www.screely.com/) - Browser window mockups
- [Mockuphone](https://mockuphone.com/) - Mobile device mockups
- [Smartmockups](https://smartmockups.com/) - Various devices

### Template Resources
- [Unsplash](https://unsplash.com/) - Free stock photos
- [UI8](https://ui8.net/) - Premium templates
- [Dribbble](https://dribbble.com/) - Design inspiration

## 🚫 Common Mistakes to Avoid

1. **Too large file sizes** → Slow page load
2. **Low resolution** → Blurry on retina displays
3. **Inconsistent dimensions** → Looks unprofessional
4. **Cluttered screenshots** → Confusing for viewers
5. **No alt text** → Poor accessibility (add via JSON description)
6. **Watermarks** → Looks unprofessional
7. **Dark screenshots on dark background** → Hard to see borders

## 🔍 Testing Your Screenshots

### Before Deployment
```bash
# Start dev server
npm start

# Check in browser at http://localhost:4200
# Verify:
# 1. All images load correctly
# 2. No broken image icons
# 3. Images are sharp and clear
# 4. Load time is reasonable
```

### After Deployment
1. Test on different devices
2. Check load times with browser DevTools
3. Verify images on slow connections
4. Test in different browsers

## 📊 Image Performance

Check your image performance:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Performance Tips
- Lazy load images (already implemented)
- Use WebP format when possible
- Implement responsive images
- Add loading placeholders
- Cache images with service workers

## 🎓 Example Project Structure

```
src/assets/Screenshot/
├── ecommerce/
│   ├── ecommerce-home.png (250 KB)
│   ├── ecommerce-cart.png (180 KB)
│   └── ecommerce-checkout.png (220 KB)
├── weather-app/
│   ├── weather-home.png (300 KB)
│   └── weather-forecast.png (280 KB)
└── task-board/
    ├── task-board-kanban.png (200 KB)
    └── task-board-calendar.png (190 KB)
```

---

**Pro Tip**: Take screenshots as you build your projects. It's easier than recreating them later!

Need help? Check out the [PORTFOLIO-DATA-GUIDE.md](PORTFOLIO-DATA-GUIDE.md) for JSON structure details.
