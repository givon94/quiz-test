module.exports = function () {
    const   rootPath = './src/scss',
        endPath = '*.scss',
        scssPaths = [`${rootPath}${endPath}` ,`${rootPath}blocks/${endPath}`, `${rootPath}common/${endPath}`, `${rootPath}pages/${endPath}`];
    $.gulp.task('watch', function() {
        $.gulp.watch($.ppath.SRC + $.ppath.css.src, $.gulp.series('sass'));
        $.gulp.watch($.ppath.html.srcPug, $.gulp.series('pug'));
        $.gulp.watch($.ppath.js.src, $.gulp.series('js'));
    });
};