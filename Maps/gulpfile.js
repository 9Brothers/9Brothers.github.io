var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var watch = require('gulp-watch');

gulp.task('typescript', function () {
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(tsProject());

  return tsResult.js.pipe(gulp.dest('release'));
});

gulp.task('assets', function () {
  return gulp.src('app/**/*.{html,js,json}')
    .pipe(gulp.dest('release'));
});

gulp.task('watch', ['typescript', 'assets'], function () {
  return watch('app/**/*.*', function () {
    gulp.start(['typescript', 'assets']);
  });
});