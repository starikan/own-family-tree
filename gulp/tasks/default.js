var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');

gulp.task('default', function(cb) {
	runSequence('clean', ['jade', 'vendor_css', 'stylus', "browserify"], 'watch', 'webserver', cb);
});

gulp.task('run', function(cb) {
	runSequence('default', "openbrowser", cb);
});

gulp.task('build', function(cb) {
	runSequence('clean', ['jade', 'vendor_css', 'stylus', "browserify-build"], cb);
});