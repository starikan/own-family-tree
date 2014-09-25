var gulp = require('gulp');
var browserify = require('browserify');
var vinylsource = require('vinyl-source-stream');
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

var config = require('../config');

// VARS
// var source = "./" + config.build.js.source + "/" + config.build.js.files[0]
var dest = config.build.js.dest || config.build.folder || "build";

// TASKS
gulp.task('browserify', function() {

    watchify.args.debug = true;
    var bundler = watchify(browserify(config.build.js.main_file, watchify.args));
    
    bundler.on('update', rebundle);

    function rebundle(file) {

        if (file) {
            file.map(function(fileName) {
                gutil.log('File updated', gutil.colors.yellow(fileName));
            });
        }

        return bundler
            .bundle()
            .on("error", function(err) {
                gutil.log("Browserify error:", err.message)
            })
            // .on('log', function(){gutil.log("Updated")})
            .pipe(vinylsource(config.build.js.file_name))
            .pipe(gulp.dest(config.build.dest_folder))
            .pipe(connect.reload()) 

    }

    return rebundle();
 });


gulp.task('browserify-build', function() {
    return browserify(config.build.js.main_file)
        .bundle()
        .pipe(vinylsource(config.build.js.file_name))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(config.build.dest_folder))
        .pipe(connect.reload())
});
