var path        = require('path');

var gulp        = require('gulp');
var browserify  = require('browserify');
var vinylsource = require('vinyl-source-stream');
var streamify = require('gulp-streamify')
var uglify      = require('gulp-uglify');
// var jshint   = require('gulp-jshint');
var config      = require('../config');




var source = "./" + config.build.js.source + "/" + config.build.js.files[0]

var dest = config.build.js.dest || config.build.folder || "build";





gulp.task('browserify', function() {
        return browserify(source, {
                debug: true
            })
            .bundle()
            //Pass desired output filename to vinyl-source-stream
            .pipe(vinylsource(config.build.js.files[0]))
            // .pipe(jshint())
            // .pipe(jshint.reporter('default'))
            // Start piping stream to tasks!
            .pipe(gulp.dest(dest));
 });

gulp.task('browserify-build', function() {
    return browserify(source)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(vinylsource(config.build.js.files[0]))
        .pipe(streamify(uglify()))
        // Start piping stream to tasks!
        .pipe(gulp.dest(dest));
 });