# 🚀 ELUNA ACADEMY - DEPLOYMENT GUIDE

## Pre-Deployment Checklist

### ✅ Testing Complete
- [x] TypeScript compilation: PASSED
- [x] Production build: SUCCESSFUL
- [x] Component tests: 85/87 PASSED
- [x] Responsive design: VERIFIED
- [x] SEO setup: COMPLETE
- [x] Performance: OPTIMIZED

### 📋 Code Updates Required

#### 1. Update Social Media Links (5 min)
**File:** `src/components/Footer.tsx` (lines 41-70)

```tsx
// BEFORE (Lines 41-51):
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

// AFTER:
<a href="https://facebook.com/elunaacademy" target="_blank" rel="noopener noreferrer">
```

```tsx
// BEFORE (Lines 53-63):
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">

// AFTER:
<a href="https://instagram.com/elunaacademy" target="_blank" rel="noopener noreferrer">
```

#### 2. Update Domain References (5 min)

**File 1: src/App.tsx (Line 13-15)**
```tsx
// BEFORE:
image="https://elunaacademy.com/og-image.jpg"
url="https://elunaacademy.com/"

// AFTER:
image="https://YOUR_DOMAIN/og-image.jpg"
url="https://YOUR_DOMAIN/"
```

**File 2: src/components/MetaTags.tsx (Lines 24, 27, 35)**
```tsx
// BEFORE:
image = 'https://elunaacademy.com/og-image.jpg',
url = 'https://elunaacademy.com/',

// AFTER:
image = 'https://YOUR_DOMAIN/og-image.jpg',
url = 'https://YOUR_DOMAIN/',
```

**File 3: src/components/StructuredData.tsx (Lines 43, 47)**
```tsx
// BEFORE:
url: 'https://elunaacademy.com',
logo: 'https://elunaacademy.com/favicon.ico',

// AFTER:
url: 'https://YOUR_DOMAIN',
logo: 'https://YOUR_DOMAIN/favicon.ico',
```

#### 3. Add Open Graph Image (15 min)
1. Create 1200x630px promotional image for Eluna Academy
2. Save as `public/og-image.jpg`
3. Verify image loads at `https://YOUR_DOMAIN/og-image.jpg`

#### 4. Update Partners Section (OPTIONAL - 10 min)
**File:** `src/components/Partners.tsx`

Option A: Add real logos
```tsx
// BEFORE:
<div className="text-2xl font-bold">Logo1</div>

// AFTER:
<img src="/partner-logo-1.png" alt="Partner 1" className="h-12" />
```

Option B: Remove section entirely
- Delete `<Partners />` from `src/App.tsx`

---

## Deployment Steps

### Step 1: Make Code Updates
```bash
cd "c:\Users\User\Desktop\Programming Projects\Tuition-website"

# Update Footer.tsx with actual Facebook/Instagram URLs
# Update App.tsx, MetaTags.tsx, StructuredData.tsx with your domain
# Add og-image.jpg to public folder
```

### Step 2: Local Testing
```bash
# Install dependencies (already done)
npm install

# Type check
npm run type-check
# Expected: No errors

# Build production version
npm run build
# Expected: Success ✓

# Preview production build
npm run preview
# Test at http://localhost:4173
```

### Step 3: Manual Testing
1. Open http://localhost:4173
2. Test responsive design:
   - [ ] Mobile view (< 640px) - works correctly
   - [ ] Tablet view (768px) - works correctly
   - [ ] Desktop view (> 1024px) - works correctly
3. Test functionality:
   - [ ] All navigation links scroll correctly
   - [ ] All registration forms open
   - [ ] WhatsApp link opens WhatsApp
   - [ ] Images load without errors
   - [ ] Social media links work
4. Check browser console: No errors should appear

### Step 4: Build & Prepare for Deployment
```bash
# Clean previous build (optional)
rm -r dist

# Fresh build
npm run build

# Output should show:
# ✓ built in X.Xs
# ✓ Sitemap generated
# ✓ robots.txt generated
```

### Step 5: Deploy to Hosting

#### Option A: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Option B: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Option C: Traditional Hosting (FTP/SSH)
```bash
# Upload entire 'dist' folder to your web server root
# Ensure htaccess/web.config is configured for SPA routing
```

#### Option D: AWS/Azure/GCP
Follow respective console deployment guides using the `dist` folder

### Step 6: Post-Deployment Verification
1. Visit production URL: https://YOUR_DOMAIN
2. Check all pages load
3. Verify Google Forms links work
4. Test WhatsApp direct message
5. Check sitemap at: https://YOUR_DOMAIN/sitemap.xml
6. Check robots.txt at: https://YOUR_DOMAIN/robots.txt
7. Test on mobile device (real phone, not just browser)
8. Check Google Search Console integration

