import dataExtensions from "./config/dataExtensions.js";
import collections from "./config/collections.js";
import filters from "./config/filters.js";
import shortcodes from "./config/shortcodes.js";
import transforms from "./config/transforms.js";
import plugins from "./config/plugins.js";
import amendLibraries from "./config/amendLibraries.js";

export default function (eleventyConfig) {
  // Data extensions (YAML support)
  dataExtensions(eleventyConfig);
  // Layout aliases
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("docs", "layouts/docs.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("nada", "layouts/nada.njk");

  // Collections
  collections(eleventyConfig);

  // Filters
  filters(eleventyConfig);

  // Shortcodes
  shortcodes(eleventyConfig);

  // Transforms
  transforms(eleventyConfig);

  // Plugins
  plugins(eleventyConfig);

  // Amend libraries (markdown anchors)
  amendLibraries(eleventyConfig);

  // Pass-through copies
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // Server options
  eleventyConfig.setServerOptions({
    port: 8080,
    watch: ["_site/assets/css/**/*.css", "_site/assets/js/**/*.js"],
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
