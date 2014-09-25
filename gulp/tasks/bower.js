var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var clean  = require('gulp-clean');
var runSequence = require('gulp-run-sequence');

var config = require('../config');

gulp.task('bower-clean', function() {
    return gulp.src(config.bower.dest_folder, {
            read: false
        })
        .pipe(clean());
});

gulp.task('bower-files', function() {

    console.log(config.bower.source_folder)

    return gulp.src(bowerFiles(), { base: config.bower.source_folder })
        .pipe(gulp.dest(config.bower.dest_folder));
});

gulp.task('bower', function(cb) {
	runSequence('bower-clean', 'bower-files', cb);
});
