var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');


gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
});


gulp.task('jpgs', function() {
	gulp.src('images/**/*.jpg')
		.pipe(imagemin({ progressive: true}))
		.pipe(gulp.dest('image-opt'));
});


