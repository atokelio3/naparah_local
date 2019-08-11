const gulp = require('gulp');
const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();

function styles() {
  return gulp.src('./gulp/**/*.scss')
   .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
    // .pipe(browserSync.stream());
}

function watch() {
  // browserSync.init({
  //   server: {
  //     baseDir: "./"
  //   }
  // });
  gulp.watch('./gulp/**/*.scss', styles);
  // gulp.watch('./*.html').on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('watch', watch);