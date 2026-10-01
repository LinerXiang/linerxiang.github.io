(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('personal-site-theme'); } catch (_) {}
  let hasPreference = savedTheme === 'dark' || savedTheme === 'light';

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#171c23' : '#ffffff';
  }

  applyTheme(hasPreference ? savedTheme : preference.matches ? 'dark' : 'light');
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    hasPreference = true;
    try { localStorage.setItem('personal-site-theme', next); } catch (_) {}
  });
  preference.addEventListener('change', event => {
    if (!hasPreference) applyTheme(event.matches ? 'dark' : 'light');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
