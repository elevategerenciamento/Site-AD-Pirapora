const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldButton = '<button class="bg-brand-orange text-white px-8 py-4 rounded-lg font-label-caps text-label-caps hover:brightness-110 active:scale-95 transition-all shadow-md">\n            AGENDE UMA CONVERSA\n          </button>';
const newLink = '<a href="https://wa.me/5538984379559?text=Gostaria%20de%20servir%20em%20um%20ministerio%20da%20igreja" target="_blank" class="bg-brand-orange text-white px-8 py-4 rounded-lg font-label-caps text-label-caps hover:brightness-110 active:scale-95 transition-all shadow-md inline-flex justify-center items-center">\n            AGENDE UMA CONVERSA\n          </a>';

html = html.replace(oldButton, newLink);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated the link.');
