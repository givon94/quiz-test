var gulp = require('gulp');
var purgecss = require('gulp-purgecss');

//прописываются пути, чтобы не менять их потом в тасках
let SRC_DIR = './src/',
    DIST_DIR = './dist/',
    REL_DIR_HTML = 'release/*.html',
    REL_DIR_JS = 'release/js/*js';
let path = {
    scss: {
        entry: SRC_DIR + 'scss/main.scss',
        src: SRC_DIR + 'scss/**/*.scss',
        dist: DIST_DIR + 'css'
    }
};
var gcmq = require('gulp-group-css-media-queries');

// $. - для обращение к глобальному объектому с необходимыми свойствами
module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src(path.scss.src)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
            .pipe($.gp.autoprefixer({
                cascade: false
            }))
            //.pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest(path.scss.dist));
    });

    $.gulp.task('sass-rel', function () {
        return $.gulp.src($.ppath.SRC + $.ppath.css.src)          
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
    		.pipe(purgecss({
    			content: [REL_DIR_HTML, REL_DIR_JS],
    			fontFace: false,
    			keyframes: true
    			//whitelist: ['random', 'yep', 'button']
    			//whitelistPatterns: [/red$/]
    			//whitelistPatternsChildren: [/red$/]
    		}))
            .pipe($.gp.autoprefixer({
                cascade: false
            }))
            .pipe(gcmq())
            //.pipe($.gp.csso())            
            .pipe($.gulp.dest($.ppath.release + $.ppath.css.dest));
    });

    $.gulp.task('css-rel', function () {
        return $.gulp.src('src/css/vendor/*.css')          
            .pipe($.gulp.dest('release/css/vendor/'));
    });
};



//whitelistPatterns: .bg-red will be left in the final CSS.
//whitelistPatternsChildren: .red p or .bg-red .child-of-bg will be left in the final CSS.