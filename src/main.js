// ── DADOS DAS CONGREGAÇÕES ──
const congregacoes = [
  {
    id: 1,
    nome: "Igreja Sede",
    bairro: "Santo Antônio",
    pastor: "Pr. Ronivan Luiz",
    endereco: "R. Ouro Preto, 277",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30 · Sex 19h30",
    destaque: true
  },
  {
    id: 2,
    nome: "Sub-sede Buritizeiro",
    bairro: "Centro — Buritizeiro",
    pastor: "Pr. Ronivan Luiz",
    endereco: "R. Joaquim Trindade Cotta, 513",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Ter 19h30 · Qui 19h30"
  },
  {
    id: 3,
    nome: "Congregação Sagrada Família",
    bairro: "Sagrada Família",
    pastor: "Pb. Geraldo Magela",
    endereco: "Rua Santa Rita, 145",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30"
  }
];

// Renderizar cards de congregações
function renderCongs() {
  const grid = document.getElementById('congGrid');
  if (!grid) return;
  
  grid.innerHTML = congregacoes.map((c, i) => `
    <div class="cong-card reveal">
      <span class="eyebrow" style="font-size: 0.6rem; margin-bottom: 0.5rem">${c.destaque ? 'Unidade Sede' : 'Unidade Bairro'}</span>
      <h3>${c.nome}</h3>
      <p style="color: #0f172a; font-weight: 700; margin-bottom: 0.2rem">${c.pastor}</p>
      <p>${c.endereco} — ${c.bairro}</p>
      <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #f1f5f9;">
        <strong style="display: block; font-size: 0.75rem; text-transform: uppercase; color: #c2943a; margin-bottom: 0.5rem">Horários de Culto</strong>
        <span style="font-size: 0.9rem; color: #475569;">${c.cultos}</span>
      </div>
    </div>
  `).join('');

  observeReveal();
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Reveal on scroll logic
function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  
  els.forEach(el => obs.observe(el));
}

// Mobile menu logic
window.toggleMenu = function() {
  const nav = document.querySelector('.nav-links');
  if (nav) {
    nav.classList.toggle('active');
  }
};

// Form submission simulation
window.submitOracao = function(e) {
  e.preventDefault();
  const form = document.getElementById('oracaoForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
};

// Pix copy logic
window.copyPix = function() {
  const key = document.getElementById('pixKey').textContent;
  navigator.clipboard.writeText(key).then(() => {
    const btn = document.getElementById('pixBtn');
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = 'Copiado!';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2500);
    }
  });
};

// Radio player logic
window.toggleRadio = function() {
  const audio = document.getElementById('radioAudio');
  const icon = document.getElementById('radioIcon');
  const text = document.getElementById('radioText');
  const dot = document.querySelector('.status-dot');
  const label = document.getElementById('statusLabel');

  if (audio.paused) {
    audio.play();
    icon.setAttribute('data-lucide', 'pause');
    text.textContent = 'Parar Rádio';
    dot.classList.add('playing');
    label.textContent = 'Ao Vivo';
    label.style.color = '#22c55e';
  } else {
    audio.pause();
    icon.setAttribute('data-lucide', 'play');
    text.textContent = 'Ouvir Agora';
    dot.classList.remove('playing');
    label.textContent = 'Rádio Offline';
    label.style.color = '';
  }
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderCongs();
  observeReveal();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
