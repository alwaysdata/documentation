/**
 * Theme Switcher Component
 * Handles auto/light/dark theme switching with system preference support
 */

const STORAGE_KEY = "ADDocs";

function getPrefs() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

function savePrefs(prefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

function applyTheme(theme, buttons) {
  const html = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (theme === "dark" || (theme === "auto" && prefersDark)) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // Update aria-checked states
  buttons.forEach((btn) => {
    btn.setAttribute(
      "aria-checked",
      btn.dataset.theme === theme ? "true" : "false",
    );
  });

  // Save preference
  const prefs = getPrefs();
  prefs.colorScheme = theme;
  savePrefs(prefs);
}

export function initThemeSwitcher() {
  const themeButtons = document.querySelectorAll(".theme-option");
  if (!themeButtons.length) return;

  // Initialize button states
  const prefs = getPrefs();
  const currentTheme = prefs.colorScheme || "auto";

  themeButtons.forEach((btn) => {
    btn.setAttribute(
      "aria-checked",
      btn.dataset.theme === currentTheme ? "true" : "false",
    );
    btn.addEventListener("click", () =>
      applyTheme(btn.dataset.theme, themeButtons),
    );
  });

  applyTheme(currentTheme, themeButtons);

  // Listen for system theme changes when in auto mode
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const prefs = getPrefs();
      if (prefs.colorScheme === "auto" || !prefs.colorScheme) {
        applyTheme("auto", themeButtons);
      }
    });
}
