/**
 * Add Eleventy data extensions support
 * https://www.11ty.dev/docs/data-custom/
 */
import jsYaml from "js-yaml";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => jsYaml.load(contents));
}
