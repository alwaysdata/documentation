/**
 * Eleventy plugins configuration
 * https://www.11ty.dev/docs/plugins/
 */
import slugify from "@sindresorhus/slugify";
import { createHighlighter, bundledLanguages } from "shiki";

// 11ty plugins
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginPhosphorIcons from "eleventy-plugin-phosphoricons";
import pluginSpeculationRules from "eleventy-plugin-speculation-rules";
import { I18nPlugin } from "@11ty/eleventy";

// Image transform configuration
const CONTENT_WIDTH = 700;

function getImageTransformConfig() {
  return {
    urlPath: "/assets/img/",
    outputDir: "./_site/assets/img/",
    formats: ["svg", "avif", "webp"],
    useCache: true,
    svgShortCircuit: true,
    widths: [CONTENT_WIDTH + 30, CONTENT_WIDTH * 2, CONTENT_WIDTH * 4],
    filenameFormat: function (id, src, width, format, options) {
      const filename = src.split("/").slice(-1)[0].split(".")[0];
      return `${slugify(filename)}-${id}-__${width}__.${format}`;
    },
    sharpOptions: {
      animated: true,
    },
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {
        class: "eleventy-image",
      },
    },
  };
}

export default function (eleventyConfig) {
  // Configure Nunjucks to look in additional directories for includes
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true,
  });

  // Shiki syntax highlighting - initialize before build
  let shikiHighlighter;

  eleventyConfig.on("eleventy.before", async () => {
    shikiHighlighter = await createHighlighter({
      themes: ["github-dark-high-contrast"],
      langs: Object.keys(bundledLanguages),
    });
  });

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.renderer.rules.fence = (tokens, idx) => {
      const token = tokens[idx];
      const lang = token.info.trim() || "text";
      const code = token.content.trimEnd();

      if (shikiHighlighter) {
        try {
          const loadedLangs = shikiHighlighter.getLoadedLanguages();
          const langToUse = loadedLangs.includes(lang) ? lang : "text";

          return shikiHighlighter.codeToHtml(code, {
            lang: langToUse,
            theme: "github-dark-high-contrast",
          });
        } catch (e) {
          console.warn(`Shiki error for lang "${lang}":`, e.message);
        }
      }

      // Fallback: escape HTML
      const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      return `<pre class="shiki"><code class="language-${lang}">${escaped}</code></pre>`;
    };
  });

  // EleventyHtmlBasePlugin - Handles base path for URLs
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // InputPathToUrlTransformPlugin - Transforms input paths to URLs
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  // eleventyNavigationPlugin - Navigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // eleventyImageTransformPlugin - Image optimization
  eleventyConfig.addPlugin(
    eleventyImageTransformPlugin,
    getImageTransformConfig(),
  );

  // pluginRss - RSS feed generation
  eleventyConfig.addPlugin(pluginRss);

  // Phosphor Icons - SVG icon library
  eleventyConfig.addPlugin(pluginPhosphorIcons, {
    class: "phicon",
    size: 24,
    fill: "currentColor",
  });

  // Internationalization
  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "en",
    errorMode: "strict",
  });

  // Speculation Rules - prefetching/prerendering for faster navigation
  eleventyConfig.addPlugin(pluginSpeculationRules);
}
