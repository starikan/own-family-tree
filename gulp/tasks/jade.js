var gulp = require('gulp');
var jade = require('gulp-jade');
var connect = require('gulp-connect');

var config = require('../config');

gulp.task('jade', function() {
    gulp.src(config.build.jade.files)
        .pipe(jade({
            pretty: true
        }))
        .on('error', console.log)
        .pipe(gulp.dest(config.build.dest_folder))
        .pipe(connect.reload())
});
