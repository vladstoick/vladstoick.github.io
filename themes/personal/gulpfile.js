'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var moduleImporter = require('sass-module-importer');

gulp.task('sass', function (done) {
  gulp.src('./scss/main.scss')
    .pipe(sass({ importer: moduleImporter() }).on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
  done();
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
