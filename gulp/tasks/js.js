var path        = require('path');

var gulp        = require('gulp');
var browserify_vanil  = require('browserify');
var vinylsource = require('vinyl-source-stream');
var streamify = require('gulp-streamify')
var uglify      = require('gulp-uglify');
var watchify = require('watchify');
var gutil = require('gulp-util');

var config      = require('../config');

// VARS
var source = "./" + config.build.js.source + "/" + config.build.js.files[0]
var dest = config.build.js.dest || config.build.folder || "build";

// TASKS
gulp.task('browserify', function() {

    watchify.args.debug = true;

    var bundler = watchify(browserify_vanil(source, watchify.args));

    // Optionally, you can apply transforms
    // and other configuration options on the
    // bundler just as you would with browserify
    // bundler.transform('brfs');

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(vinylsource(config.build.js.files[0]))
            .pipe(gulp.dest(dest));
    }

    return rebundle();

});


gulp.task('browserify-build', function() {
    return browserify_vanil(source)
        .bundle()
        .pipe(vinylsource(config.build.js.files[0]))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(dest));
 });