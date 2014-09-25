var _ = require('lodash');

var gulp = require('gulp');

var config = require('../config');

var build = config.build.dest_folder || "build";

gulp.task('copy', function() {

    gulp.src(config.build.copy.files, {cwd: "."})
        .pipe(gulp.dest(build));


});