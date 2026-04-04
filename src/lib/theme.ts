const STORAGE_KEY = 'portfolio-theme';

function syncThemeColor(theme: 'dark' | 'light') {
  const colors = { dark: '#050506', light: '#f8f9fc' };
  const color = colors[theme] ?? colors.dark;

  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((meta) => {
      meta.setAttribute('content', color);
    });
}

function applyTheme(theme: 'dark' | 'light') {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  syncThemeColor(theme);

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures.
  }
}

function setTransitionOrigin(button: HTMLElement) {
  const root = document.documentElement;
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  root.style.setProperty('--vt-x', `${x}px`);
  root.style.setProperty('--vt-y', `${y}px`);
}

export function toggleTheme(button: HTMLElement) {
  const root = document.documentElement;
  const current = root.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  setTransitionOrigin(button);

  if (!reduced && typeof document.startViewTransition === 'function') {
    document.startViewTransition(() => {
      applyTheme(next);
    });
  } else {
    applyTheme(next);
  }
}
