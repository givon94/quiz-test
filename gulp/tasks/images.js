var gulp = require('gulp');
var image = require('gulp-image');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
var pngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');

module.exports = function () {
	$.gulp.task('images-rel', () => {
		return $.gulp.src('./dist/img/**/*.+(jpg|png|webp|gif|svg)')
		.pipe($.gp.image({
  			optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
  			pngquant: ['--speed=1', '--force', 128],
  			zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
  			jpegRecompress: ['--strip', '--quality', 'medium', '--min', 65, '--max', 80],
  			mozjpeg: false,
  			guetzli: false,
  			gifsicle: ['--optimize'],
  			svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors'],
  			quiet: true
		}))

    	.pipe($.gulp.dest($.ppath.release + $.ppath.images.dest))        
	});

		$.gulp.task('images-rel2', () => {
			return $.gulp.src($.ppath.images.src)
			.pipe($.gp.imagemin([
				$.gp.imagemin.gifsicle({interlaced: true}),
				imageminJpegtran({progressive: true}),
				imageminJpegRecompress({
			        loops: 5,
			        speed: 1,
			        floyd: 1,
			        min: 60,
			        max: 75,
			        quality:'high'
    			}),
				pngquant({
					quality: '70-80',
					speed: 1,
					floyd: 1
				})
			]))
	        .pipe($.gulp.dest($.ppath.release + $.ppath.images.dest))        
	});
};



// pngquant: ['--speed=1', '--force', 192],
// pngquant: ['--speed=1', '--force', 256],
// jpegRecompress: ['--strip', '--quality', 'medium', '--min', 60, '--max', 70],