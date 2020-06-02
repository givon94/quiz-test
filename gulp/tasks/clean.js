
module.exports = function () {
    $.gulp.task('clean', function () {
        return $.del([
            './dist/css/main.css', '*.html'
        ]);

    });
    $.gulp.task('clean-rel', function () {
        return $.del([
            './release/*'
        ]);
    });
    $.gulp.task('rel-del', function () {
        return $.del([
            'release/**/*.html', 'release/**/*.css', 'release/img/*', '!release/TinyPng/*'
        ]);
    });
};
