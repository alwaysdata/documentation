/**
 * Mobile Menu Component
 * Handles mobile sidebar and TOC drawer interactions
 */

export function initMobileMenu() {
  // Mobile sidebar menu
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const menuClose = document.getElementById("mobile-menu-close");
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");

  function isMobileMenuOpen() {
    return mobileSidebar && !mobileSidebar.classList.contains("hidden");
  }

  function openMobileMenu() {
    mobileSidebar?.classList.remove("hidden");
    sidebarOverlay?.classList.remove("hidden");
    menuIconOpen?.classList.add("hidden");
    menuIconClose?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileSidebar?.classList.add("hidden");
    sidebarOverlay?.classList.add("hidden");
    menuIconOpen?.classList.remove("hidden");
    menuIconClose?.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function toggleMobileMenu() {
    isMobileMenuOpen() ? closeMobileMenu() : openMobileMenu();
  }

  menuToggle?.addEventListener("click", toggleMobileMenu);
  menuClose?.addEventListener("click", closeMobileMenu);
  sidebarOverlay?.addEventListener("click", closeMobileMenu);

  // Mobile TOC drawer
  const tocToggle = document.getElementById("mobile-toc-toggle");
  const tocClose = document.getElementById("mobile-toc-close");
  const mobileToc = document.getElementById("mobile-toc");
  const tocOverlay = document.getElementById("mobile-toc-overlay");
  const topBtn = document.getElementById("mobile-top-btn");

  function isTocOpen() {
    return mobileToc && !mobileToc.classList.contains("hidden");
  }

  function openMobileToc() {
    mobileToc?.classList.remove("hidden");
    tocOverlay?.classList.remove("hidden");
  }

  function closeMobileToc() {
    mobileToc?.classList.add("hidden");
    tocOverlay?.classList.add("hidden");
  }

  function toggleMobileToc() {
    isTocOpen() ? closeMobileToc() : openMobileToc();
  }

  tocToggle?.addEventListener("click", toggleMobileToc);
  tocClose?.addEventListener("click", closeMobileToc);
  tocOverlay?.addEventListener("click", closeMobileToc);

  // Close TOC when clicking a link
  mobileToc?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileToc);
  });

  // TOP button: close TOC if open, then scroll to top
  topBtn?.addEventListener("click", () => {
    if (isTocOpen()) closeMobileToc();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
