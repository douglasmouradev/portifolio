/**
 * Loader estilo Titanium Telecom (titaniumtelecom.com.br)
 * Efeito Matrix digital rain + barra de progresso
 */

(function () {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');
  const progressBar = document.getElementById('loader-progress');
  const canvas = document.getElementById('matrix-canvas');

  if (!loader || !mainContent || !progressBar || !canvas) return;

  // ===== Idioma do loader (respeita preferência salva) =====
  const savedLang = localStorage.getItem('portfolio-lang') || 'pt';
  const loaderSubtitle = document.getElementById('loader-subtitle');
  const loaderLabel = document.getElementById('loader-label');
  if (loaderSubtitle) loaderSubtitle.textContent = savedLang === 'pt' ? 'Portfólio' : 'Portfolio';
  if (loaderLabel) loaderLabel.textContent = savedLang === 'pt' ? 'PORTFOLIO INICIANDO' : 'PORTFOLIO LOADING';

  // ===== Efeito Matrix Rain =====
  const ctx = canvas.getContext('2d');
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const charArray = chars.split('');
  const fontSize = 14;
  let columns = 0;
  let drops = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#22d3ee';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillStyle = `rgba(34, 211, 238, ${Math.random() * 0.5 + 0.5})`;
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  let matrixInterval;

  function startMatrix() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    matrixInterval = setInterval(drawMatrix, 50);
  }

  function stopMatrix() {
    clearInterval(matrixInterval);
    window.removeEventListener('resize', resizeCanvas);
  }

  // ===== Barra de progresso =====
  const LOAD_DURATION = 2200;
  const STEPS = 100;
  const INTERVAL = LOAD_DURATION / STEPS;
  let progress = 0;

  function updateProgress(value) {
    progress = Math.min(100, value);
    progressBar.style.width = progress + '%';
  }

  function simulateLoading() {
    const startTime = Date.now();

    function tick() {
      const elapsed = Date.now() - startTime;
      const progressValue = (elapsed / LOAD_DURATION) * 100;

      updateProgress(progressValue);

      if (progressValue < 100) {
        requestAnimationFrame(tick);
      } else {
        finishLoading();
      }
    }

    tick();
  }

  function finishLoading() {
    updateProgress(100);

    setTimeout(() => {
      loader.classList.add('loader-hidden');
      mainContent.classList.remove('main-content-hidden');
      mainContent.classList.add('main-content-visible');

      setTimeout(() => {
        loader.style.display = 'none';
        stopMatrix();
        window.dispatchEvent(new Event('scroll')); // Atualiza animações de reveal
      }, 600);
    }, 200);
  }

  // ===== Iniciar =====
  startMatrix();
  simulateLoading();
})();
