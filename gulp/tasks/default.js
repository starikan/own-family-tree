var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');

gulp.task('default', function(cb) {
	runSequence('clean', ['jade', 'stylus', "browserify"], 'webserver', 'watch', 'openbrowser', cb);
});

gulp.task('build', function(cb) {
	runSequence('clean', ['jade', 'stylus', "browserify-build"], cb);
});