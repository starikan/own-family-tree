var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var clean  = require('gulp-clean');
var runSequence = require('gulp-run-sequence');

var config = require('../config');

gulp.task('bower-clean', function() {
    return gulp.src(config.bower.dest, {
            read: false
        })
        .pipe(clean());
});

gulp.task('bower-files', function() {
    return gulp.src(bowerFiles(), { base: 'bower_components' })
        .pipe(gulp.dest(config.bower.dest));
});


gulp.task('bower', function(cb) {
	runSequence('bower-clean', 'bower-files', cb);
});
