module.exports = function () {
    $.gulp.task('pug', () => {
        //let locals = require('./content.json');

        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals: $.locals,
                pretty: true

            }))
            .on('error', $.gp.notify.onError(
                function (error) {
                    return {
                        title: 'Pug',
                        message: error.message
                    }
                }
            ))
            .pipe($.gulp.dest('./dist'))
    });

    $.gulp.task('pug-rel', () => {
        return $.gulp.src($.ppath.html.src)
            .pipe($.gp.pug({
                locals: $.locals,
                pretty: true
            }))
            .on('error', $.gp.notify.onError(
                function (error) {
                    return {
                        title: 'Pug',
                        message: error.message
                    }
                }
            ))
            .pipe($.gulp.dest($.ppath.release))
    });
};





