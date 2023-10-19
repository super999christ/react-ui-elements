const { generateScopedNameFactory } = require('@dr.pogodin/babel-plugin-react-css-modules/utils');

let pluginsList = [
  require("tailwindcss"),
  require("autoprefixer"),
];

if (process.env.NODE_ENV === "production") {
  pluginsList.push(
    require('postcss-modules')({
      generateScopedName: generateScopedNameFactory("pbui-[hash:base64:5]")
    }),
    require('cssnano')
  );
}

module.exports = {
  plugins: pluginsList,
};