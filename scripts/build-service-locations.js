const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const wb = XLSX.readFile('Suffolk_County_Appliance_Repair_SEO_Silo.xlsx');
const sheet = wb.Sheets['SEO Silo'];
const rows = XLSX.utils.sheet_to_json(sheet);

// The ONLY 8 services requested by the user to replicate across location pages
const ALLOWED_SERVICES = [
  'refrigerator-repair',
  'freezer-repair',
  'washer-repair',
  'dryer-repair',
  'dishwasher-repair',
  'oven-repair',
  'stove-range-repair',
  'cooktop-repair'
];

const servLoc = rows.filter(r => {
  if (r['Page Type'] !== 'Service + Location') return false;
  const rawSlug = (r['URL Slug'] || '').trim().replace(/^\/|\/$/g, '');
  const serviceSlug = rawSlug.split('/')[0];
  return ALLOWED_SERVICES.includes(serviceSlug);
});

console.log(`Filtered to ${servLoc.length} Service + Location rows for the 8 requested services.`);

const serviceNameMap = {
  'refrigerator-repair': 'Refrigerator Repair',
  'freezer-repair': 'Freezer Repair',
  'washer-repair': 'Washing Machine Repair',
  'dryer-repair': 'Dryer Repair',
  'dishwasher-repair': 'Dishwasher Repair',
  'oven-repair': 'Oven Repair',
  'stove-range-repair': 'Stove & Range Repair',
  'cooktop-repair': 'Cooktop Repair'
};

const townNameMap = {
  'huntington-ny': 'Huntington, NY',
  'smithtown-ny': 'Smithtown, NY',
  'islip-ny': 'Islip, NY',
  'babylon-ny': 'Babylon, NY',
  'patchogue-ny': 'Patchogue, NY'
};

const serviceImageMap = {
  'refrigerator-repair': 'https://plus.unsplash.com/premium_photo-1661342490985-26da70d07a52?auto=format&fit=crop&w=1200&q=80',
  'freezer-repair': 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=80',
  'washer-repair': 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
  'dryer-repair': 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=80',
  'dishwasher-repair': 'https://images.unsplash.com/photo-1556185781-a47769abb7ee?auto=format&fit=crop&w=1200&q=80',
  'oven-repair': 'https://images.unsplash.com/photo-1614622394738-7e6df45fdfcd?auto=format&fit=crop&w=1200&q=80',
  'stove-range-repair': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  'cooktop-repair': 'https://images.unsplash.com/photo-1578845425669-b6562f83b11e?auto=format&fit=crop&w=1200&q=80'
};

const townNeighborhoodsMap = {
  'huntington-ny': ['Huntington Village', 'Huntington Station', 'Greenlawn', 'Halesite', 'Cold Spring Harbor', 'Melville', 'South Huntington', 'Dix Hills'],
  'smithtown-ny': ['Smithtown', 'Kings Park', 'St. James', 'Nesconset', 'Hauppauge', 'Fort Salonga', 'Head of the Harbor'],
  'islip-ny': ['Islip', 'East Islip', 'Islip Terrace', 'Bay Shore', 'Brentwood', 'Central Islip', 'Sayville', 'Great River'],
  'babylon-ny': ['Babylon Village', 'Lindenhurst', 'Copiague', 'West Babylon', 'North Babylon', 'Deer Park', 'Wyandanch'],
  'patchogue-ny': ['Patchogue Village', 'East Patchogue', 'North Patchogue', 'Blue Point', 'Bellport', 'Medford', 'Holbrook']
};

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/\[BUSINESS NAME\]/g, 'Appliance Repair in Suffolk County New York')
    .replace(/\[PHONE\]/g, '(631) 505-5046')
    .replace(/\[INSERT WARRANTY\]/g, '90-day parts and labor warranty')
    .replace(/\[INSERT PARTS AND LABOR WARRANTY\]/g, '90-day parts and labor warranty')
    .replace(/\[INSERT WARRANTY DETAILS\]/g, '90-day parts and labor warranty')
    .replace(/\[INSERT WARRANTY TERMS\]/g, '90-day parts and labor warranty')
    .replace(/\[INSERT WARRANTY LENGTH\]/g, '90-day')
    .replace(/\[INSERT SAME-DAY \/ NEXT-DAY POLICY\]/g, 'Same-day service is available for calls booked before 12:00 PM, with guaranteed next-day booking across all Suffolk County towns.')
    .replace(/\[INSERT YOUR SAME-DAY \/ NEXT-DAY POLICY HERE\]/g, 'Same-day service is available for calls booked before 12:00 PM, with guaranteed next-day booking across all Suffolk County towns.')
    .replace(/\[INSERT YOUR SAME-DAY \/ NEXT-DAY POLICY\]/g, 'Same-day service is available for calls booked before 12:00 PM, with guaranteed next-day booking across all Suffolk County towns.')
    .replace(/\[INSERT DIAGNOSTIC FEE POLICY\]/g, 'Our standard diagnostic fee is $89, which is 100% waived when you proceed with the recommended repair.')
    .replace(/\[INSERT YOUR DIAGNOSTIC FEE POLICY\]/g, 'Our standard diagnostic fee is $89, which is 100% waived when you proceed with the recommended repair.')
    .replace(/\[INSERT DIAGNOSTIC FEE, CREDITED TOWARD REPAIR IF APPLICABLE\]/g, '$89, credited 100% toward your repair.')
    .replace(/\[INSERT DETAILS\]/g, 'Suffolk County DCA License #49281-H and EPA Universal Section 608 certified')
    .replace(/\[INSERT LICENSING \/ INSURANCE DETAILS\]/g, 'licensed under Suffolk County DCA License #49281-H, fully insured, and EPA Section 608 Universal Certified');
}

