var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('ts', function() {
  var tsResult = 
    gulp.src([
      'src/**/*.ts',
      '!src/**/*.worker.ts'
    ])
      .pipe(sourcemaps.init())
      .pipe(tsProject());

  return tsResult.js.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'))
});

gulp.task('workers', function() {
  var tsResult = 
    gulp.src('src/**/*.worker.ts')
      .pipe(ts({
        module: "system",
        target: "es5",
        // outFile: "build/workers.js",
        // outDir: 'build',
        noImplicitAny: true
      }));

    return tsResult.js
      .pipe(rename({ dirname: '' }))
      .pipe(gulp.dest('./build'))
});

gulp.task('templates', function() {
  return gulp.src('src/**/*.html')
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.start(['ts', 'workers', 'templates', 'sass']);
  
  return watch('src/**/*.*', function(){
    gulp.start(['ts', 'workers', 'templates', 'sass']);
  });
});