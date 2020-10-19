var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css'));
});

gulp.task('sass-watch', function () {
    gulp.watch('./styles/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('minify', function () {
    return gulp.src('./styles/css/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./styles/minified'));
});