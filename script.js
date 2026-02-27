// ===== Tradução PT/EN =====
const LANG_KEY = 'portfolio-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'pt';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
    const text = t[key];
    if (text) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = lang === 'pt' ? 'Douglas Moura | Portfólio' : 'Douglas Moura | Portfolio';

  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle && t['lang.aria']) {
    langToggle.setAttribute('aria-label', t['lang.aria']);
    langToggle.setAttribute('title', t['lang.title']);
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'pt'
      ? 'Portfólio de Douglas Moura - Desenvolvedor Full Stack'
      : 'Douglas Moura Portfolio - Full Stack Developer';
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem(LANG_KEY, currentLang);
  applyTranslations(currentLang);
}

document.querySelector('.lang-toggle')?.addEventListener('click', toggleLanguage);

// Aplicar idioma salvo ao carregar (script está no final do body, DOM já está pronto)
applyTranslations(currentLang);

// ===== Menu mobile toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  menuToggle?.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
    menuToggle?.classList.remove('active');
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.section-title, .about-text, .project-card, .contact-text, .contact-links');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
};

// Adicionar classe reveal aos elementos
revealElements.forEach(el => {
  el.classList.add('reveal');
});

// Executar na carga e no scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Header scroll effect - adicionar sombra ao rolar
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.style.setProperty('box-shadow', '0 4px 24px rgba(0, 0, 0, 0.3)');
  } else {
    header?.style.setProperty('box-shadow', 'none');
  }
});
