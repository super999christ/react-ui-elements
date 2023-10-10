const gulp = require("gulp");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const cleanCSS = require("gulp-clean-css");
const merge = require('merge-stream');


gulp.task("process", function () {
  const cssStream1 = gulp
    .src("src/**/*.module.css") // Source all CSS files in the directory and subdirectories
    .pipe(postcss());

  // Process the second CSS file
  const cssStream2 = gulp
    .src("src/datepicker.css") // Source all CSS files in the directory and subdirectories
    .pipe(postcss([tailwindcss(), autoprefixer(), cssnano()]));

  return merge(cssStream1, cssStream2)
    .pipe(concat("bundle.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("build/stylesheets"));
});

gulp.task('css', gulp.series('process'));