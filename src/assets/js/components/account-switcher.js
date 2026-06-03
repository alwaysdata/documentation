import Cookies from "js-cookie";
/**
 * Account Switcher Component
 * Handles replacement of generic `[account]/[compte]` string with user account name
 */

// VARS
// --- Settings
const accountFR = "[compte]";
const accountEN = "[account]";
const mainTarget = ".doc-page *";
const formId = "#accountForm";
const bannerClass = ".cookie-banner";
const closeBannerButtonClass = ".close-banner";
const cookie = "currentAccount";

// --- Globals
const locale = document.documentElement.lang;
const form = document.querySelector(formId);
const banner = document.querySelector(bannerClass);
const closeBannerButton = document.querySelector(closeBannerButtonClass);

// FUNCTIONS
function accountSwitch(account, stringToReplace, targets) {
  const pattern = new RegExp(`${RegExp.escape(stringToReplace)}`, "g");

  for (const parent of targets) {
    for (const child of parent.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        child.textContent = child.textContent.replace(pattern, account);
      }
    }
  }
}

function setCookie(account) {
  const options = {
    path: "/",
    expires: 90,
    domain: ".alwaysdata.com",
    sameSite: "Lax",
  };

  if (Cookies.get(cookie)) {
    Cookies.remove(cookie);
  }

  Cookies.set(cookie, account, options);
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const newAccount = formData.get("account");

  displayCurrentAccount(newAccount, locale);
  setCookie(newAccount);
}

function displayCurrentAccount(account, locale) {
  const registered = document.querySelector(".info-registered");
  const none = document.querySelector(".info-none");

  if (account) {
    const text =
      locale === "fr"
        ? "Le compte enregistré actuellement est : "
        : "The current registered account is: ";
    registered.querySelector(".info-text").textContent = text;
    registered.querySelector("code").textContent = account;
    registered.classList.remove("hidden");
    none.classList.add("hidden");
  } else {
    const text =
      locale === "fr"
        ? "Vous n'avez pas de compte renseigné pour le moment."
        : "You don't have any entered account yet.";
    none.querySelector("em").textContent = text;
    none.classList.remove("hidden");
    registered.classList.add("hidden");
  }
}

function displayAccountBanner(account) {
  if (banner && !localStorage.getItem("bannerSeen")) {
    const slot = banner.querySelector("code");

    closeBannerButton.addEventListener("click", hideAccountBanner);
    slot.textContent = account;
    banner.classList.remove("hidden");
  }
}

function hideAccountBanner() {
  banner.classList.add("hidden");
  localStorage.setItem("bannerSeen", "true");
}

// EVENTS
form?.addEventListener("submit", handleSubmit);

// EXPORT
export function initAccountSwitcher() {
  const currentAccount = Cookies.get(cookie);
  const stringToReplace = locale === "fr" ? accountFR : accountEN;
  const elements = document.querySelectorAll(mainTarget);

  if (currentAccount && elements) {
    accountSwitch(currentAccount, stringToReplace, elements);
    displayAccountBanner(currentAccount);
  }

  if (form) {
    displayCurrentAccount(currentAccount, locale);
  }
}
