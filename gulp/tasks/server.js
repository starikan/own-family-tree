var gulp       = require('gulp');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');
var opn       = require('opn');

var config     = require('../config');

gulp.task('webserver', function() {
  gulp.src( './' + config.build.folder )
    .pipe(webserver({
      host:             config.server.host,
      port:             config.server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + config.server.host + ':' + config.server.port );
});
