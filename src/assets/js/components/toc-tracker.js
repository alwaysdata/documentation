/**
 * TOC Tracker Component
 * Tracks scroll position and highlights active TOC item
 */

export function initTocTracker() {
  const tocContainer = document.querySelector(".toc");
  const mobileTocContainer = document.querySelector(".mobile-toc-nav");

  if (!tocContainer && !mobileTocContainer) return;

  const tocLinks = document.querySelectorAll(".toc a, .mobile-toc-nav a");
  const headingIds = Array.from(tocLinks).map((link) =>
    link.getAttribute("href").slice(1)
  );
  const headings = headingIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!headings.length) return;

  let clickedId = null;
  let scrollEndTimeout = null;

  function setActiveLink(activeId) {
    tocLinks.forEach((link) => {
      const href = link.getAttribute("href").slice(1);
      link.classList.toggle("active", href === activeId);
    });
  }

  function updateActiveTocItem() {
    // If user clicked a link, keep it highlighted until scrolling stops
    if (clickedId) {
      // Reset timeout on each scroll - wait for scrolling to fully stop
      if (scrollEndTimeout) clearTimeout(scrollEndTimeout);
      scrollEndTimeout = setTimeout(() => {
        clickedId = null;
        updateActiveTocItem();
      }, 150);
      return;
    }

    const scrollPosition = window.scrollY + 100;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    // If at bottom of page, highlight last item
    if (window.scrollY >= maxScroll - 10) {
      setActiveLink(headingIds[headingIds.length - 1]);
      return;
    }

    let activeId = null;
    for (let i = headings.length - 1; i >= 0; i--) {
      if (headings[i].offsetTop <= scrollPosition) {
        activeId = headings[i].id;
        break;
      }
    }

    // Default to first item when at top of page
    if (!activeId && headingIds.length > 0) {
      activeId = headingIds[0];
    }

    setActiveLink(activeId);
  }

  // Track clicks on TOC links
  tocLinks.forEach((link) => {
    link.addEventListener("click", () => {
      clickedId = link.getAttribute("href").slice(1);
      setActiveLink(clickedId);
    });
  });

  window.addEventListener("scroll", updateActiveTocItem, { passive: true });
  updateActiveTocItem();
}
