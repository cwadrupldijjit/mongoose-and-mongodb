'use strict';

let gulp = require('gulp');
let tsc = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let watch = require('gulp-watch');

let pathsToTs = ['./typings/main.d.ts', './server/**/*.ts'];
let tsconfig = {
	target: 'es5',
	module: 'commonjs',
	moduleResolution: 'node'
};

function compileTs() {
	gulp.src(pathsToTs)
		.pipe(sourcemaps.init())
			.pipe(tsc(tsconfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./server/'));
}

function watcher() {
	watch(pathsToTs, compileTs);
}

gulp.task('tsc', compileTs);
gulp.task('watch', watcher);

gulp.task('default', ['tsc', 'watch']);