// global.$ - для обращения к свойствам из других файлов
global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'), // Реквайрится модулья del для работы таска clean.js
    gp: require('gulp-load-plugins')(), //плагин позволяет обращаться к другим плагинам через gp.plugin-name
    browserSync: require('browser-sync').create(),
    //smartgrid: require('smart-grid'),
    //locals: require('./src/content JSON/content-catalog-osh.json'),
    
    ppath: {
      SRC:      './src/',
      DIST:     './dist/',
      release:  './release/',

      css: {
        src:    'scss/**/*.scss',
        dest:   'css/'
      },
      html: {
        src:    './src/pug/pages/**/!(_)*.pug',
        srcPug: './src/pug/**/*.pug'
      },
      images: {
        src:    './dist/img/**/*.+(png|jpg)',
        dest:   'img/'
      },
      imagesOther: {
        src:    './dist/img/**/*.+(webp|gif)',
        dest:   'img/'
      },
      video: {
        src:    './dist/video/**/*.+(mp4|webm)',
        dest:   'video/'
      },
      svg: {
        src:    './dist/img/**/*.svg',
        dest:   'img/'
      },

      fonts: {
        src:    './dist/css/**/*.+(svg|eot|ttf|woff|woff2)',
        dest:   'css/'
      },
       js: {
        src:    './src/js/**/*.js',
        dest:   'js/'
      },
       php: {
        src:    './src/php/**/*.php',
        dest:   'php/'
      },
    }
};

// Перебирается массимв с путями до тасков. Добавляются все таски.
$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
   $.gulp.parallel(
       'sass',
       'pug',
       'js'
   ),
   $.gulp.parallel(
       'watch',
       'serve'
   )
));
