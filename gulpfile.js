var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');

gulp.task('default', function() {

});

gulp.task('script_libraries', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular*/angular*.min.js',
    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
  ]).pipe(concat('libraries.min.js'))
  .pipe(gulp.dest('build'));
});

gulp.task('style_libraries', function() {
  return gulp.src(
    'bower_components/bootstrap/dist/css/bootstrap.min.css'
  ).pipe(concat("libraries.min.css"))
  .pipe(gulp.dest('build'))
});

gulp.task('scripts', function(){
  gulp.src([
    'scripts/helpers.js',
    'scripts/app.js',
    'scripts/directives/*.js',
    'scripts/factories/*.js',
    'scripts/filters/*.js',
    'scripts/controllers/*.js',
  ]).pipe(sourcemaps.init())
  .pipe(concat('all.min.js'))
  // .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
  return gulp.src('styles/**/*.*')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['scripts', 'styles'], function() {
  return watch([
    'scripts/**/*.*',
    'styles/**/*.*'
  ], function() {
    gulp.start(['scripts', 'styles']);
  });
});