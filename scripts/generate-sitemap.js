import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

const baseUrl = 'https://elunaacademy.com';

const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'daily',
  },
  {
    path: '/#home',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/#about',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/#categories',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/#contact',
    priority: '0.7',
    changefreq: 'monthly',
  },
];

function generateSitemap() {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  const outputPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(outputPath, xmlContent, 'utf-8');
  console.log(`✓ Sitemap generated at ${outputPath}`);
}

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

generateSitemap();
