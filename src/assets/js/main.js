import "@zachleat/table-saw";

// Components
import "./components/command-palette.js";
import { initThemeSwitcher } from "./components/theme-switcher.js";
import { initMobileMenu } from "./components/mobile-menu.js";
import { initTocTracker } from "./components/toc-tracker.js";
import { initAccountSwitcher } from "./components/account-switcher.js";

/**
 * DOM ready handler
 */
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // Add loaded class for CSS transitions
    document.body.classList.add("loaded");

    // Initialize components
    initThemeSwitcher();
    initMobileMenu();
    initTocTracker();
    initAccountSwitcher();
  },
  { once: true },
);
