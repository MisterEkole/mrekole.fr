type Theme = 'light' | 'dark' | 'auto';

function getStoredTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'auto';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
  updateToggleIcon(theme);
}

function updateToggleIcon(theme: Theme) {
  const btn = document.querySelector('.theme-toggle') as HTMLElement;
  if (!btn) return;

  const resolvedTheme =
    theme === 'auto'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;

  btn.setAttribute('aria-label', `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`);
  btn.innerHTML =
    resolvedTheme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function cycleTheme() {
  const current = getStoredTheme();
  const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let next: Theme;
  if (current === 'auto') {
    next = isDarkOS ? 'light' : 'dark';
  } else {
    next = 'auto';
  }

  localStorage.setItem('theme', next);
  applyTheme(next);
}

// Init
applyTheme(getStoredTheme());

const btn = document.querySelector('.theme-toggle');
if (btn) btn.addEventListener('click', cycleTheme);

// Listen for OS theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (getStoredTheme() === 'auto') {
    updateToggleIcon('auto');
  }
});
