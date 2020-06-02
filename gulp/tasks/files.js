
module.exports = function () {
    $.gulp.task('files-rel', () => {
        return $.gulp.src([
                $.ppath.SRC + '.htaccess', 
                $.ppath.SRC + 'robots.txt',
                $.ppath.SRC + 'manifest.json'

                ])            
            .pipe($.gulp.dest($.ppath.release))
    });

    $.gulp.task('fonts-rel', () => {
        return $.gulp.src($.ppath.fonts.src)            
            .pipe($.gulp.dest($.ppath.release + $.ppath.fonts.dest))
    });

    $.gulp.task('video-rel', () => {
        return $.gulp.src($.ppath.video.src)            
            .pipe($.gulp.dest($.ppath.release + $.ppath.video.dest))
    });

    $.gulp.task('imagesOther-rel', () => {
        return $.gulp.src($.ppath.imagesOther.src)            
            .pipe($.gulp.dest($.ppath.release + $.ppath.imagesOther.dest))
    });

    $.gulp.task('php-rel', () => {
        return $.gulp.src($.ppath.php.src)            
            .pipe($.gulp.dest($.ppath.release + $.ppath.php.dest))
    });
};