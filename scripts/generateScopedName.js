console.log("demo");
const postcss = require("postcss");
const fs = require("fs");
const atImport = require("postcss-import");
const tailwind = require("tailwindcss");
const postcssConfig = require("../postcss.config");
const path = require('path')

module.exports = function generateScopedName(localName, resourcePath) {
    fs.writeFileSync("/Users/bernaddelic/demo.txt", localName)
    return `${fileNameOrPath}_${localName}_${hash}`;
};
