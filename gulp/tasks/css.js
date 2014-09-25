var _ = require('lodash');

var gulp = require('gulp');
var stylus = require("gulp-stylus");
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var replace = require('gulp-batch-replace');

var config = require('../config');

gulp.task('stylus', function() {

    gulp.src(config.build.stylus.files)
        .pipe(stylus())
        .on('error', console.log)
        .pipe(prefix("last 2 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest(config.build.dest_folder))
        .pipe(connect.reload())

});

gulp.task('vendor_css', function() {

    gulp.src(config.build.css.files)
        .pipe(concat('vendor.css'))
        .pipe(replace(config.build.css.replace))
        .pipe(gulp.dest(config.build.dest_folder))

});