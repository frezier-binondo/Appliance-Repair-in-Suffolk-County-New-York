const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const wb = XLSX.readFile('Suffolk_County_Appliance_Repair_SEO_Silo.xlsx');
const sheet = wb.Sheets['SEO Silo'];
const rows = XLSX.utils.sheet_to_json(sheet);
const servLoc = rows.filter(r => r['Page Type'] === 'Service + Location');

console.log('Total Service + Location rows in sheet:', servLoc.length);

const serviceNameMap = {
  'refrigerator-repair': 'Refrigerator Repair',
  'freezer-repair': 'Freezer Repair',
  'washer-repair': 'Washing Machine Repair',
  'dryer-repair': 'Dryer Repair',
  'dishwasher-repair': 'Dishwasher Repair',
  'oven-repair': 'Oven Repair',
  'stove-range-repair': 'Stove & Range Repair',
  'cooktop-repair': 'Cooktop Repair',
  'microwave-repair': 'Microwave Repair',
  'ice-maker-repair': 'Ice Maker Repair',
  'wine-cooler-repair': 'Wine Cooler Repair',
  'garbage-disposal-repair': 'Garbage Disposal Repair',
  'commercial-appliance-repair': 'Commercial Appliance Repair',
  'luxury-appliance-repair': 'Luxury Appliance Repair'
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
  'cooktop-repair': 'https://images.unsplash.com/photo-1578845425669-b6562f83b11e?auto=format&fit=crop&w=1200&q=80',
  'microwave-repair': 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=1200&q=80',
  'ice-maker-repair': 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
  'wine-cooler-repair': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
  'garbage-disposal-repair': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  'commercial-appliance-repair': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  'luxury-appliance-repair': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
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
  let currentProblem = null;
  let processSteps = [];
  let brands = [];
  let faqs = [];
  let currentFaq = null;
  let tips = [];
  let repairOrReplace = '';
  let whyChoose = '';
  let currentSection = 'intro';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('H1:')) {
      continue;
    } else if (line.startsWith('H2:')) {
      const heading = line.replace(/^H2:\s*/, '').toLowerCase();
      if (heading.includes('common') || heading.includes('problems') || heading.includes('signs')) {
        currentSection = 'problems';
      } else if (heading.includes('process') || heading.includes('how it works')) {
        currentSection = 'process';
      } else if (heading.includes('brands')) {
        currentSection = 'brands';
      } else if (heading.includes('faq') || heading.includes('frequently')) {
        currentSection = 'faqs';
      } else if (heading.includes('tips') || heading.includes('care') || heading.includes('maintenance') || (heading.includes('how ') && heading.includes('get the most'))) {
        currentSection = 'tips';
      } else if (heading.includes('repair or replace')) {
        currentSection = 'repairOrReplace';
      } else if (heading.includes('why ') && heading.includes('choose')) {
        currentSection = 'whyChoose';
      } else {
        currentSection = 'other';
      }
    } else if (line.startsWith('H3:')) {
      if (currentSection === 'problems') {
        currentProblem = { title: line.replace(/^H3:\s*/, ''), desc: '' };
        problems.push(currentProblem);
      }
    } else if (line.startsWith('Q:')) {
      currentFaq = { q: line.replace(/^Q:\s*/, ''), a: '' };
      faqs.push(currentFaq);
    } else if (line.startsWith('A:') && currentFaq) {
      currentFaq.a = line.replace(/^A:\s*/, '');
    } else if (line.startsWith('- ')) {
      const item = line.replace(/^-\s*/, '');
      if (currentSection === 'tips') {
        tips.push(item);
      }
    } else if (/^\d+\.\s*/.test(line)) {
      if (currentSection === 'process') {
        processSteps.push(line.replace(/^\d+\.\s*/, ''));
      }
    } else {
      if (currentSection === 'intro') {
        intro.push(line);
      } else if (currentSection === 'problems' && currentProblem) {
        currentProblem.desc = currentProblem.desc ? currentProblem.desc + ' ' + line : line;
      } else if (currentSection === 'brands') {
        brands.push(line);
      } else if (currentSection === 'tips') {
        tips.push(line);
      } else if (currentSection === 'repairOrReplace') {
        repairOrReplace = repairOrReplace ? repairOrReplace + ' ' + line : line;
      } else if (currentSection === 'whyChoose') {
        whyChoose = whyChoose ? whyChoose + ' ' + line : line;
      }
    }
  }

  if (problems.length === 0) {
    problems = [
      { title: `Unit Not Functioning Properly`, desc: `Electrical or mechanical wear preventing normal operation in ${townName} households.` },
      { title: `Strange Noises or Vibrations`, desc: `Worn internal bearings, belts, or motors requiring diagnostic testing.` },
      { title: `Inconsistent Temperatures or Cycles`, desc: `Sensor or control board malfunctions disrupting daily appliance performance.` }
    ];
  }

  if (processSteps.length === 0) {
    processSteps = [
      `Contact our dispatch team at (631) 505-5046 or book online for your ${townName} home.`,
      `We schedule the earliest appointment window with a courtesy call 30 minutes before arrival.`,
      `Your certified technician diagnoses the fault and provides a firm upfront quote.`,
      `With your approval, we complete the repair using factory-certified OEM parts.`,
      `We test full functionality and back the completed job with our 90-day parts and labor warranty.`
    ];
  }

  const rawInternal = r['Internal Links (anchor -> URL)'] || '';
  const internalLinks = rawInternal.split('\n').filter(Boolean).map(l => {
    const [anchor, url] = l.split('->').map(s => s ? s.trim() : '');
    return { anchor, url };
  }).filter(l => l.anchor && l.url);

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
const tsContent = `// Auto-generated 70 Service-by-Town Pages from Suffolk_County_Appliance_Repair_SEO_Silo.xlsx
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

export function getAllServiceLocationSlugs(): { service: string; town: string }[] {
  return SERVICE_LOCATION_PAGES.map((p) => ({
    service: p.serviceSlug,
    town: p.townSlug,
  }));
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/serviceLocationsData.ts'), tsContent, 'utf8');
console.log('Generated both serviceLocationsData.json and serviceLocationsData.ts successfully!');
