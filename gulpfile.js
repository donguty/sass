const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

gulp.task('sass', () => {
    return gulp
        .src('./rutaSass/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest('./rutaCss'))
});

gulp.task('default', () => {

    gulp.watch('./rutaSass/*.scss', gulp.series('sass'));
   
}) 