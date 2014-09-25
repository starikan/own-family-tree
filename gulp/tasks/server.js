var gulp = require('gulp');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var opn = require('opn');

var config = require('../config');

gulp.task('webserver', function() {
    connect.server({
        root: './' + config.build.folder,
        port: config.server.port,
        host: config.server.host,
        livereload: true
    });
});

gulp.task('openbrowser', function() {
    opn('http://' + config.server.host + ':' + config.server.port);
});
