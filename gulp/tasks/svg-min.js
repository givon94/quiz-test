module.exports = function () {
	$.gulp.task('svg-min', () => {
		return $.gulp.src($.ppath.svg.src) 
			.pipe($.gp.svgmin())
	        .pipe($.gulp.dest($.ppath.release + $.ppath.svg.dest))     
	});
};