# Eluna Academy - Vite + React 19 + TypeScript SEO Setup

## 🚀 What's Changed

This project has been migrated from Create React App to **Vite + React 19** with full **2025 Google SEO optimization**.

### Key Features Implemented

✅ **Vite Configuration**
- Lightning-fast dev server with HMR
- Optimized production builds with code splitting
- ESM module support

✅ **React 19 & TypeScript 5.3**
- Latest React features and improvements
- Strict type checking
- Modern JavaScript support (ES2020+)

✅ **Complete SEO Optimization**
- ✓ Comprehensive meta tags (OpenGraph, Twitter Cards)
- ✓ Canonical URLs
- ✓ robots.txt auto-generation
- ✓ sitemap.xml auto-generation
- ✓ Fallback HTML content for non-JS rendering
- ✓ Structured metadata
- ✓ Mobile-friendly meta tags

✅ **MetaTags Component**
- Reusable component to update head tags on any page
- TypeScript support
- Easy integration with routes

✅ **Build Optimization**
- Code splitting with Vite
- Minification with Terser
- Console.log removal in production
- Preload critical resources

## 📦 Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Development Server
```bash
npm run dev
```
Server runs at `http://localhost:3000` with hot reload.

### Step 3: Build for Production
```bash
npm run build
```
This will:
1. Compile TypeScript
2. Build with Vite
3. Generate `sitemap.xml`
4. Generate `robots.txt`

### Step 4: Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── main.tsx              # Vite entry point
├── App.tsx              # Root component
├── index.css            # Global styles (Tailwind)
├── types.ts             # TypeScript definitions
├── components/
│   ├── MetaTags.tsx     # SEO meta tags component ⭐ NEW
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── About.tsx
│   ├── Footer.tsx
│   ├── SignUpModal.tsx
│   └── icons/
├── config/
│   └── emailjs.ts       # EmailJS configuration
└── assets/

public/
├── index.html           # ⭐ UPDATED with full SEO tags
├── favicon.ico          # Site icon
├── sitemap.xml          # ⭐ Auto-generated on build
├── robots.txt           # ⭐ Auto-generated on build
├── try-ngaji.png
├── try-hafazan.png
└── try-upkk.png

vite.config.ts           # ⭐ NEW Vite configuration
tsconfig.json            # ⭐ UPDATED for Vite
tsconfig.node.json       # ⭐ NEW Node config

scripts/
├── generate-sitemap.js  # ⭐ NEW
└── generate-robots.js   # ⭐ NEW
```

## 🎯 Using the MetaTags Component

Update SEO tags on any page:

```tsx
import { MetaTags } from '@/components/MetaTags';

export const TryNgajiPage = () => {
  return (
    <>
      <MetaTags
        title="Try Ngaji - Learn Quranic Recitation at Eluna Academy"
        description="Join our expert-led Quranic studies classes online and in-person"
        image="/try-ngaji.png"
        url="https://elunaacademy.com/try-ngaji"
        type="article"
      />
      {/* Page content */}
    </>
  );
};
```

## 🔧 Environment Variables

Create a `.env` file (or `.env.local` for local development):

```env
VITE_API_URL=https://api.elunaacademy.com
VITE_PUBLIC_URL=https://elunaacademy.com
```

## 📱 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Zero configuration needed - Vercel auto-detects Vite.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Manual Deployment
1. Run `npm run build`
2. Deploy the `dist` folder to your hosting

## ✨ SEO Checklist (2025 Google Standards)

- [x] Responsive Design (Mobile-First)
- [x] Fast Loading (Vite optimization)
- [x] Proper Meta Tags
- [x] Canonical URLs
- [x] Open Graph Tags
- [x] Twitter Cards
- [x] robots.txt
- [x] sitemap.xml
- [x] Structured Data Ready
- [x] Fallback Content for JS failures
- [x] Alt text on images (handled in components)
- [x] Proper heading hierarchy
- [x] Internal linking with smooth scroll

## 🚀 Performance Tips

1. **Images**: Use WebP format where possible
   ```tsx
   <picture>
     <source srcSet="image.webp" type="image/webp" />
     <img src="image.jpg" alt="description" />
   </picture>
   ```

2. **Code Splitting**: Vite handles this automatically

3. **Lazy Loading**: Use React.lazy() for large components
   ```tsx
   const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
   ```

4. **Resource Hints**: Already configured in index.html
   - preconnect to Google Fonts
   - preload critical images

## 🔐 Security Headers

Add to your hosting provider (Vercel/Netlify):
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' cdn.tailwindcss.com;
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 📊 Testing

```bash
# Type checking
npm run type-check

# Build test
npm run build
npm run preview
```

## 🐛 Troubleshooting

**Problem**: Module not found errors
**Solution**: Check that paths in `tsconfig.json` match your imports

**Problem**: Tailwind styles not applying
**Solution**: Ensure `index.css` imports `@tailwind` directives

**Problem**: HMR not working in dev
**Solution**: Check that Vite server is running on correct port (3000)

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React 19](https://react.dev/)
- [TypeScript 5.3](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs)
- [Open Graph Protocol](https://ogp.me/)

## 📄 License

All rights reserved © 2025 Eluna Academy
