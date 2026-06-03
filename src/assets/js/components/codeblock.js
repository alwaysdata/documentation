import translations from "../../../_data/translations.js";
/**
 * Enhance codeblocks
 * Adds language label and copy code features
 */

// VARS
const codeblocks = document.querySelectorAll("pre.shiki");
const locale = document.documentElement.lang;
const copyIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"/></svg>';
const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16" fill="currentColor"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/></svg>';

// FUNCTIONS
function initCodeblocks() {
  for (const block of codeblocks) {
    addCopyCodeButton(block);
    addLabel(block);
  }
}

function addLabel(pre) {
  const label = document.createElement("span");

  label.classList.add("lang");
  label.textContent = pre.dataset.lang;

  pre.appendChild(label);
}

function addCopyCodeButton(pre) {
  const button = document.createElement("button");
  const label = document.createElement("em");
  const icon = document.createElement("span");

  button.type = "button";
  button.classList.add("copy-code-button");
  button.title = `${translations.copy.title[locale]}`;
  button.ariaLabel = `${translations.copy.label[locale]}`;
  icon.classList.add("svg");
  icon.innerHTML = copyIcon;

  button.appendChild(label);
  button.appendChild(icon);

  button.addEventListener("click", () => {
    copyCodeToClipboard(pre.firstChild).then(() => {
      button.classList.add("copied");
      icon.innerHTML = checkIcon;
      label.textContent = `${translations.copy.done[locale]}`;
      window.setTimeout(() => {
        label.textContent = "";
        icon.innerHTML = copyIcon;
        button.classList.remove("copied");
      }, 3000);
    });
  });

  pre.appendChild(button);
}

function copyCodeToClipboard(codeblock) {
  const code = codeblock.innerText;
  return navigator.clipboard.writeText(code);
}

// EXPORT
export function initCodeblock() {
  initCodeblocks();
}
