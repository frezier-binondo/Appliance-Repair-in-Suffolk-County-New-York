const fs = require('fs');
const path = require('path');

const serviceLocationsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/data/serviceLocationsData.json'), 'utf8')
);

const BASE_URL = 'https://suffolkcountyappliancerepair.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
  { url: `${BASE_URL}/appliance-repair-services/`, priority: '0.9', changefreq: 'weekly' },
  { url: `${BASE_URL}/service-areas/`, priority: '0.9', changefreq: 'weekly' },
  { url: `${BASE_URL}/contact/`, priority: '0.9', changefreq: 'weekly' },
  { url: `${BASE_URL}/frequently-asked-questions/`, priority: '0.8', changefreq: 'weekly' },
  { url: `${BASE_URL}/blog/`, priority: '0.8', changefreq: 'daily' },
  { url: `${BASE_URL}/reviews/`, priority: '0.8', changefreq: 'weekly' },
  { url: `${BASE_URL}/appliance-brands/`, priority: '0.8', changefreq: 'monthly' },
  { url: `${BASE_URL}/about-us/`, priority: '0.7', changefreq: 'monthly' },
];

const serviceSilos = [
  'refrigerator-repair',
  'freezer-repair',
  'washer-repair',
  'dryer-repair',
  'dishwasher-repair',
  'oven-repair',
  'stove-range-repair',
  'cooktop-repair',
  'microwave-repair'
].map(s => ({
  url: `${BASE_URL}/${s}/`,
  priority: '0.9',
  changefreq: 'weekly'
}));

const locationHubs = [
  'appliance-repair-huntington-ny',
  'appliance-repair-smithtown-ny',
  'appliance-repair-islip-ny',
  'appliance-repair-babylon-ny',
  'appliance-repair-patchogue-ny'
].map(l => ({
  url: `${BASE_URL}/${l}/`,
  priority: '0.9',
  changefreq: 'weekly'
}));

const blogPosts = [
  'why-refrigerator-not-cooling',
  'why-is-freezer-frosting-up',
  'washing-machine-not-draining-troubleshooting',
  'dryer-takes-too-long-fire-hazard',
  'dishwasher-leaves-dishes-dirty',
  'gas-vs-electric-stove-troubleshooting'
].map(b => ({
  url: `${BASE_URL}/blog/${b}/`,
  priority: '0.7',
  changefreq: 'monthly'
}));

const serviceTownPages = serviceLocationsData.map(item => ({
  url: `${BASE_URL}${item.slug}`,
  priority: '0.85',
  changefreq: 'weekly'
}));

const allUrls = [
  ...staticPages,
  ...serviceSilos,
  ...locationHubs,
  ...serviceTownPages,
  ...blogPosts
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const entry of allUrls) {
  xml += `  <url>\n`;
  xml += `    <loc>${entry.url}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
  xml += `    <priority>${entry.priority}</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log(`Generated public/sitemap.xml with ${allUrls.length} URLs successfully!`);
