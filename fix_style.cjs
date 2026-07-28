const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix duplicate style
html = html.replace('style="opacity: 0; pointer-events: none; z-index: 14999;" style="opacity: 0; pointer-events: none;"', 'style="opacity: 0; pointer-events: none; z-index: 14999;"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed duplicate style');
