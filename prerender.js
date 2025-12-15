import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read App.tsx and extract routes
const appTsxPath = path.join(__dirname, 'src', 'App.tsx');
const appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

// Extract all route paths using regex
const routeRegex = /<Route\s+path="([^"]+)"/g;
const routes = [];
let match;

while ((match = routeRegex.exec(appTsxContent)) !== null) {
  routes.push(match[1]);
}

console.log(`Found ${routes.length} routes in App.tsx:`, routes);

const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

let created = 0;
routes.forEach(route => {
  if (route === '/') return; // Skip root, already has index.html
  
  const routePath = path.join(distPath, route);
  const routeIndexPath = path.join(routePath, 'index.html');
  
  // Create directory for route
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  // Copy index.html to route directory
  fs.writeFileSync(routeIndexPath, indexHtml);
  console.log(`✓ Created ${route}/index.html`);
  created++;
});

console.log(`\n✅ Prerendering complete! Created ${created} static pages.`);

