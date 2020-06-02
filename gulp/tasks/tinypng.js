var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');


module.exports = function () {
	$.gulp.task('tinypng1', () => {
		return $.gulp.src($.ppath.images.src)
	        .pipe(tinypng({
	            key: '8WBbYwQCM0VHDDks1jm1f6TdvbSqGMmT',
	            //sigFile: 'images/.tinypng-sigs',
	            log: true
	        }))
			.pipe($.gulp.dest('./release/img/compressed'));
	});


	$.gulp.task('tinypng2', () => {
		return $.gulp.src($.ppath.images.src)
	        .pipe(tinypng({
	            key: 'r4w2gq9CWn9WkR9RnKQSWhdp53gshKJ7',
	            //sigFile: 'images/.tinypng-sigs',
	            log: true
	        }))
			.pipe($.gulp.dest('./release/img/compressed'));
	});

	$.gulp.task('tinypng3', () => {
		return $.gulp.src($.ppath.images.src)
	        .pipe(tinypng({
	            key: 'SVgmvVJgmPKCLZsd5p8y25f6bb4j0WCF',
	            //sigFile: 'images/.tinypng-sigs',
	            log: true
	        }))
			.pipe($.gulp.dest('./release/img/compressed'));
	});


	$.gulp.task('tinypng4', () => {
		return $.gulp.src($.ppath.images.src)
	        .pipe(tinypng({
	            key: '65FLLNq65mSpJcwXhCJtK1sXY7BTX1qf',
	            //sigFile: 'images/.tinypng-sigs',
	            log: true
	        }))
			.pipe($.gulp.dest('./release/img/compressed'));
	});
};


