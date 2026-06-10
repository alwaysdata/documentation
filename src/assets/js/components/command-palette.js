import translations from "../../../_data/translations.js";
/**
 * Search Components
 * Command Palette + Search Trigger as custom elements
 */

// Shared search icon (Phosphor magnifying-glass)
const SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/></svg>`;

// Platform detection for keyboard shortcut
const IS_MAC = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
const SHORTCUT = IS_MAC ? "⌘K" : "Ctrl+K";

// i18n
const locale = document.documentElement.lang;

/**
 * Search Trigger Web Component
 * Renders the search button in the top navigation
 *
 * Usage:
 *   <search-trigger></search-trigger>
 */
export class SearchTrigger extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button type="button"
              data-search-trigger
              class="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-slate-600 ring-1 ring-slate-900/10 transition hover:ring-slate-900/20 dark:bg-neutral-900/75 dark:text-neutral-300 dark:ring-inset dark:ring-white/5 dark:hover:bg-neutral-700/40 lg:flex">
        ${SEARCH_ICON.replace('width="20"', 'width="16"').replace('height="20"', 'height="16"')}
        <span class="flex-auto text-left">${translations.search.quickPlaceholder[locale]}</span>
        <span class="text-xs text-slate-600 dark:text-neutral-200">${SHORTCUT}</span>
      </button>
    `;
  }
}

/**
 * Command Palette Web Component
 * Spotlight/Alfred-style search modal with Pagefind
 *
 * Usage:
 *   <command-palette></command-palette>
 *
 * Triggers:
 *   - Cmd+K / Ctrl+K keyboard shortcut
 *   - "/" key when not in input
 *   - Any element with [data-search-trigger] attribute
 */
export class CommandPalette extends HTMLElement {
  constructor() {
    super();

    this.pagefind = null;
    this.selectedIndex = -1;
    this.resultItems = [];
    this.debounceTimer = null;
    this.isOpen = false;

    // Bind methods
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleGlobalKeydown = this.handleGlobalKeydown.bind(this);
  }

  connectedCallback() {
    this.render();
    this.cacheElements();
    this.bindEvents();
  }

  disconnectedCallback() {
    document.removeEventListener("keydown", this.handleGlobalKeydown);
  }

  render() {
    this.innerHTML = `
      <dialog class="search-modal">
        <div class="search-backdrop" data-close-modal></div>
        <div class="search-container">
          <div class="search-header">
            <div class="search-input-wrapper">
              <span class="search-icon">${SEARCH_ICON}</span>
              <label for="search-input" class="sr-only">${translations.search.mainPlaceholder[locale]}</label>
              <input type="search"
                     id="search-input"
                     class="search-input"
                     placeholder="${translations.search.mainPlaceholder[locale]}"
                     autocomplete="off"
                     autofocus>
              <kbd class="search-shortcut">esc</kbd>
            </div>
          </div>
          <div class="search-results">
            <div class="search-empty">
              <p>${translations.search.type[locale]}</p>
            </div>
          </div>
          <div class="search-footer">
            <div class="search-hints">
              <span class="search-hint"><kbd>↑</kbd><kbd>↓</kbd> ${translations.search.navigate[locale]}</span>
              <span class="search-hint"><kbd>↵</kbd> ${translations.search.select[locale]}</span>
              <span class="search-hint"><kbd>esc</kbd> ${translations.search.close[locale]}</span>
            </div>
          </div>
        </div>
      </dialog>
    `;
  }

  cacheElements() {
    this.dialog = this.querySelector("dialog");
    this.input = this.querySelector(".search-input");
    this.results = this.querySelector(".search-results");
  }

  bindEvents() {
    // Global keyboard shortcut: Cmd+K / Ctrl+K / "/"
    document.addEventListener("keydown", this.handleGlobalKeydown);

    // Trigger buttons anywhere in document
    document.querySelectorAll("[data-search-trigger]").forEach((trigger) => {
      trigger.addEventListener("click", () => this.open());
    });

    // Modal keyboard events
    this.dialog.addEventListener("keydown", this.handleKeydown);

    // Search input
    this.input.addEventListener("input", (e) => {
      this.debounceSearch(e.target.value);
    });

    // Click backdrop to close
    this.querySelectorAll("[data-close-modal]").forEach((el) => {
      el.addEventListener("click", () => this.close());
    });

    // Close on click outside container
    this.dialog.addEventListener("click", (e) => {
      if (e.target === this.dialog) {
        this.close();
      }
    });
  }

