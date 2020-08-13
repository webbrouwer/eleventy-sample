const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addPassthroughCopy({
        "node_modules/tiny-slider/dist/tiny-slider.css": "tiny-slider.css",
        "node_modules/tiny-slider/dist/min/tiny-slider.js": "tiny-slider.js"
    });

};