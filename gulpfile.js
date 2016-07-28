var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("build", function () {
    return gulp.src("app/**/*.js")
        .pipe(babel())
        .pipe(concat("index.js"))
        .pipe(gulp.dest("www/js/"));
});