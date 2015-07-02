var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./public/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./public/styles/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);