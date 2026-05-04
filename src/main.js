// ── DADOS DAS CONGREGAÇÕES ──
const congregacoes = [
  {
    id: 1,
    nome: "Igreja Sede",
    bairro: "Santo Antônio",
    pastor: "Pr. Ronivan Luiz",
    foto: "https://ui-avatars.com/api/?name=Ronivan+Luiz&background=050f2b&color=fff&size=128",
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
    foto: "https://ui-avatars.com/api/?name=Ronivan+Luiz&background=050f2b&color=fff&size=128",
    endereco: "R. Joaquim Trindade Cotta, 513",
    cidade: "Buritizeiro - MG",
    cultos: "Dom 19h · Ter 19h30 · Qui 19h30"
  },
  {
    id: 3,
    nome: "Congregação Sagrada Família",
    bairro: "Sagrada Família",
    pastor: "Pb. Geraldo Magela",
    foto: "https://ui-avatars.com/api/?name=Geraldo+Magela&background=050f2b&color=fff&size=128",
    endereco: "Rua Santa Rita, 145",
    cidade: "Pirapora - MG",
    cultos: "Dom 19h · Qua 19h30"
  }
];

// Renderizar cards de congregações
function renderCongs() {
  const grid = document.getElementById('congGrid');
  if (!grid) return;
  
  grid.innerHTML = congregacoes.map(c => `
    <div class="cong-card reveal">
      <img src="${c.foto}" alt="${c.pastor}" class="pastor-photo">
      <span class="pastor-name">${c.pastor}</span>
      <h3>${c.nome}</h3>
      <p>${c.endereco} — ${c.bairro}</p>
      <div class="cong-hours">${c.cultos}</div>
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
