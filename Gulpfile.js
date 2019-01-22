const gulp = require('gulp');
const sass = require('gulp-sass');

function build() {
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
        includePaths: './node_modules',
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./build/css'));
}

exports.build = build;



