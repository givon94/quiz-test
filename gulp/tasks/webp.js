module.exports = function () {
	$.gulp.task('webp-rel', () => {
		return $.gulp.src($.ppath.images.src)
			.pipe($.gp.webp())
	        .pipe($.gulp.dest($.ppath.release + $.ppath.images.dest))        
	});
};
