const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace drawer-backdrop z-40 with inline z-index
html = html.replace('id="drawer-backdrop" class="fixed inset-0 bg-primary/40 backdrop-blur-custom z-40 transition-opacity duration-300"', 'id="drawer-backdrop" class="fixed inset-0 bg-primary/40 backdrop-blur-custom transition-opacity duration-300" style="opacity: 0; pointer-events: none; z-index: 14999;"');

// Replace ministry-drawer z-50 with inline z-index
html = html.replace('id="ministry-drawer" class="fixed top-0 right-0 h-full w-full max-w-[500px] bg-background z-50 shadow-2xl flex flex-col border-l border-outline-variant" style="transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);"', 'id="ministry-drawer" class="fixed top-0 right-0 h-full w-full max-w-[500px] bg-background shadow-2xl flex flex-col border-l border-outline-variant" style="transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); z-index: 15000;"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated z-index successfully');
