const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove the old Instagram section
const sectionRegex = /<!-- Instagram Section -->[\s\S]*?<\/section>\s*/;
html = html.replace(sectionRegex, '');

// 2. Modify the abbreviation area to include the Instagram link
const oldAbbrevHtml = `
        <div>
          <span id="drawer-abbrev" class="text-label-caps font-label-caps text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded"></span>
        </div>`;

const newAbbrevHtml = `
        <div class="flex items-center gap-3">
          <span id="drawer-abbrev" class="text-label-caps font-label-caps text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded"></span>
          <a id="drawer-instagram-link" href="#" target="_blank" class="text-secondary hover:text-brand-orange transition-colors flex items-center justify-center" style="display: none;" title="Ver Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>`;
        
html = html.replace(oldAbbrevHtml, newAbbrevHtml);

// 3. Update the JS logic
const oldJsRegex = /const instaContainer = document\.getElementById\('drawer-instagram-container'\);[\s\S]*?instaContainer\.style\.display = 'none';\s*\}/;

const newJsCode = `const instaLink = document.getElementById('drawer-instagram-link');
      
      if (data.instagram && instaLink) {
          instaLink.href = data.instagram;
          instaLink.style.display = 'flex';
      } else if (instaLink) {
          instaLink.style.display = 'none';
      }`;

html = html.replace(oldJsRegex, newJsCode);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully moved Instagram link');
