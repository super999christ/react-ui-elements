const gulp = require("gulp");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const cleanCSS = require('gulp-clean-css');

gulp.task("css", function () {
  return gulp
    .src("src/**/*.module.css") // Source all CSS files in the directory and subdirectories
    .pipe(postcss())
    .pipe(concat("bundle.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("build/stylesheets")); // Output the combined file to dist/bundle.css
});