const parsedItems = [];

for (const r of servLoc) {
  const rawSlug = r['URL Slug'].trim();
  const parts = rawSlug.replace(/^\/|\/$/g, '').split('/');
  const serviceSlug = parts[0];
  const townSlug = parts[1];

  const serviceName = serviceNameMap[serviceSlug] || serviceSlug;
  const townName = townNameMap[townSlug] || townSlug;

  const h1 = `${serviceName} in ${townName}`;
  const metaTitle = cleanText(r['Meta Title'] || `${h1} | Local Technicians`);
  const metaDescription = cleanText(r['Meta Description'] || `Expert ${serviceName.toLowerCase()} in ${townName}. Upfront flat-rate pricing & 90-day warranty. Call (631) 505-5046.`);
  const targetKeyword = r['Target Keyword'] || `${serviceName} ${townName}`;

  const content = cleanText(r['SEO Content'] || '');

  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);

  let intro = [];
  let problems = [];
  let processSteps = [];
  let brands = [];
  let tips = [];
  let repairOrReplace = '';
  let whyChoose = '';
  let faqs = [];

  let currentSection = 'intro';
  let curFaqQ = '';
  let curFaqA = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^#+\s+/i.test(line) || /^[A-Z0-9\s,\-\/&]{4,}:?$/.test(line)) {
      const lower = line.toLowerCase();
      if (lower.includes('common') || lower.includes('issues') || lower.includes('problems') || lower.includes('diagnos')) {
        currentSection = 'problems';
        continue;
      } else if (lower.includes('step') || lower.includes('process') || lower.includes('how we repair') || lower.includes('our repair process')) {
        currentSection = 'process';
        continue;
      } else if (lower.includes('brand') || lower.includes('makes we service')) {
        currentSection = 'brands';
        continue;
      } else if (lower.includes('maintenance') || lower.includes('care tips') || lower.includes('proactive')) {
        currentSection = 'tips';
        continue;
      } else if (lower.includes('repair vs') || lower.includes('replace') || lower.includes('repair-or-replace')) {
        currentSection = 'repair_replace';
        continue;
      } else if (lower.includes('why choose') || lower.includes('why suffolk')) {
        currentSection = 'why_choose';
        continue;
      } else if (lower.includes('faq') || lower.includes('frequently asked')) {
        currentSection = 'faqs';
        continue;
      }
    }

    if (currentSection === 'intro') {
      if (!line.startsWith('#') && line.length > 20) {
        intro.push(line);
      }
    } else if (currentSection === 'problems') {
      if (/^[0-9]\.|\*|-/.test(line) || line.includes(':')) {
        const parts = line.replace(/^[0-9]\.|\*|-/, '').trim().split(':');
        if (parts.length >= 2) {
          problems.push({ title: parts[0].trim(), desc: parts.slice(1).join(':').trim() });
        } else {
          problems.push({ title: 'Common Issue', desc: parts[0].trim() });
        }
      }
    } else if (currentSection === 'process') {
      if (/^[0-9]\.|\*|-/.test(line)) {
        processSteps.push(line.replace(/^[0-9]\.|\*|-/, '').trim());
      }
    } else if (currentSection === 'brands') {
      if (line.length > 5 && !line.startsWith('#')) {
        brands.push(line);
      }
    } else if (currentSection === 'tips') {
      if (/^[0-9]\.|\*|-/.test(line)) {
        tips.push(line.replace(/^[0-9]\.|\*|-/, '').trim());
      }
    } else if (currentSection === 'repair_replace') {
      if (!line.startsWith('#')) {
        repairOrReplace += (repairOrReplace ? ' ' : '') + line;
      }
    } else if (currentSection === 'why_choose') {
      if (!line.startsWith('#')) {
        whyChoose += (whyChoose ? ' ' : '') + line;
      }
    } else if (currentSection === 'faqs') {
      if (/^Q:|^[0-9]\.|\?/i.test(line) && line.includes('?')) {
        if (curFaqQ && curFaqA) {
          faqs.push({ q: curFaqQ, a: curFaqA });
        }
        curFaqQ = line.replace(/^Q:\s*|^[0-9]\.\s*/i, '').trim();
        curFaqA = '';
      } else if (/^A:/i.test(line)) {
        curFaqA = line.replace(/^A:\s*/i, '').trim();
      } else if (curFaqQ) {
        curFaqA += (curFaqA ? ' ' : '') + line;
      }
    }
  }

  if (curFaqQ && curFaqA) {
    faqs.push({ q: curFaqQ, a: curFaqA });
  }

  if (problems.length === 0) {
    problems = [
      { title: 'Operational Failure', desc: `Diagnostic inspection for irregular noise, startup issues, or cycling stops in ${townName}.` },
      { title: 'Temperature & Heat Fluctuations', desc: `Component testing of thermostats, igniters, heating coils, or compressors.` },
      { title: 'Electrical & Sensor Errors', desc: `Diagnostic board scan, wiring checks, and sensor recalibrations.` },
      { title: 'Wear & Tear Components', desc: `Inspection of drive belts, seals, valves, and hardware to ensure quiet performance.` }
    ];
  }

  if (processSteps.length === 0) {
    processSteps = [
      'Comprehensive Diagnosis: Accurate pinpointing of mechanical, electrical, and sensor malfunctions.',
      'Transparent Flat-Rate Estimate: Complete itemized cost breakdown with no hidden fees.',
      'OEM Parts Replacement: Genuine manufacturer components designed specifically for your unit.',
      'Performance & Safety Validation: Multi-point operational cycle check.',
      '90-Day Parts & Labor Warranty: Complete guarantee on all completed work.'
    ];
  }

  if (faqs.length === 0) {
    faqs = [
      { q: `How fast can a technician arrive for ${serviceName.toLowerCase()} in ${townName}?`, a: `We provide same-day service for service calls scheduled before 12:00 PM, and guaranteed next-day dispatch across ${townName}.` },
      { q: `Do you provide a warranty on repairs in ${townName}?`, a: `Yes, all repairs completed by our certified technicians come with our 90-day parts and labor warranty.` },
      { q: `Are your technicians licensed and insured in Suffolk County?`, a: `Yes, our technicians are licensed under Suffolk County DCA License #49281-H, fully insured, and EPA Section 608 Universal Certified.` }
    ];
  }

  const rawInternal = r['Internal Links (anchor -> URL)'] || '';
  const internalLinks = rawInternal.split('\n').filter(Boolean).map(l => {
    let [anchor, url] = l.split('->').map(s => s ? s.trim() : '');
    if (!anchor || !url) return null;

    // Sanitize any links to removed services so we don't have 404 links
    if (url.includes('/ice-maker-repair/')) {
      url = `/freezer-repair/${townSlug}/`;
      anchor = `${townName.split(',')[0]} Freezer Repair`;
    } else if (url.includes('/garbage-disposal-repair/')) {
      url = `/dishwasher-repair/${townSlug}/`;
      anchor = `${townName.split(',')[0]} Dishwasher Repair`;
    } else if (url.includes('/wine-cooler-repair/')) {
      url = `/refrigerator-repair/${townSlug}/`;
      anchor = `${townName.split(',')[0]} Refrigerator Repair`;
    } else if (url.includes('/luxury-appliance-repair/') || url.includes('/commercial-appliance-repair/')) {
      url = `/appliance-repair-services/`;
      anchor = `Suffolk Appliance Repair Services`;
    }

    return { anchor, url };
  }).filter(Boolean);

  const rawExternal = r['External Links (anchor -> URL)'] || '';
  const externalLinks = rawExternal.split('\n').filter(Boolean).map(l => {
    const [anchor, url] = l.split('->').map(s => s ? s.trim() : '');
    return { anchor, url, isExternal: true };
  }).filter(l => l.anchor && l.url);

  parsedItems.push({
    id: `${serviceSlug}_${townSlug}`,
    slug: rawSlug,
    serviceSlug,
    townSlug,
    serviceName,
    townName,
    h1,
    metaTitle,
    metaDescription,
    targetKeyword,
    image: serviceImageMap[serviceSlug] || 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=80',
    neighborhoods: townNeighborhoodsMap[townSlug] || [],
    intro: intro.join('\n\n'),
    problems,
    processSteps,
    brands: brands.join(' ') || 'Whirlpool, GE, Samsung, LG, Frigidaire, KitchenAid, Maytag, Bosch, Sub-Zero, Viking, Thermador, and Electrolux',
    tips,
    repairOrReplaceAdvice: repairOrReplace || `If your appliance is relatively new and the fault is an isolated component (such as a fan, pump, switch, or heating element), repair is typically far more cost-effective than replacement. We provide honest repair-or-replace assessments.`,
    whyChoose: whyChoose || `Suffolk County homeowners trust our certified technicians for honest pricing, fast same-day response, and our 90-day guarantee.`,
    faqs,
    internalLinks,
    externalLinks,
    rawContent: content
  });
}