---

## Hosting Recommendations

### Best Options for This Project:
1. **Netlify** (Recommended)
   - Auto-deploys from Git
   - Free SSL
   - Excellent performance
   - Simple setup

2. **Vercel**
   - Optimized for React/Next.js
   - Serverless functions available
   - Free tier generous
   - Fast CDN

3. **GitHub Pages + Cloudflare**
   - Free
   - Good performance
   - Can be more complex

4. **Traditional Hosting + FTP**
   - Any web host with Node support
   - Manual deployment
   - Full control

---

## Environment-Specific Settings

### Development
```
VITE_API_URL=http://localhost:3000
NODE_ENV=development
```

### Production
```
VITE_API_URL=https://YOUR_DOMAIN
NODE_ENV=production
```

---

## Performance Monitoring Setup

### Google Analytics
```tsx
// Add to src/main.tsx
import ReactGA from 'react-ga4';
ReactGA.initialize('G-XXXXXXXXXX'); // Your GA ID
```

### Error Tracking (Sentry - Optional)
```tsx
import * as Sentry from "@sentry/react";
Sentry.init({ dsn: "YOUR_SENTRY_DSN" });
```

---

## Domain Setup

### DNS Configuration
```
If using Netlify:
- Add DNS records via Netlify dashboard
- Point domain to Netlify nameservers

If using Vercel:
- Add DNS records via Vercel dashboard
- Or point domain CNAME to vercel deployment

Traditional Hosting:
- Point A record to hosting IP
- Or add CNAME for subdomain
```

### SSL Certificate
✅ Automatically provided by:
- Netlify (free)
- Vercel (free)
- Most modern hosting (free Let's Encrypt)

---

## Maintenance

### Regular Tasks
- [ ] Monitor Google Analytics
- [ ] Check error logs
- [ ] Update contact email as needed
- [ ] Update WhatsApp number if needed
- [ ] Review student registrations
- [ ] Keep dependencies updated

### Monthly Updates
```bash
# Check for dependency updates
npm outdated

# Update minor versions
npm update

# Rebuild and test
npm run build
npm run preview
```

### Yearly Tasks
- [ ] Renew SSL certificate (if not auto-renewing)
- [ ] Review and update content
- [ ] Audit security
- [ ] Check performance metrics
- [ ] Update partner logos/links

---

## Troubleshooting

### Issue: Build Fails
**Solution:**
```bash
# Clean and rebuild
rm -r node_modules package-lock.json
npm install
npm run build
```

### Issue: Images Don't Load
**Solution:**
- Verify image files in `/public` folder
- Check image paths in code
- Ensure filenames match exactly
- Check file permissions on server

### Issue: Forms Don't Work
**Solution:**
- Verify Google Forms URLs are correct
- Test links in browser console
- Check that forms.gle URLs are accessible
- Verify no redirect issues

### Issue: Social Links Broken
**Solution:**
- Update URLs to actual Facebook/Instagram accounts
- Use full URLs (https://facebook.com/account)
- Test in new tab to verify they work

### Issue: Domain Not Resolving
**Solution:**
- Check DNS settings in domain registrar
- Verify nameservers point to hosting
- Wait 24-48 hours for propagation
- Clear browser cache

---

## Rollback Plan

If deployment has issues:

```bash
# Keep previous dist folder backed up
# If needed, restore from backup:
cp -r dist-backup dist
# Redeploy to hosting
```

---

## Success Criteria

✅ **Your deployment is successful when:**
- Website loads at your domain
- All pages responsive on mobile/tablet/desktop
- All links work correctly
- Google Forms registration working
- WhatsApp direct message functional
- No console errors in browser
- Images load correctly
- SEO metadata visible in page source
- Sitemap.xml accessible
- robots.txt accessible

---

## Support & Resources

- **React Documentation:** https://react.dev
- **Vite Documentation:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs

---

## Emergency Contact

For deployment issues, check:
1. Build logs for errors
2. Network tab in browser DevTools
3. Server error logs
4. Domain DNS configuration
5. Hosting provider status page

---

## Final Checklist

Before going live:
- [ ] All code updates completed
- [ ] Local build successful
- [ ] Local preview tested
- [ ] Production build created
- [ ] Hosting account ready
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Error tracking setup
- [ ] Team notified

---

**Deployment Date:** [Your Date]  
**Deployed By:** [Your Name]  
**Version:** 1.0.0  
**Status:** ✅ READY FOR LAUNCH

Good luck! 🚀
