module.exports = function () {
    $.gulp.task('serve', function() {
        $.browserSync.init({
                open: true, //открывать автоматически браузер
                server: './dist'
        });
    $.browserSync.watch('./dist', $.browserSync.reload);
    });
};