/**
 * Eleventy transforms for post-processing HTML output
 * https://www.11ty.dev/docs/transforms/
 */
import { minify as minifyHTML } from "html-minifier-terser";
import { parseHTML } from "linkedom";
import jsYaml from "js-yaml";

export default function (eleventyConfig) {
  // Wrap tables in <table-saw> for responsive tables
  eleventyConfig.addTransform("table-saw", function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) {
      return content;
    }

    // Quick check if there are any tables to process
    if (!content.includes("<table")) {
      return content;
    }

    const { document } = parseHTML(content);
    const tables = document.querySelectorAll("table:not(table-saw table)");

    if (tables.length === 0) {
      return content;
    }

    tables.forEach((table) => {
      // Skip if already wrapped
      if (table.parentElement?.tagName?.toLowerCase() === "table-saw") {
        return;
      }

      // Skip if table has data-table-saw="none" attribute
      if (table.getAttribute("data-table-saw") === "none") {
        return;
      }

      const tableSaw = document.createElement("table-saw");
      table.parentNode.insertBefore(tableSaw, table);
      tableSaw.appendChild(table);
    });

    return document.toString();
  });

  // Make code blocks keyboard accessible
  eleventyConfig.addTransform("a11y-pre", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(/<pre([^>]*)>/g, (match, attrs) => {
        if (attrs.includes("tabindex")) return match;
        return `<pre${attrs} tabindex="0">`;
      });
    }
    return content;
  });

  // External links - add target="_blank" and rel="noopener"
  eleventyConfig.addTransform("externalLinks", function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) {
      return content;
    }

    if (!content.includes('href="http')) {
      return content;
    }

    const { document } = parseHTML(content);
    const anchors = document.querySelectorAll("a[href^='http']");

    anchors.forEach((el) => {
      const href = el.getAttribute("href");
      try {
        const url = new URL(href);
        // Skip internal links
        if (
          url.hostname.includes("help.alwaysdata.com") ||
          url.hostname.includes("localhost")
        ) {
          return;
        }
        // Add noopener to rel
        let existingRel = (el.getAttribute("rel") || "")
          .split(" ")
          .filter(Boolean);
        if (!existingRel.includes("noopener")) {
          existingRel.push("noopener");
        }
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", existingRel.join(" ").trim());
      } catch {
        // Invalid URL, skip
      }
    });

    return document.toString();
  });

  // HTML/XML/JSON minification in production
  eleventyConfig.addTransform("minify", async function (content, outputPath) {
    if (process.env.ELEVENTY_ENV !== "production" || !outputPath) {
      return content;
    }

    if (outputPath.endsWith(".json")) {
      try {
        return JSON.stringify(JSON.parse(content));
      } catch {
        return content;
      }
    }

    if (outputPath.endsWith(".html")) {
      return minifyHTML(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: false,
        minifyJS: true,
        minifyCSS: true,
        keepClosingSlash: true,
        processScripts: ["application/ld+json"],
      });
    }

    if (outputPath.endsWith(".xml")) {
      return minifyHTML(content, {
        removeComments: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
      });
    }

    return content;
  });
}
