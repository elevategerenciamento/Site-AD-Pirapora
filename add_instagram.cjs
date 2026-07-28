const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add the Instagram section to the drawer HTML
const instagramHtml = `
    <!-- Instagram Section -->
    <section id="drawer-instagram-container" style="display: none;">
      <div class="flex items-center gap-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        <h3 class="text-label-caps font-label-caps text-secondary">Redes Sociais</h3>
      </div>
      <a id="drawer-instagram-link" href="#" target="_blank" class="font-body-md text-brand-orange hover:brightness-110 flex items-center gap-2 transition-colors">
        <span id="drawer-instagram-handle">@instagram</span>
        <span class="material-symbols-outlined text-sm">open_in_new</span>
      </a>
    </section>
  </div>
`;

// Replace the closing div of the drawer content with our new section + the closing div
html = html.replace('    </section>\n  </div>', '    </section>\n' + instagramHtml);

// 2. Add the instagram data to the jovens ministry
html = html.replace("'jovens': { abbrev: 'UMADECAMP', title: 'Ministério de Jovens', leader: 'Fabiano Soares', about: 'Orientar e fortalecer os jovens em sua caminhada cristã, incentivando o crescimento espiritual, a comunhão, a liderança e a participação ativa.' }", "'jovens': { abbrev: 'UMADECAMP', title: 'Ministério de Jovens', leader: 'Fabiano Soares', about: 'Orientar e fortalecer os jovens em sua caminhada cristã, incentivando o crescimento espiritual, a comunhão, a liderança e a participação ativa.', instagram: 'https://www.instagram.com/umadecamp_piraporamg/', instaHandle: '@umadecamp_piraporamg' }");

// 3. Update openMinistryModal to handle the instagram data
const oldModalCode = `      const link = document.getElementById('drawer-link');
      if(link) {
          link.href = 'https://wa.me/5538984379559?text=' + encodeURIComponent('Gostaria de saber mais sobre o ' + data.title);
      }`;

const newModalCode = `      const link = document.getElementById('drawer-link');
      if(link) {
          link.href = 'https://wa.me/5538984379559?text=' + encodeURIComponent('Gostaria de saber mais sobre o ' + data.title);
      }
      
      const instaContainer = document.getElementById('drawer-instagram-container');
      const instaLink = document.getElementById('drawer-instagram-link');
      const instaHandle = document.getElementById('drawer-instagram-handle');
      
      if (data.instagram && instaContainer) {
          instaLink.href = data.instagram;
          instaHandle.innerText = data.instaHandle || 'Instagram';
          instaContainer.style.display = 'block';
      } else if (instaContainer) {
          instaContainer.style.display = 'none';
      }`;

html = html.replace(oldModalCode, newModalCode);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully added Instagram logic.');
