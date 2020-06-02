module.exports = function () {   

  $.gulp.task('rel', $.gulp.series(   
  	'rel-del',
    'pug-rel',
    'js-rel',
     $.gulp.parallel(
		 //'video-rel',
		 'imagesOther-rel',
         'images-rel',
         //'svg-min',
         //'webp-rel',
         'sass-rel',
         //'files-rel',
         'fonts-rel',
         //'js-jquery',
         //'php-rel',
         'css-rel'
         //'sitemap'
     )
  ));
};