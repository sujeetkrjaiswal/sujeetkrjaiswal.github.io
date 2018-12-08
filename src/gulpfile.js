var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var path = require('path');
var runSequence = require('run-sequence');

gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			baseDir:path.join(__dirname,'..')
		}
	});
});
gulp.task('js',function(){
	return gulp.src('es6/**/*.js')
			.pipe(sourcemaps.init())
			.pipe(babel())
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest('src/js'))
			.pipe(gulp.dest('../dist/js'))
			.pipe(browserSync.reload({
				stream:true
			}));
	})
gulp.task('sass',function(){
	return gulp.src('scss/**/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('../dist/css'))
			.pipe(browserSync.reload({
				stream:true
			}));
});
gulp.task('html',function(){
	return gulp.src('*.html')
			.pipe(gulp.dest('..'))
			.pipe(browserSync.reload({
				stream:true
			}));
});
gulp.task('watch',['browserSync','sass','js'],function(){
	//Perform the tasks when file changes which in turn reloads the browser
	gulp.watch('scss/**/*.scss',['sass']);
	gulp.watch('es6/**/*.js',['js']);
	gulp.watch('*.html',['html']);
	
});

gulp.task('default',function(){
	runSequence(
			['js','sass','html','browserSync','watch']
			)
})