import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

const robotsContent = `# Eluna Academy robots.txt
# Generated automatically for SEO optimization

# Allow all bots
User-agent: *
Allow: /
Disallow: /admin/
Disallow: *.json$
Disallow: /*?*sort=
Disallow: /*?*filter=

# Specific rules for Googlebot
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Specific rules for Bingbot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Sitemap location
Sitemap: https://elunaacademy.com/sitemap.xml

# Don't crawl certain resources
User-agent: *
Disallow: /*.pdf$
Disallow: /*.zip$

# Rate limiting
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10
`;

function generateRobots() {
  const outputPath = path.join(distDir, 'robots.txt');
  fs.writeFileSync(outputPath, robotsContent, 'utf-8');
  console.log(`✓ robots.txt generated at ${outputPath}`);
}

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

generateRobots();