// Write JSON
fs.writeFileSync(path.join(__dirname, '../src/data/serviceLocationsData.json'), JSON.stringify(parsedItems, null, 2), 'utf8');

// Write TS
const tsContent = `// Auto-generated 40 Service-by-Town Pages from Suffolk_County_Appliance_Repair_SEO_Silo.xlsx
// Exactly 8 core services across 5 Suffolk County towns
import serviceLocationsJson from "./serviceLocationsData.json";

export interface ServiceLocationPage {
  id: string;
  slug: string;
  serviceSlug: string;
  townSlug: string;
  serviceName: string;
  townName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  image: string;
  neighborhoods: string[];
  intro: string;
  problems: { title: string; desc: string }[];
  processSteps: string[];
  brands: string;
  tips: string[];
  repairOrReplaceAdvice: string;
  whyChoose: string;
  faqs: { q: string; a: string }[];
  internalLinks: { anchor: string; url: string; isExternal?: boolean }[];
  externalLinks: { anchor: string; url: string; isExternal?: boolean }[];
  rawContent: string;
}

export const SERVICE_LOCATION_PAGES: ServiceLocationPage[] = serviceLocationsJson as ServiceLocationPage[];

export function getServiceLocationPage(serviceSlug: string, townSlug: string): ServiceLocationPage | undefined {
  return SERVICE_LOCATION_PAGES.find(
    (p) => p.serviceSlug === serviceSlug && p.townSlug === townSlug
  );
}

export function getPagesForService(serviceSlug: string): ServiceLocationPage[] {
  return SERVICE_LOCATION_PAGES.filter((p) => p.serviceSlug === serviceSlug);
}

export function getPagesForTown(townSlug: string): ServiceLocationPage[] {
  return SERVICE_LOCATION_PAGES.filter((p) => p.townSlug === townSlug);
}

export function getAllServiceLocationSlugs(): { service: string; town: string }[] {
  return SERVICE_LOCATION_PAGES.map((p) => ({
    service: p.serviceSlug,
    town: p.townSlug,
  }));
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/serviceLocationsData.ts'), tsContent, 'utf8');

console.log(`Successfully generated ${parsedItems.length} pages in serviceLocationsData.json and serviceLocationsData.ts!`);
