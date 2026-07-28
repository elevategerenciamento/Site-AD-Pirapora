const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('Quero saber mais', 'Desejo fazer parte');
html = html.replace('space-y-10', 'space-y-4');
html = html.replace('<img alt="Ministry Icon" class="w-full h-full object-contain filter invert brightness-200" src="/logoicone.png"/>', '<img alt="Ministry Icon" class="w-full h-full object-contain" src="/favicon-flame.png"/>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully applied drawer changes');
