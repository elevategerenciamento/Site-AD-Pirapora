const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Replace all googleusercontent aida urls with /logoicone.png
html = html.replace(/src="https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]+"/g, 'src="/logoicone.png"');

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Icons replaced successfully.');
