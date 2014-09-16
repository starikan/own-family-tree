var path = require('path');

var gulp   = require('gulp');
var jade = require('gulp-jade');

var config = require('../config');

var source = [];
for (var i=0; i<config.build.jade.files.length; i++){
	source.push(config.build.jade.source + "/" + config.build.jade.files[i])
}

var dest = config.build.jade.dest || config.build.folder || "build";

gulp.task('jade', function() {
    gulp.src(source)
        .pipe(jade({pretty: true}))
        .on('error', console.log)
    .pipe(gulp.dest(dest))
 }); 