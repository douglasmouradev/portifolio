// ===== Tradução PT/EN =====
const LANG_KEY = 'portfolio-lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'pt';

function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el && content) el.setAttribute('content', content);
}

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

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key]) el.setAttribute('aria-label', t[key]);
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  if (t['meta.title']) document.title = t['meta.title'];
  if (t['meta.description']) {
    setMetaContent('meta[name="description"]', t['meta.description']);
    setMetaContent('meta[property="og:description"]', t['meta.description']);
    setMetaContent('meta[name="twitter:description"]', t['meta.description']);
  }
  if (t['meta.ogTitle']) {
    setMetaContent('meta[property="og:title"]', t['meta.ogTitle']);
    setMetaContent('meta[name="twitter:title"]', t['meta.ogTitle']);
  }
  if (t['meta.ogTitle']) {
    document.querySelector('meta[property="og:locale"]')?.setAttribute(
      'content',
      lang === 'pt' ? 'pt_BR' : 'en_US'
    );
  }

  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle && t['lang.aria']) {
    langToggle.setAttribute('aria-label', t['lang.aria']);
    langToggle.setAttribute('title', t['lang.title']);
  }

  updateMenuToggleAria();
}

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem(LANG_KEY, currentLang);
  applyTranslations(currentLang);
}

document.querySelector('.lang-toggle')?.addEventListener('click', toggleLanguage);
applyTranslations(currentLang);

// ===== Menu mobile =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function updateMenuToggleAria() {
  if (!menuToggle) return;
  const t = translations[currentLang];
  const isOpen = navLinks?.classList.contains('active');
  menuToggle.setAttribute('aria-expanded', String(!!isOpen));
  if (t) {
    menuToggle.setAttribute('aria-label', isOpen ? t['menu.close'] : t['menu.open']);
  }
}

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  menuToggle?.classList.toggle('active');
  updateMenuToggleAria();
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
    menuToggle?.classList.remove('active');
    updateMenuToggleAria();
  });
});

// ===== Navegação ativa ao rolar =====
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];

function updateActiveNav() {
  if (!sections.length) return;
  const offset = 140;
  let currentId = sections[0].id;

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - offset) {
      currentId = section.id;
    }
  });

  navAnchors.forEach(anchor => {
    const targetId = anchor.getAttribute('href')?.slice(1);
    anchor.classList.toggle('is-active', targetId === currentId);
  });
}

// ===== Scroll reveal =====
const revealElements = document.querySelectorAll('.section-head, .about-text, .service-card, .project-card, .project-media, .contact-links, .hero-panel');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
};

revealElements.forEach(el => el.classList.add('reveal'));

const header = document.querySelector('.header');

const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
  revealOnScroll();
  updateActiveNav();
};

window.addEventListener('load', onScroll);
window.addEventListener('scroll', onScroll, { passive: true });
