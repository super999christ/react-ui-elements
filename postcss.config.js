const { generateScopedNameFactory } = require('@dr.pogodin/babel-plugin-react-css-modules/utils');

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require('postcss-modules')({
      generateScopedName: generateScopedNameFactory("pbui-[hash:base64:5]")
    }), 
    require('cssnano')
  ],
};
