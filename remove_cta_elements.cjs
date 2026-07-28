const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the text block
const textBlockRegex = /<p class="font-body-lg text-secondary mb-10 max-w-2xl mx-auto">[\s\S]*?Participe do nosso curso de integração e descubra seus dons espirituais para servir com propósito na casa do Senhor\.[\s\S]*?<\/p>/;
html = html.replace(textBlockRegex, '');

// Replace the button block
const buttonBlockRegex = /<button class="border-2 border-brand-navy text-brand-navy px-8 py-4 rounded-lg font-label-caps text-label-caps hover:bg-brand-navy hover:text-white transition-all">[\s\S]*?BAIXAR GUIA DE MINISTÉRIOS[\s\S]*?<\/button>/;
html = html.replace(buttonBlockRegex, '');

// Adjust the margin on the h3
html = html.replace('<h3 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-4">Ainda não sabe onde servir?</h3>', '<h3 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-navy mb-8">Ainda não sabe onde servir?</h3>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully removed the requested elements.');
