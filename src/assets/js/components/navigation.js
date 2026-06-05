/**
 * Navigation
 * Make sure a nav section is opened if an active page is part of that section
 */

// VARS
const rootItem = document.querySelectorAll("nav details");

// FUNCTIONS
function openSection() {
  for (const section of rootItem) {
    if (section.querySelectorAll(".active").length > 0)
      section.setAttribute("open", true);
  }
}

// EXPORT
export function initNav() {
  openSection();
}
