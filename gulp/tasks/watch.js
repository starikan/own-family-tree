var gulp       = require('gulp');

var config     = require('../config');

gulp.task('watch', function(){
	gulp.watch(config.build.jade.source + "/**",   ['jade']);
	gulp.watch(config.build.stylus.source + "/**", ['stylus']);
	gulp.watch(config.build.js.source + "/**",     ['browserify']);
});