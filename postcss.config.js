const { generateScopedNameFactory } = require('@dr.pogodin/babel-plugin-react-css-modules/utils');

let pluginsList = [
  require("tailwindcss"),
  require("autoprefixer"),
];

module.exports = {
  plugins: pluginsList,
};