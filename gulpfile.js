var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });














// var gulp = require('gulp'),
    
    // Main
    // rename             = require('gulp-rename'),
    // clean              = require('gulp-clean'),
    // concat             = require('gulp-concat'),
    // // notify          = require('gulp-notify'),

    // // Converters
    // jade               = require('gulp-jade'),
    // //jshint           = require('gulp-jshint'),
    // stylus             = require("gulp-stylus"),
    // prefix             = require('gulp-autoprefixer');

    // // Server
    // livereload         = require('gulp-livereload'),
    // lr                 = require('tiny-lr'),
    // server             = lr(),
    // watch              = require('gulp-watch'),
    // connect            = require("connect"),
    // connect_livereload = require('connect-livereload');


// // JAVASCRIPT

// gulp.task('js', function() {
//   gulp.src('client/source/js/*.js')
//     // .pipe(jshint('.jshintrc'))
//     //.pipe(jshint.reporter('default'))
//     .pipe(gulp.dest('client/' + DEV + '/js'))
//     .pipe(livereload(server))
//     // .pipe(notify({ message: 'JS complete' }));
//  });   

// gulp.task('js_vendor', function() {
//   gulp.src('client/source/js_vendor/**')
//     .pipe(gulp.dest('client/' + DEV + '/js_vendor'))
//     .pipe(livereload(server))
//     // .pipe(notify({ message: 'JS_VENDOR complete' }));
//  });    

// // CSS

// gulp.task('css', function() {
//   gulp.src('client/source/styl/*.styl')
//     .pipe(stylus())
//         .on('error', console.log)
//     .pipe(prefix("last 2 version", "> 1%", "ie 8", "ie 7"))
//     .pipe(gulp.dest('client/' + DEV + '/css'))
//     .pipe(livereload(server))
//     // .pipe(notify({ message: 'CSS complete' }));
//  });   

// gulp.task('css_vendor', function() {
//   gulp.src('client/source/css_vendor/**')
//     .pipe(gulp.dest('client/' + DEV + '/css_vendor'))
//     .pipe(livereload(server))
//     // .pipe(notify({ message: 'CSS_VENDOR complete' }));
//  });   

// // JADE

// gulp.task('jade', function() {
//     gulp.src(['client/source/*.jade'])
//         .pipe(jade({pretty: true}))
//         .on('error', console.log)
//     .pipe(gulp.dest('client/' + DEV))
//     // TODO: минификация
//     .pipe(livereload(server))
//     // .pipe(notify({ message: 'JADE complete' }));
//  }); 


// // DATA AND IMAGES

// gulp.task('images', function() {
//   gulp.src('client/source/images/**')
//     .pipe(gulp.dest('client/' + DEV + '/images'))
//     .pipe(livereload(server))
//     // .pipe(notify({ message: 'IMAGES complete' }));
//  });  



// // WATCH
// gulp.task('watch', function() {
//     gulp.watch(['client/source/*.jade', 'client/source/jade/**'], ['jade'] );
//     gulp.watch(['client/source/js/*.js'], ['js'] );
//     gulp.watch(['client/source/styl/*.styl'], ['css'] );
//     gulp.watch(['client/source/js_vendor/**'], ['js_vendor'] );
//     gulp.watch(['client/source/css_vendor/**'], ['css_vendor'] );
//     gulp.watch(['client/source/images/**'], ['images'] );
//  });




// gulp.task('dev', ['default'], function() {
//     connect()
//         .use(connect_livereload())
//         .use(connect.static('client/' + DEV))
//         .listen('12345');

//     console.log('Server listening on http://localhost:12345');
//  });




// gulp.task('default', ['clean'], function() {
//     gulp.run('js');
//     gulp.run('js_vendor');
//     gulp.run('css');
//     gulp.run('css_vendor');
//     gulp.run('jade');
//     gulp.run('images');

//     server.listen(35729, function(err) {
//         if (err) return console.log(err);
//         gulp.run('watch');
//     });

//  });