const XLSX = require('xlsx');

const wb = XLSX.readFile('Suffolk_County_Appliance_Repair_SEO_Silo.xlsx');
const sheet = wb.Sheets['SEO Silo'];
const data = XLSX.utils.sheet_to_json(sheet);
const servLoc = data.filter(d => d['Page Type'] === 'Service + Location');
const sample = servLoc[0];
console.log('Sample Keys:', Object.keys(sample));
console.log('Sample Data:');
console.log('Title (H1):', sample['Page Title (H1)']);
console.log('URL Slug:', sample['URL Slug']);
console.log('Target Keyword:', sample['Target Keyword']);
console.log('Meta Title:', sample['Meta Title']);
console.log('Meta Description:', sample['Meta Description']);
console.log('Internal Links:', sample['Internal Links (anchor -> URL)']);
console.log('External Links:', sample['External Links (anchor -> URL)']);
console.log('SEO Content snippet:\n', sample['SEO Content'] ? sample['SEO Content'].slice(0, 500) : 'none');
