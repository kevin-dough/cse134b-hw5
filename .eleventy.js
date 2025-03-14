module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/images/");
  eleventyConfig.addPassthroughCopy("src/data/");
  eleventyConfig.addWatchTarget("src/css/");

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}