
const gulp = require('gulp');
const babel = require('gulp-babel');

const browserify = require('gulp-browserify');

const rename = require("gulp-rename");

const eslint = require('gulp-eslint');

const less = require('gulp-less');

const concat = require('gulp-concat');

const livereload = require('gulp-livereload');

const  connect = require('gulp-connect');

const open = require('open');

const uglify = require('gulp-uglify');

const cssmin = require('gulp-cssmin');


const htmlmin = require('gulp-htmlmin');

gulp.task('eslint', () => {
	return gulp.src(['src/js/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(livereload());
});


gulp.task('babel', () =>
	gulp.src('src/js/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest('build/js'))
		.pipe(livereload())
);


gulp.task('browserify', function() {

return	   gulp.src('build/js/app.js')
		.pipe(browserify())
		.pipe(rename('built.js'))
		.pipe(gulp.dest('./build/js'))
	  .pipe(livereload());
});

gulp.task('uglify', function () {
	return gulp.src('./build/js/built.js')
		.pipe(uglify())
		.pipe(rename('dist.min.js'))
		.pipe(gulp.dest('dist/js'))

});



gulp.task('cssmin', function () {
	return gulp.src('./build/css/built.css')
		.pipe(cssmin())
		.pipe(rename('dist.min.css'))
		.pipe(gulp.dest('dist/css'))

});



gulp.task('htmlmin', function () {
	return gulp.src('./build/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments:true
		}))
		.pipe(gulp.dest('dist/'))

});




gulp.task('less', function () {
	return gulp.src('./src/less/*.less')
		.pipe(less())
		.pipe(concat('built.css'))
		.pipe(gulp.dest('./build/css'))
		.pipe(livereload());
});


gulp.task('html',function () {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('build/'))
		.pipe(livereload());

})



gulp.task('watch', function() {
	livereload.listen();
	connect.server({
		name: 'Dev App',
		root: ['./build'],
		port: 3002,
		livereload: true
	});
	open('http://localhost:3002');
	gulp.watch('src/less/*.less', gulp.series(['less']));
	gulp.watch('src/js/*.js',gulp.series(['eslint','babel','browserify']))
	gulp.watch('src/index.html',gulp.series(['html']))

});

gulp.task('js-dev',gulp.series(['eslint','babel','browserify']))

gulp.task('all-dev',gulp.parallel(['js-dev','less','html']))

gulp.task('dev',gulp.series(['all-dev','watch']))

gulp.task('js-prod',gulp.series(['js-dev','uglify']))


gulp.task('css-prod',gulp.series(['less','cssmin']))


gulp.task('prod',gulp.parallel(['js-prod','css-prod','htmlmin']))



