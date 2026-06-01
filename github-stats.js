/**
 * Estatísticas públicas do GitHub no hero (API + cache de 1h)
 */
(function () {
  const GITHUB_USER = 'douglasmouradev';
  const CACHE_KEY = 'portfolio-github-stats';
  const CACHE_TTL_MS = 60 * 60 * 1000;

  const container = document.getElementById('hero-github-stats');
  const reposEl = document.getElementById('github-repos-count');
  const contribEl = document.getElementById('github-contrib-count');
  const contribWrap = document.getElementById('github-contrib-stat');

  if (!container || !reposEl) return;

  function readCache() {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (Date.now() - data.ts > CACHE_TTL_MS) return null;
      return data;
    } catch {
      return null;
    }
  }

  function writeCache(data) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ...data, ts: Date.now() }));
    } catch {
      /* quota */
    }
  }

  function formatNumber(n) {
    return new Intl.NumberFormat(document.documentElement.lang || 'pt-BR').format(n);
  }

  function render(data) {
    if (typeof data.repos === 'number') {
      reposEl.textContent = formatNumber(data.repos);
    }
    if (typeof data.contributions === 'number' && contribEl && contribWrap) {
      contribEl.textContent = formatNumber(data.contributions);
      contribWrap.hidden = false;
    } else if (contribWrap) {
      contribWrap.hidden = true;
    }
    container.hidden = false;
    container.classList.add('is-loaded');
  }

  async function load() {
    const cached = readCache();
    if (cached) {
      render(cached);
      return;
    }

    try {
      const [userRes, contribRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USER}`, {
          headers: { Accept: 'application/vnd.github+json' }
        }),
        fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
      ]);

      const data = { repos: null, contributions: null };

      if (userRes.ok) {
        const user = await userRes.json();
        data.repos = user.public_repos;
      }

      if (contribRes.ok) {
        const contrib = await contribRes.json();
        data.contributions = contrib.total?.lastYear ?? null;
      }

      if (data.repos == null && data.contributions == null) return;

      writeCache(data);
      render(data);
    } catch (err) {
      console.warn('[github-stats]', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
