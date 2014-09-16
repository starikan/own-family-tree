var path        = require('path');

var gulp        = require('gulp');
var browserify  = require('browserify');
var vinylsource = require('vinyl-source-stream');
var streamify = require('gulp-streamify')
var uglify      = require('gulp-uglify');
var config      = require('../config');

// VARS
var source = "./" + config.build.js.source + "/" + config.build.js.files[0]
var dest = config.build.js.dest || config.build.folder || "build";

// TASKS
gulp.task('browserify', function() {
        return browserify(source, {
                debug: true
            })
            .bundle()
            .pipe(vinylsource(config.build.js.files[0]))
            .pipe(gulp.dest(dest));
 });

gulp.task('browserify-build', function() {
    return browserify(source)
        .bundle()
        .pipe(vinylsource(config.build.js.files[0]))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(dest));
 });