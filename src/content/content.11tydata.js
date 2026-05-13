export default {
  layout: "layouts/page.njk",
  eleventyComputed: {
    permalink: (data) => {
      // If page has explicit permalink, use it
      if (data.permalink) return data.permalink;

      // Homepage - check for index.md in content root
      if (
        data.slug === "home" ||
        data.page.inputPath.endsWith("/content/index.md")
      ) {
        return "/";
      }

      // Extract path relative to content folder
      const inputPath = data.page.inputPath;
      const contentMatch = inputPath.match(/\/content\/(.+?)(?:\/index)?\.md$/);
      if (contentMatch) {
        return `/${contentMatch[1]}/`;
      }

      // Fallback to file slug
      return `/${data.page.fileSlug}/`;
    },
  },
};
