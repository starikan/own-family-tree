var config = {
    build: {
        dest_folder: "build",
        jade: {
            files: ['client/source/jade/index.jade']
        },
        stylus: {
            files: ['client/source/styl/main.styl']
        },
        js: {
            main_file: './client/source/js/main.js',
            file_name: "main.js",
        },
        css: {
            files: [
                "bower_libs/bootstrap/dist/css/bootstrap.css",
                "bower_libs/vis/dist/vis.min.css",
                "bower_libs/ngDialog/css/ngDialog.css",
                "bower_libs/ngDialog/css/ngDialog-theme-default.css",
            ],
            replace: [
                ["../fonts/", ""]
            ],
        },
        copy: {
            files: [
                "bower_libs/bootstrap/dist/fonts/**",
            ],
        }
    },
    server: {
        host: 'localhost',
        port: '12345',
    },
    bower: {
        source_folder: "bower_components",
        dest_folder: "bower_libs",
    },
}

module.exports = config;
