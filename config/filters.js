/**
 * Custom Eleventy filters
 * https://www.11ty.dev/docs/filters/
 */
import slugify from "@sindresorhus/slugify";

// TOC Configuration
const TOC_HTML_TAGS = ["h2", "h3", "h4"];
const TOC_MIN_TAGS = 1;

// Extract HTML tags from string for TOC generation
function extractHtmlTags(string, tagsToFind) {
  const found = [];
  string.replace(
    /<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g,
    (m, tag, content) => {
      if (tagsToFind.includes(tag)) {
        // Strip anchor links (from markdown-it-anchor) from heading content
        const cleanContent = content
          .replace(/<a[^>]*class="anchor-link"[^>]*>.*?<\/a>\s*/g, "")
          .trim();
        found.push({ tagName: tag, value: cleanContent });
      }
    },
  );
  return found;
}

export default function (eleventyConfig) {
  // head - Get first N items from array
  eleventyConfig.addFilter("head", function (array, n) {
    if (!Array.isArray(array)) return array;
    if (n < 0) return array.slice(n);
    return array.slice(0, n);
  });

  // flattenNavigation - Flatten nested navigation into a flat array
  eleventyConfig.addFilter("flattenNavigation", function (nav) {
    const result = [];
    function flatten(items) {
      for (const item of items) {
        result.push(item);
        if (item.children && item.children.length) {
          flatten(item.children);
        }
      }
    }
    flatten(nav);
    return result;
  });

  // dateToISOString - Convert date to ISO string
  eleventyConfig.addFilter("dateToISOString", function (date) {
    if (!date) return "";
    return new Date(date).toISOString();
  });

  // isExternalUrl - Check if URL is external
  eleventyConfig.addFilter("isExternalUrl", function (url) {
    if (!url) return false;
    return url.startsWith("http://") || url.startsWith("https://");
  });

  // dateString - Format date as YYYY-MM-DD
  eleventyConfig.addFilter("dateString", function (date) {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  });

  // humanReadable - Format date as YYYY-MM-DD
  eleventyConfig.addFilter("humanReadable", function (date, locale) {
    const d = new Date(date);
    return new Intl.DateTimeFormat(locale, {
      dateStyle: "long",
    }).format(d);
  });

  // toc - Generate table of contents from headings
  eleventyConfig.addAsyncFilter("toc", async function (content) {
    const htmlTagsFound = extractHtmlTags(content, TOC_HTML_TAGS);
    let tocMarkup = "";
    if (htmlTagsFound.length > TOC_MIN_TAGS) {
      tocMarkup = `<ul class="space-y-2 text-sm">`;
      const anchorsIds = [];
      htmlTagsFound.forEach(function (htmlTag, tagIndex) {
        const tag = htmlTag.tagName;
        let slugifiedId = slugify(htmlTag.value);
        if (anchorsIds.includes(slugifiedId)) {
          slugifiedId += `-${tagIndex}`;
        }
        anchorsIds.push(slugifiedId);
        tocMarkup += `<li><a href="#${slugifiedId}" class="toc-${tag}">${htmlTag.value}</a></li>`;
      });
      tocMarkup += "</ul>";
    }
    return tocMarkup;
  });

  // dateToRfc3339 - Convert date to RFC 3339 format for feeds
  eleventyConfig.addFilter("dateToRfc3339", function (date) {
    if (!date) return "";
    return new Date(date).toISOString();
  });

  // getNewestCollectionItemDate - Get the most recent date from a collection
  eleventyConfig.addFilter(
    "getNewestCollectionItemDate",
    function (collection) {
      if (!collection || !collection.length) return new Date();
      return collection.reduce((newest, item) => {
        const itemDate = item.date || item.data?.date;
        return itemDate > newest ? itemDate : newest;
      }, collection[0].date || new Date());
    },
  );

  // absoluteUrl - Convert relative URL to absolute
  eleventyConfig.addFilter("absoluteUrl", function (url, base) {
    if (!url) return base;
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return new URL(url, base).href;
  });

  // htmlEscape - Escape HTML entities for XML feeds
  eleventyConfig.addFilter("htmlEscape", function (str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  });

  // Filter by lang
  eleventyConfig.addFilter("pageLang", function (value) {
    return value.filter((item) => item.page.lang === this.page.lang);
  });

  // Temporary fix for `i18n | locale_links`
  // https://github.com/11ty/buildawesome/issues/3555
  eleventyConfig.addFilter("fixLocaleLinks", function (links, lang) {
    if (!this.ctx.pagination) { return links; }
    if (!lang) lang = this.page.lang || this.ctx.lang;
    const filtered = links.filter(item => item?.url?.endsWith(this.page.url.replace('/' + lang, '')));
    return filtered;
  });
}
