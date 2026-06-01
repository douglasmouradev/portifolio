/**
 * Loader — exibido apenas na primeira visita da sessão
 */
(function () {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');
  const progressBar = document.getElementById('loader-progress');
  const LOADER_KEY = 'portfolio-loader-seen';

  if (!loader || !mainContent) return;

  const savedLang = localStorage.getItem('portfolio-lang') || 'pt';
  const loaderSubtitle = document.getElementById('loader-subtitle');
  if (loaderSubtitle) {
    loaderSubtitle.textContent = savedLang === 'pt' ? 'Desenvolvedor Full Stack' : 'Full Stack Developer';
  }

  function showMain() {
    loader.classList.add('loader-hidden');
    mainContent.classList.remove('main-content-hidden');
    mainContent.classList.add('main-content-visible');
    setTimeout(() => {
      loader.style.display = 'none';
      window.dispatchEvent(new Event('scroll'));
    }, 500);
  }

  if (sessionStorage.getItem(LOADER_KEY)) {
    loader.style.display = 'none';
    mainContent.classList.remove('main-content-hidden');
    mainContent.classList.add('main-content-visible');
    window.dispatchEvent(new Event('scroll'));
    return;
  }

  sessionStorage.setItem(LOADER_KEY, '1');
  const LOAD_DURATION = 700;

  function finishLoading() {
    if (progressBar) progressBar.style.width = '100%';
    setTimeout(showMain, 120);
  }

  if (progressBar) {
    progressBar.style.width = '0%';
    requestAnimationFrame(() => {
      progressBar.style.width = '70%';
    });
  }

  setTimeout(finishLoading, LOAD_DURATION);
})();
