var gulp = require('gulp');
var uncss = require('gulp-uncss');
 
module.exports = function () {
	$.gulp.task('clean-css', function () {
	    return $.gulp.src('./src/scss/other/_animated.scss')
	        .pipe($.gp.uncss({
	            html: ['dist/**/*.html']
	        }))
	        .pipe($.gulp.dest('./src/scss/other'));
	});
};



