var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var path = require('path');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var inlinesource = require('gulp-inline-source');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var htmlmin = require('gulp-htmlmin');

gulp.task('test',function(){
	console.log('testing gulp task');
});

gulp.task('sass',function(){
	return gulp.src('src/scss/**/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('src/css'))
			.pipe(browserSync.reload({
				stream:true
			}));
});
gulp.task('esbabel',function(){
	return gulp.src('src/es6/**/*.js')
			.pipe(sourcemaps.init())
			.pipe(babel())
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest('src/js'))
			.pipe(browserSync.reload({
				stream:true
			}));
});
//Gulp watch syntax
//gulp.watch('files-to-watch',['tasks','to','run']);

//when a task depends on other task
//gulp.task('watch',['array','of','task','to','complete','before'],function(){ ... })
gulp.task('watch',['browserSync','sass','esbabel'],function(){
	//Perform the tasks when file changes which in turn reloads the browser
	gulp.watch('src/scss/**/*.scss',['sass']);
	gulp.watch('src/es6/**/*.js',['esbabel']);
	//Reload the browser whenever HTML changes
	gulp.watch('src/*.html',browserSync.reload);
	
});

gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			//baseDir:path.join(__dirname,'..')
			baseDir:'src'
		}
	});
});
gulp.task('dserver',function(){
	browserSync.init({
		server:{
			baseDir:'dist'
		}
	})
})
gulp.task('pserver',function(){
	browserSync.init({
		server:{
			baseDir:'..'
		}
	})
})
//Concatenation of files
gulp.task('useref',function(){
	return gulp.src('src/*.html')
			.pipe(useref())
			.pipe(gulpIf('*.js',uglify()))
			.pipe(gulpIf('*.css',cssnano()))
			.pipe(gulp.dest('dist'))
});

//For images
gulp.task('images',function(){
	return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
			.pipe(cache(imagemin({
				interlaced:true
			})))
			.pipe(gulp.dest('dest/images'))
});

gulp.task('fonts',function(){
	return gulp.src('src/fonts/**.*')
			.pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist',function(){
	return del.sync('dist')
});
gulp.task('cache:clear',function(callback){
	return cache.clearAll(callback)
})

gulp.task('build',function(callback){
	runSequence(
		'clean:dist',
		['sass','esbabel'],
		['useref','images','fonts'],
		'postbuild',
		'pserver',
		callback
		)
});
gulp.task('postbuild',function(){
	return gulp.src('dist/index.html')
			.pipe(inlinesource())
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('..'))
});
gulp.task('default',function(callback){
	runSequence(
			['esbabel','sass','browserSync','watch'],
			callback
		)
})