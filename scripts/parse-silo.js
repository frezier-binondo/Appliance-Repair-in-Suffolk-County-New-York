const XLSX = require('xlsx');

const wb = XLSX.readFile('Suffolk_County_Appliance_Repair_SEO_Silo.xlsx');
const sheet = wb.Sheets['SEO Silo'];
const data = XLSX.utils.sheet_to_json(sheet);
const servLoc = data.filter(d => d['Page Type'] === 'Service + Location');
console.log('Count:', servLoc.length);
const slugs = servLoc.map(d => d['URL Slug']);
const servicePrefixes = [...new Set(slugs.map(s => s.split('/')[1]))];
console.log('Service prefixes (' + servicePrefixes.length + '):', servicePrefixes);
const towns = [...new Set(slugs.map(s => s.split('/')[2]))];
console.log('Town suffixes (' + towns.length + '):', towns);
