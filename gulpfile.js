var gulp = require("gulp");
var concat = require("gulp-concat");
var less = require('gulp-less');
var webpack = require('webpack-stream');

gulp.task('less', function () {
    return gulp.src('less/index.less')
        .pipe(less())
        .pipe(concat("style.css"))
        .pipe(gulp.dest('www/css/'));
});

gulp.task('webpack', ['less'], function () {
    return gulp.src('app/**/*.js')
        .pipe(webpack({
            devtool: 'source-map',
            output: {
                filename: 'index.js'
            },
            module: {
                loaders: [{
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                }]
            }
        }))
        .pipe(gulp.dest('www/js/'));
});

gulp.task('build', ['less', 'webpack']);