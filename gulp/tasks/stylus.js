var path = require('path');

var gulp   = require('gulp');
var stylus = require("gulp-stylus");
var prefix = require('gulp-autoprefixer');

var config = require('../config');

var source = [];
for (var i=0; i<config.build.stylus.files.length; i++){
	source.push(config.build.stylus.source + "/" + config.build.stylus.files[i])
}

var dest = config.build.stylus.dest || config.build.folder || "build";

gulp.task('stylus', function() {
    gulp.src(source)
    .pipe(stylus())
        .on('error', console.log)
    .pipe(prefix("last 2 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest(dest))
 }); 