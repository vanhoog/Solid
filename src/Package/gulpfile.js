/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    project = require('./project.json');


var siteStaticPath = project.websiteRoot,
    siteStaticScriptsPath = siteStaticPath + "/static/scripts",
    siteStaticCssPath = siteStaticPath + "/static/css";

// Styles
gulp.task('sass', function () {
    gulp.src('resources/scss/styles.scss')
         .pipe(sass({

          }))
        .pipe(gulp.dest(siteStaticCssPath))


        //.pipe(sass().on('error', function (err) {
        //    console.log(err);
        //    this.emit('end');
        //}))
        //.pipe(gulp.dest(siteStaticCssPath))
        //.pipe(rename({ suffix: '.min' }))
        //.pipe(minifyCss())
        //.pipe(gulp.dest(siteStaticCssPath))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('vendor-scripts', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/foundation-sites/dist/foundation.js',
        'bower_components/slick-carousel/slick/slick.js',
        'wwwroot/src/scripts/vendor/flexibility.js', //Fix IE9 Flex Columns
        'resources/scripts/includes.js',
        'resources/scripts/fade.js',
    ])
    .pipe(plumber()) 
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(siteStaticScriptsPath))
    .pipe(rename({ suffix: '.min' })) 
    .pipe(uglify())
    .pipe(gulp.dest(siteStaticScriptsPath))
    .pipe(notify({ message: 'Vendor scripts bundle task complete' }));
});


gulp.task('scripts', function () {
    return gulp.src([
        'resources/scripts/app.js'
    ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(siteStaticScriptsPath))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(siteStaticScriptsPath))
    .pipe(notify({ message: 'Script bundle task complete' }));
});

// Clean
gulp.task('clean', function (cb) {
    del([siteStaticScriptsPath, siteStaticCssPath, siteStaticPath + '/images'], { force: true }, cb)
});

//// Default task
gulp.task('default', function () {
    gulp.start('sass', 'scripts');
});

// Watch
gulp.task('watch', function () {

    // Watch .scss files
    gulp.watch('resources/scss/**/*.scss', ['sass']);

    // Watch .js files
    gulp.watch('resources/scripts/**/*.js', ['scripts']);

});