console.log("demo");
const postcss = require("postcss");
const fs = require("fs");
const atImport = require("postcss-import");
const tailwind = require("tailwindcss");
const postcssConfig = require("../postcss.config");
const path = require("path");

function preprocess(css, filepath) {
  postcss(postcssConfig.plugins)
    .process(css, { from: filepath })
    .then(result => {
      fs.appendFileSync("/Users/bernaddelic/work/pickleballinc/react-ui/build/bundle.css", result.css)
    })

  return css
}

module.exports = preprocess;