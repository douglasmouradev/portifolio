/**
 * Loader minimalista — fade rápido sem efeitos chamativos
 */
(function () {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');
  const progressBar = document.getElementById('loader-progress');

  if (!loader || !mainContent) return;

  const savedLang = localStorage.getItem('portfolio-lang') || 'pt';
  const loaderSubtitle = document.getElementById('loader-subtitle');
  if (loaderSubtitle) {
    loaderSubtitle.textContent = savedLang === 'pt' ? 'Desenvolvedor Full Stack' : 'Full Stack Developer';
  }

  const LOAD_DURATION = 900;

  function finishLoading() {
    if (progressBar) progressBar.style.width = '100%';

    setTimeout(() => {
      loader.classList.add('loader-hidden');
      mainContent.classList.remove('main-content-hidden');
      mainContent.classList.add('main-content-visible');

      setTimeout(() => {
        loader.style.display = 'none';
        window.dispatchEvent(new Event('scroll'));
      }, 500);
    }, 120);
  }

  if (progressBar) {
    progressBar.style.width = '0%';
    requestAnimationFrame(() => {
      progressBar.style.width = '70%';
    });
  }

  setTimeout(finishLoading, LOAD_DURATION);
})();
