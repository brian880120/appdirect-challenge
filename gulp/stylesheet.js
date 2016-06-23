module.exports = (function() {
    'use strict';
    var gulp = require('gulp');
    var cleanCss = require('gulp-clean-css');
    var $ = require('gulp-load-plugins')();
    var source = [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'bower_components/font-awesome/css/font-awesome.css',
          'bower_components/bootcards/dist/css/bootcards-desktop.min.css'
    ];

    return {
        build: {
            vendor: buildVendors
        }
    };

    function buildVendors() {
        return gulp.src(source)
            .pipe($.concat('styles/libraries.css'))
            .pipe(cleanCss())
            .pipe(gulp.dest('dist'));
    }
})();