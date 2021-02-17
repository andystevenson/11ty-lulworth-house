const htmlminifier = require("html-minifier");

function htmlmin(content, outputPath) {
  // Eleventy 1.0+: use this.inputPath and this.outputPath instead
  if (outputPath.endsWith(".html")) {
    let minified = htmlminifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true
    });
    return minified;
  }

  return content;
}

function imagesOf(path) {

}

module.exports = function (config) {
  config.addTransform("htmlmin", htmlmin);
  config.setDataDeepMerge(true);
  config.addWatchTarget("./src/sass/");
  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./CNAME");

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk"
  };
};
