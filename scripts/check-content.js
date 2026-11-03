const XLSX = require('xlsx');
const fs = require('fs');

const wb = XLSX.readFile('Suffolk_County_Appliance_Repair_SEO_Silo.xlsx');
const sheet = wb.Sheets['SEO Silo'];
const rows = XLSX.utils.sheet_to_json(sheet);
const servLoc = rows.filter(r => r['Page Type'] === 'Service + Location');

console.log('Total service-location pages in spreadsheet:', servLoc.length);

const parsedPages = [];

for (const r of servLoc) {
  const slug = r['URL Slug'].trim();
  const parts = slug.replace(/^\/|\/$/g, '').split('/');
  const serviceSlug = parts[0];
  const townSlug = parts[1];

  let content = r['SEO Content'] || '';
  // Replace placeholders
  content = content
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

  let metaTitle = r['Meta Title'] || '';
  metaTitle = metaTitle.replace(/\[BUSINESS NAME\]/g, 'Appliance Repair in Suffolk County New York');

  let metaDesc = r['Meta Description'] || '';
  metaDesc = metaDesc
    .replace(/\[BUSINESS NAME\]/g, 'Appliance Repair in Suffolk County New York')
    .replace(/\[PHONE\]/g, '(631) 505-5046');

  // Parse internal links
  const rawInternal = r['Internal Links (anchor -> URL)'] || '';
  const internalLinks = rawInternal.split('\n').filter(Boolean).map(line => {
    const [anchor, url] = line.split('->').map(s => s ? s.trim() : '');
    return { anchor, url };
  }).filter(l => l.anchor && l.url);

  // Parse external links
  const rawExternal = r['External Links (anchor -> URL)'] || '';
  const externalLinks = rawExternal.split('\n').filter(Boolean).map(line => {
    const [anchor, url] = line.split('->').map(s => s ? s.trim() : '');
    return { anchor, url, isExternal: true };
  }).filter(l => l.anchor && l.url);

  parsedPages.push({
    id: `${serviceSlug}_${townSlug}`,
    slug: slug,
    serviceSlug,
    townSlug,
    pageTitleH1: r['Page Title (H1)'],
    metaTitle,
    metaDescription: metaDesc,
    targetKeyword: r['Target Keyword'],
    rawContent: content,
    internalLinks,
    externalLinks,
  });
}

console.log('Successfully processed:', parsedPages.length, 'pages');
console.log('First entry:', JSON.stringify(parsedPages[0], null, 2));
