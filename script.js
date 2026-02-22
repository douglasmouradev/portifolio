// Menu mobile toggle
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
