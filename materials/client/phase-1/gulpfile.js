var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var stream = require('vinyl-source-stream');

/**
 * Create bundle.js
 */
gulp.task('build:javascripts', function() {
  return browserify('app/javascripts/app.js').bundle().
    pipe(stream('bundle.js')).pipe(gulp.dest('./build/'));
});

/**
 * Create bundle.css
 */
gulp.task('build:stylesheets', function() {
  return gulp.src('app/stylesheets/**/*.scss').
    pipe(sass()).pipe(concat('bundle.css')).pipe(gulp.dest('./build/'));
});

/**
 * Compress bundle.js
 */
gulp.task('minify:javascripts', function() {
  return gulp.src('build/bundle.js').pipe(uglify()).pipe(gulp.dest('build'));
});

/**
 * Compress bundle.css
 */
gulp.task('minify:stylesheets', function() {
  return gulp.src('build/bundle.css').pipe(cssmin()).pipe(gulp.dest('build'));
});

/**
 * Observe for assets changes
 */
gulp.task('watch', function() {
  gulp.watch('app/javascripts/**/*.js', ['build:javascripts']);
  gulp.watch('app/stylesheets/**/*.scss', ['build:stylesheets']);
});

/**
 * Commands, related from other tasks
 */
gulp.task('default', ['watch', 'build']);
gulp.task('build', ['build:javascripts', 'build:stylesheets']);
gulp.task('compress', ['minify:javascripts', 'minify:stylesheets']);
