let gulp = require("gulp");
let plumber = require('gulp-plumber');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');


const jsFiles = [
  //"./src/js/vendor/detect.min.js",
  //"./src/js/vendor/inputmask.bundle.min.js",
  //"./src/js/vendor/slick.min.js",
  //"./src/js/vendor/notify.min.js", 
  //"./src/js/vendor/wow.min.js",
  //"./src/js/vendor/scrollspy.js",  
  "./src/js/vendor/lazyload.min.js",
  //"./src/js/vendor/jquery.cookie.min.js", 
  "./src/js/main.js"
];
   
module.exports = function () {        
  
  $.gulp.task('js-rel', () => {
      return $.gulp.src(jsFiles, {base: './src/js'})  
        .pipe($.gp.concat('build.js'))  
        .pipe(plumber())  
        // .pipe(babel({
        // presets: [
        //   ['@babel/env', {
        //     modules: false
        //   }]
        // ]
        // }))
        //.pipe(uglify())
      .pipe($.gulp.dest($.ppath.release + $.ppath.js.dest));
    });

  $.gulp.task('js', () => {
       return $.gulp.src(jsFiles, {base: './src/js'})
        .pipe($.gp.concat('build.js'))
        .pipe(plumber())  
        // .pipe(babel({
        // presets: [
        //   ['@babel/env', {
        //     modules: false
        //   }]
        // ]
        // }))
        .pipe($.gulp.dest($.ppath.DIST + $.ppath.js.dest));
    });
};