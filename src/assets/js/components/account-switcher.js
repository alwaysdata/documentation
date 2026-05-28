const accountFR = "[compte]";
const accountEN = "[account]";
const mainTarget = ".doc-page *";

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

export function initAccountSwitcher() {
  const currentAccount = document.cookie
    .split("; ")
    .find((row) => row.startsWith("currentAccount"))
    ?.split("=")[1];
  const locale = document.documentElement.lang;
  const stringToReplace = locale === "fr" ? accountFR : accountEN;
  const elements = document.querySelectorAll(mainTarget);

  if (currentAccount && elements)
    accountSwitch(currentAccount, stringToReplace, elements);
}
