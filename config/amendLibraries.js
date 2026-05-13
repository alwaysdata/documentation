/**
 * Amend Eleventy library instances (Markdown, etc.)
 * https://www.11ty.dev/docs/languages/markdown/#optional-amend-the-library-instance
 */
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";
import MarkdownItGitHubAlerts from "markdown-it-github-alerts";

// Phosphor icon SVG for anchor links
const linkIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"/></svg>`;

// Phosphor arrow-bend-up-left icon for footnote back reference (inline)
const footnoteBackIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 256 256" fill="currentColor" style="display:inline;vertical-align:middle"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"/></svg>`;

export default function (eleventyConfig) {
  eleventyConfig.amendLibrary("md", (mdLib) => {
    // Anchor links for headings
    mdLib.use(markdownItAnchor, {
      level: [2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: linkIconSvg,
        class: "anchor-link",
        placement: "before",
        ariaHidden: true,
      }),
      tabIndex: false,
    });

    // Footnotes support
    mdLib.use(markdownItFootnote);

    // Customize footnote reference to remove brackets (just show number)
    mdLib.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
      const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
      const caption = slf.rules.footnote_caption(
        tokens,
        idx,
        options,
        env,
        slf,
      );
      return `<sup class="footnote-ref"><a href="#fn${id}" id="fnref${id}" class="no-underline" aria-label="Footnote ${caption}">${caption}</a></sup>`;
    };

    // Customize footnote caption to remove brackets
    mdLib.renderer.rules.footnote_caption = (tokens, idx) => {
      let n = Number(tokens[idx].meta.id + 1).toString();
      if (tokens[idx].meta.subId > 0) {
        n += ":" + tokens[idx].meta.subId;
      }
      return n;
    };

    // Customize footnote back reference to use Phosphor icon
    mdLib.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
      let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
      return ` <a href="#fnref${id}" class="footnote-backref no-underline" aria-label="Back to content">${footnoteBackIconSvg}</a>`;
    };

    // Github alerts
    mdLib.use(MarkdownItGitHubAlerts, { markers: "*" });
  });
}