  handleGlobalKeydown(e) {
    // Cmd+K / Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      this.toggle();
    }
    // "/" to open (when not in input)
    if (e.key === "/" && !this.isOpen && !this.isInputFocused()) {
      e.preventDefault();
      this.open();
    }
  }

  handleKeydown(e) {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        this.close();
        break;
      case "ArrowDown":
        e.preventDefault();
        this.navigate(1);
        break;
      case "ArrowUp":
        e.preventDefault();
        this.navigate(-1);
        break;
      case "Enter":
        e.preventDefault();
        this.select();
        break;
    }
  }

  isInputFocused() {
    const active = document.activeElement;
    return (
      active &&
      (active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable)
    );
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  async open() {
    if (this.isOpen) return;

    this.isOpen = true;
    this.dialog.showModal();
    this.input.focus();
    this.selectedIndex = -1;
    document.body.style.overflow = "hidden";

    // Load Pagefind on first open
    if (!this.pagefind) {
      await this.loadPagefind();
    }
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.dialog.close();
    this.input.value = "";
    this.selectedIndex = -1;
    this.resultItems = [];
    this.renderEmpty();
    document.body.style.overflow = "";
  }

  async loadPagefind() {
    try {
      this.pagefind = await import("/pagefind/pagefind.js");
      await this.pagefind.options({
        ranking: {
          pageLength: 0,
        },
      });
      await this.pagefind.init();
    } catch (error) {
      console.error("Failed to load Pagefind:", error);
      this.renderError(translations.search.unavailable[locale]);
    }
  }

  debounceSearch(query) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.search(query);
    }, 150);
  }

  async search(query) {
    if (!query || query.trim().length < 2) {
      this.resultItems = [];
      this.renderEmpty();
      return;
    }

    if (!this.pagefind) {
      this.renderError(translations.search.pending[locale]);
      return;
    }

    try {
      this.renderLoading();
      const search = await this.pagefind.search(query);

      // Load result data (limit to 10 results)
      const results = await Promise.all(
        search.results.slice(0, 10).map(async (result) => {
          return await result.data();
        }),
      );

      this.resultItems = results;
      this.selectedIndex = results.length > 0 ? 0 : -1;
      this.renderResults(results, query);
    } catch (error) {
      console.error("Search error:", error);
      this.renderError(translations.search.fail[locale]);
    }
  }

  navigate(direction) {
    if (this.resultItems.length === 0) return;

    this.selectedIndex += direction;

    // Wrap around
    if (this.selectedIndex < 0) {
      this.selectedIndex = this.resultItems.length - 1;
    } else if (this.selectedIndex >= this.resultItems.length) {
      this.selectedIndex = 0;
    }

    this.updateSelection();
  }

  updateSelection() {
    const items = this.results.querySelectorAll(".search-result");
    items.forEach((item, index) => {
      item.classList.toggle("selected", index === this.selectedIndex);
      if (index === this.selectedIndex) {
        item.scrollIntoView({ block: "nearest" });
      }
    });
  }

  select() {
    if (
      this.selectedIndex >= 0 &&
      this.selectedIndex < this.resultItems.length
    ) {
      const result = this.resultItems[this.selectedIndex];
      if (result?.url) {
        window.location.href = result.url;
      }
    }
  }

  renderEmpty() {
    this.results.innerHTML = `
      <div class="search-empty">
        <p>${translations.search.type[locale]}</p>
      </div>
    `;
  }

  renderLoading() {
    this.results.innerHTML = `
      <div class="search-loading">
        <div class="search-loading-spinner"></div>
        <p>${translations.search.searching[locale]}</p>
      </div>
    `;
  }

  renderError(message) {
    this.results.innerHTML = `
      <div class="search-error">
        <p>${message}</p>
      </div>
    `;
  }

  renderResults(results, query) {
    if (results.length === 0) {
      this.results.innerHTML = `
        <div class="search-no-results">
          <p>No results found for "<strong>${this.escapeHtml(query)}</strong>"</p>
        </div>
      `;
      return;
    }

    const html = results
      .map(
        (result, index) => `
      <a href="${result.url}"
         class="search-result ${index === this.selectedIndex ? "selected" : ""}"
         data-index="${index}">
        <div class="search-result-title">${this.escapeHtml(result.meta?.title || result.url)}</div>
        ${result.excerpt ? `<div class="search-result-excerpt">${result.excerpt}</div>` : ""}
      </a>
    `,
      )
      .join("");

    this.results.innerHTML = html;

    // Add hover handlers
    this.results.querySelectorAll(".search-result").forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        this.selectedIndex = index;
        this.updateSelection();
      });
    });
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}

// Register custom elements
customElements.define("search-trigger", SearchTrigger);
customElements.define("command-palette", CommandPalette);
