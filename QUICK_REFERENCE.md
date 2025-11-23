# 🚀 Quick Reference Card

## Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy
```

## NPM Scripts

| Command | What It Does |
|---------|------------|
| `npm run dev` | Start dev server (http://localhost:3000) |
| `npm run build` | Build + generate sitemap + robots.txt |
| `npm run preview` | Test production build locally |
| `npm run type-check` | Check for TypeScript errors |

## Using MetaTags Component

```tsx
import { MetaTags } from '@/components/MetaTags';

export const Page = () => {
  return (
    <>
      <MetaTags
        title="Page Title"
        description="Page description"
        image="/og-image.jpg"
        url="https://elunaacademy.com/page"
      />
      {/* Page content */}
    </>
  );
};
```

## Using StructuredData Components

```tsx
import { 
  OrganizationSchema, 
  CourseSchema,
  BreadcrumbSchema 
} from '@/components/StructuredData';

// Organization (use once on homepage)
<OrganizationSchema />

// Course
<CourseSchema
  name="Try Ngaji"
  description="Learn Quranic recitation"
  image="/try-ngaji.png"
  courseCount={8}
/>

// Breadcrumb
<BreadcrumbSchema
  items={[
    { name: 'Home', url: 'https://elunaacademy.com' },
    { name: 'Courses', url: 'https://elunaacademy.com#categories' },
    { name: 'Try Ngaji', url: 'https://elunaacademy.com/try-ngaji' }
  ]}
/>
```

## File Locations

| File | Path | Purpose |
|------|------|---------|
| SEO Meta Tags | `src/components/MetaTags.tsx` | Update page titles & descriptions |
| Structured Data | `src/components/StructuredData.tsx` | JSON-LD schemas |
| Entry Point | `src/main.tsx` | Vite entry point |
| Vite Config | `vite.config.ts` | Build configuration |
| TypeScript Config | `tsconfig.json` | Compiler settings |
| HTML Head | `Index.html` | Global meta tags |
| Sitemap (generated) | `dist/sitemap.xml` | Search engine crawler |
| Robots (generated) | `dist/robots.txt` | Bot directives |

## Environment Variables

Create `.env.local`:
```env
VITE_PUBLIC_URL=https://elunaacademy.com
VITE_API_URL=https://api.elunaacademy.com
```

Access in code:
```tsx
const publicUrl = import.meta.env.VITE_PUBLIC_URL;
```

## Key Differences from Create React App

| Feature | CRA | Vite |
|---------|-----|------|
| Build Time | 60s | 8s ⚡ |
| Dev Server | Slow | Instant ⚡ |
| Entry Point | `index.tsx` | `main.tsx` |
| Build Tool | react-scripts | Vite |
| React Version | 18 | 19 |
| HMR | Slow | Instant |

## Deployment (Pick One)

**Vercel:**
```bash
npm install -g vercel
vercel
# That's it!
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**Manual (Any Host):**
```bash
npm run build
# Upload dist/ folder
```

## Verify Setup

```bash
# Type check
npm run type-check

# Build test
npm run build

# Preview
npm run preview
```

## Common Paths

| Pattern | Path |
|---------|------|
| Import from src | `import X from '@/components/X'` |
| Import CSS | `import './style.css'` |
| Import images | `<img src="/image.png" />` |
| Use env var | `import.meta.env.VITE_*` |

## Update Meta Tags Per Page

```tsx
// Home page (already done in App.tsx)
<MetaTags
  title="Eluna Academy - Islamic Learning Platform"
  url="https://elunaacademy.com/"
/>

// Course page (example)
<MetaTags
  title="Try Ngaji - Quranic Studies at Eluna Academy"
  description="Learn Quranic recitation with expert instructors"
  image="/try-ngaji.png"
  url="https://elunaacademy.com/try-ngaji"
  type="article"
/>
```

## SEO Checklist Before Publishing

- [ ] Run `npm run type-check` (no errors)
- [ ] Run `npm run build` (succeeds)
- [ ] Check `dist/sitemap.xml` exists
- [ ] Check `dist/robots.txt` exists
- [ ] Test `npm run preview`
- [ ] Verify meta tags in HTML source
- [ ] Check images have alt text
- [ ] Test on mobile
- [ ] Deploy to Vercel/Netlify
- [ ] Submit sitemap to Google Search Console

## File Structure (Important)

```
src/
├── main.tsx              ← Entry point (NOT index.tsx)
├── App.tsx              ← Root component
├── components/
│   ├── MetaTags.tsx    ← USE THIS for page SEO
│   └── ...
public/
├── index.html           ← SEO meta tags here
├── sitemap.xml          ← Generated on build
└── robots.txt           ← Generated on build
```

## Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Module not found | Check import paths (use `@/components/X`) |
| Tailwind not working | Ensure `@tailwind` in `src/index.css` |
| HMR not working | Restart dev server: `npm run dev` |
| Port 3000 in use | Change port in `vite.config.ts` |
| Build fails | Run `npm run type-check` first |
| Components not updating | Clear browser cache |

## Performance Tips

```tsx
// ✅ Good - Lazy load heavy components
const HeavyComponent = React.lazy(() => import('./Heavy'));

// ✅ Good - Use images optimally
<img src="/image.webp" alt="description" loading="lazy" />

// ✅ Good - Code splitting automatic with Vite
// (no extra config needed)

// ✅ Good - Remove unused dependencies
npm prune
```

---

**Save this file for quick reference!** 📌
