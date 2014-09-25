var gulp       = require('gulp');
var connect = require('gulp-connect');
var runSequence = require('gulp-run-sequence');

var config     = require('../config');

gulp.task('reload', function(){
	return connect.reload()
});

gulp.task('reload-browserify', function(cb){
	runSequence("browserify", 'reload', cb);
});

gulp.task('watch', function(){
	gulp.watch(config.build.jade.source + "/**",   ['jade']);
	gulp.watch(config.build.stylus.source + "/**", ['stylus']);
	// gulp.watch(config.build.js.source + "/**",     ['browserify']);
});

