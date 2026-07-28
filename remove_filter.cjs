const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the filter block
const filterBlockRegex = /<div class="flex items-center gap-4 text-brand-navy border-b border-brand-navy\/20 pb-2 cursor-pointer group">[\s\S]*?FILTRAR POR CATEGORIA[\s\S]*?<\/div>/;
html = html.replace(filterBlockRegex, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully removed the filter element.');
