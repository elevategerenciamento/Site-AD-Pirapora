const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const drawerHtml = `
<!-- Backdrop Overlay -->
<div id="drawer-backdrop" class="fixed inset-0 bg-primary/40 backdrop-blur-custom z-40 transition-opacity duration-300" style="opacity: 0; pointer-events: none;" onclick="closeDrawer()"></div>

<!-- Side Panel (Ministry Detail View) -->
<aside id="ministry-drawer" class="fixed top-0 right-0 h-full w-full max-w-[500px] bg-background z-50 shadow-2xl flex flex-col border-l border-outline-variant" style="transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);">
  <!-- Drawer Header -->
  <div class="p-8 flex justify-between items-start">
    <div class="flex flex-col gap-6">
      <!-- Icon & Abbreviation -->
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-xl bg-primary-container flex items-center justify-center p-3 shadow-md">
          <img alt="Ministry Icon" class="w-full h-full object-contain filter invert brightness-200" src="/logoicone.png"/>
        </div>
        <div>
          <span id="drawer-abbrev" class="text-label-caps font-label-caps text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded"></span>
        </div>
      </div>
      <!-- Title -->
      <h2 id="drawer-title" class="font-headline-lg text-headline-lg text-primary-container leading-tight"></h2>
    </div>
    <!-- Close Button -->
    <button aria-label="Fechar" class="p-2 text-secondary hover:text-primary transition-colors focus:outline-none" onclick="closeDrawer()">
      <span class="material-symbols-outlined text-[32px]">close</span>
    </button>
  </div>

  <!-- Divider with Green Accent -->
  <div class="px-8 mb-4">
    <div class="h-[2px] w-16 bg-brand-orange"></div>
  </div>

  <!-- Drawer Content -->
  <div class="flex-1 overflow-y-auto custom-scrollbar px-8 py-4 space-y-10">
    <!-- Leadership -->
    <section>
      <div class="flex items-center gap-2 mb-3">
        <span class="material-symbols-outlined text-secondary" data-icon="account_circle">account_circle</span>
        <h3 class="text-label-caps font-label-caps text-secondary">Liderança</h3>
      </div>
      <div class="flex items-center gap-4">
        <p id="drawer-leader" class="font-body-lg text-body-lg font-semibold text-on-surface"></p>
      </div>
    </section>

    <!-- About Section -->
    <section>
      <div class="flex items-center gap-2 mb-3">
        <span class="material-symbols-outlined text-secondary" data-icon="info">info</span>
        <h3 class="text-label-caps font-label-caps text-secondary">Sobre o Ministério</h3>
      </div>
      <p id="drawer-about" class="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
      </p>
    </section>
  </div>

  <!-- Sticky Footer Action -->
  <div class="p-8 bg-background border-t border-outline-variant mt-auto">
    <a href="https://wa.me/5538984379559?text=Gostaria%20de%20saber%20mais%20sobre%20um%20ministerio" id="drawer-link" target="_blank" class="w-full bg-brand-orange text-white py-4 px-6 rounded-lg font-label-caps text-label-caps hover:brightness-110 transition-all duration-300 transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2">
      Quero saber mais
      <span class="material-symbols-outlined text-sm">arrow_forward</span>
    </a>
  </div>
</aside>

<script>
  const ministriesData = {
    'missao': { abbrev: 'SEMADEP', title: 'Ministério de Missões', leader: 'Narciso Batista', about: 'Levar a mensagem do Evangelho a diferentes comunidades, apoiando ações evangelísticas, missionárias e sociais, promovendo o amor de Cristo e o cuidado com o próximo.' },
    'jovens': { abbrev: 'UMADECAMP', title: 'Ministério de Jovens', leader: 'Fabiano Soares', about: 'Orientar e fortalecer os jovens em sua caminhada cristã, incentivando o crescimento espiritual, a comunhão, a liderança e a participação ativa.' },
    'ebd': { abbrev: 'EBD', title: 'Escola Bíblica', leader: 'Alan Soares', about: 'Ensinar a Palavra de Deus de forma sistemática, promovendo o conhecimento bíblico, o amadurecimento da fé e a aplicação dos ensinamentos cristãos.' },
    'familia': { abbrev: 'MIN. FAMÍLIA', title: 'Família', leader: 'Pr. Ronivan Luiz', about: 'Fortalecer os lares por meio dos princípios bíblicos, promovendo relacionamentos saudáveis, união familiar, aconselhamento e desenvolvimento espiritual.' },
    'homens': { abbrev: 'HOMENS', title: 'Ministério de Homens', leader: 'Joaquim Marques', about: 'Capacitar os homens para viverem de acordo com os valores cristãos, exercendo liderança responsável em seus lares, na igreja e na comunidade.' },
    'criancas': { abbrev: 'MIN. INFANTIL', title: 'Ministério Infantil', leader: 'Sara Emanuelly', about: 'Ensinar às crianças os princípios da fé cristã de forma adequada à sua idade, contribuindo para seu desenvolvimento espiritual, moral e social.' },
    'mulheres': { abbrev: 'UMADEP', title: 'Ministério de Mulheres', leader: 'Mecy Patrícia', about: 'Fortalecer a vida espiritual das mulheres, promovendo comunhão, serviço cristão e o exercício de seu papel como servas de Deus.' },
    '3idade': { abbrev: 'TERCEIRA IDADE', title: '3ª Idade', leader: 'Paulo Hernani', about: 'Visa valorizar e integrar os idosos à vida da igreja, proporcionando momentos de comunhão, crescimento espiritual e participação ativa.' }
  };

  function openMinistryModal(id) {
    const data = ministriesData[id];
    if (data) {
      document.getElementById('drawer-abbrev').innerText = data.abbrev;
      document.getElementById('drawer-title').innerText = data.title;
      document.getElementById('drawer-leader').innerText = data.leader;
      document.getElementById('drawer-about').innerText = data.about;
      
      const drawer = document.getElementById('ministry-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      
      drawer.style.transform = 'translateX(0)';
      backdrop.style.opacity = '1';
      backdrop.style.pointerEvents = 'auto';
      
      const link = document.getElementById('drawer-link');
      if(link) {
          link.href = 'https://wa.me/5538984379559?text=' + encodeURIComponent('Gostaria de saber mais sobre o ' + data.title);
      }
    }
  }

  function closeDrawer() {
    const drawer = document.getElementById('ministry-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer && backdrop) {
      drawer.style.transform = 'translateX(100%)';
      backdrop.style.opacity = '0';
      backdrop.style.pointerEvents = 'none';
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
</script>
</body>`;

html = html.replace('</body>', drawerHtml);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully injected the drawer.');
