/**
 * Custom Eleventy collections
 * https://www.11ty.dev/docs/collections/
 */
export default function (eleventyConfig) {
  // docs - Get all documentation pages sorted by order then title
  eleventyConfig.addCollection("docs", function (collectionsApi) {
    return collectionsApi.getFilteredByTag("docs").sort((a, b) => {
      const orderA = a.data.order ?? 999;
      const orderB = b.data.order ?? 999;
      if (orderA !== orderB) return orderA - orderB;
      return (a.data.title || "").localeCompare(b.data.title || "");
    });
  });

  // blogFr - Get all French blog entries sorted by date descending
  eleventyConfig.addCollection("blogFr", function (collectionsApi) {
    return collectionsApi
      .getFilteredByTag("blog")
      .sort((a, b) => b.date - a.date)
      .filter((item) => item.page.lang === 'fr');
  });

  // blogEn - Get all English blog entries sorted by date descending
  eleventyConfig.addCollection("blogEn", function (collectionsApi) {
    return collectionsApi
      .getFilteredByTag("blog")
      .sort((a, b) => b.date - a.date)
      .filter((item) => item.page.lang === 'en');
  });

  // myTags - Get all tags with their counts, sorted by count descending
  // Excludes internal tags: release, docs
  eleventyConfig.addCollection("myTags", function (collectionsApi) {
    const allData = collectionsApi.getAll();
    const excludedTags = ["release", "docs"];
    let unsortedTagsCount = {};

    allData.forEach(function (item) {
      if (typeof item.data.tags == "object") {
        item.data.tags.forEach(function (tag) {
          if (!excludedTags.includes(tag)) {
            if (unsortedTagsCount[tag] === undefined) {
              unsortedTagsCount[tag] = 1;
            } else {
              unsortedTagsCount[tag]++;
            }
          }
        });
      }
    });

    let sortedObject = Object.fromEntries(
      Object.entries(unsortedTagsCount).sort(([, a], [, b]) => b - a),
    );
    return Object.entries(sortedObject);
  });

  // sitemap - All pages that should be in sitemap
  eleventyConfig.addCollection("sitemap", function (collectionsApi) {
    return collectionsApi.getAll().filter((item) => {
      return (
        item.url &&
        !item.data.noindex &&
        !item.data.eleventyExcludeFromCollections
      );
    });
  });
}
