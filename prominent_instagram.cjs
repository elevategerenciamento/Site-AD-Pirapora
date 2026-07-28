const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove the small header icon
const headerAbbrevHtml = `
        <div class="flex items-center gap-3">
          <span id="drawer-abbrev" class="text-label-caps font-label-caps text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded"></span>
          <a id="drawer-instagram-link" href="#" target="_blank" class="text-secondary hover:text-brand-orange transition-colors flex items-center justify-center" style="display: none;" title="Ver Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>`;

const newHeaderAbbrevHtml = `
        <div>
          <span id="drawer-abbrev" class="text-label-caps font-label-caps text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded"></span>
        </div>`;
        
html = html.replace(headerAbbrevHtml, newHeaderAbbrevHtml);

// 2. Insert the prominent block before "Sobre o Ministério"
const aboutSectionHtml = `
    <!-- About Section -->
    <section>`;

const prominentInstagramHtml = `
    <!-- Instagram Promo Block -->
    <section id="drawer-instagram-container" style="display: none;" class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/50 relative overflow-hidden">
      <!-- Decorative background blur -->
      <div class="absolute -right-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl"></div>
      
      <div class="flex items-center gap-3 mb-3 relative z-10">
        <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-orange">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </div>
        <h3 class="font-headline-md text-[20px] text-primary-container leading-tight">Nosso Instagram</h3>
      </div>
      <p class="font-body-md text-secondary mb-5 relative z-10 leading-relaxed">Siga nossa página para acompanhar de perto os nossos eventos, cultos, e tudo o que acontece no ministério!</p>
      <a id="drawer-instagram-btn" href="#" target="_blank" class="w-full bg-white border border-brand-orange text-brand-orange py-3 px-4 rounded-lg font-label-caps text-label-caps hover:bg-brand-orange hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 relative z-10">
        <span id="drawer-instagram-handle">@instagram</span>
        <span class="material-symbols-outlined text-[18px]">open_in_new</span>
      </a>
    </section>

    <!-- About Section -->
    <section>`;

html = html.replace(aboutSectionHtml, prominentInstagramHtml);

// 3. Update the JS logic
const oldJsRegex = /const instaLink = document\.getElementById\('drawer-instagram-link'\);[\s\S]*?instaLink\.style\.display = 'none';\s*\}/;

const newJsCode = `const instaContainer = document.getElementById('drawer-instagram-container');
      const instaBtn = document.getElementById('drawer-instagram-btn');
      const instaHandle = document.getElementById('drawer-instagram-handle');
      
      if (data.instagram && instaContainer && instaBtn && instaHandle) {
          instaBtn.href = data.instagram;
          instaHandle.innerText = data.instaHandle || 'Seguir no Instagram';
          instaContainer.style.display = 'block';
      } else if (instaContainer) {
          instaContainer.style.display = 'none';
      }`;

html = html.replace(oldJsRegex, newJsCode);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully added prominent Instagram card');
