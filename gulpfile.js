var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('less/index.less')
        .pipe(less())
        .pipe(concat("style.css"))
        .pipe(gulp.dest('www/css/'));
});

gulp.task('build', ['less'], function () {
    return gulp.src('app/**/*.js')
        .pipe(babel())
        .pipe(concat('index.js'))
        .pipe(gulp.dest('www/js/'));
});