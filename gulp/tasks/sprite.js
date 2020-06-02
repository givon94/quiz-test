var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
 
module.exports = function () {
	$.gulp.task('sprite-bin', function () {
		var spriteData = 
		    $.gulp.src('./dist/img/sprite/*')
		        .pipe($.gp.spritesmith({
	        	    imgName: 'sprite.png',
		    		cssName: '_sprite.scss',
	                cssFormat: 'css',
                	algorithm: 'binary-tree',
                	algorithmOpts: {sort: false},
		        }));
            spriteData.img.pipe(gulp.dest('./dist/img/sprite/'));
    		spriteData.css.pipe(gulp.dest('./src/scss/sprite/'));
		});



	$.gulp.task('sprite-up', function () {
		var spriteData = 
		    $.gulp.src('./dist/img/sprite/*')
		        .pipe($.gp.spritesmith({
	        	    imgName: 'sprite.png',
		    		cssName: '_sprite.scss',
	                cssFormat: 'css',
                	algorithm: 'top-down',
                	algorithmOpts: {sort: false},
		        }));
            spriteData.img.pipe(gulp.dest('./dist/img/sprite/'));
    		spriteData.css.pipe(gulp.dest('./src/scss/sprite/'));
		});


	$.gulp.task('sprite-right', function () {
	var spriteData = 
	    $.gulp.src('./dist/img/sprite/*')
	        .pipe($.gp.spritesmith({
        	    imgName: 'sprite.png',
	    		cssName: '_sprite.scss',
                cssFormat: 'css',
            	algorithm: 'left-right',
            	algorithmOpts: {sort: false},
	        }));
        spriteData.img.pipe(gulp.dest('./dist/img/sprite/'));
		spriteData.css.pipe(gulp.dest('./src/scss/sprite/'));
	});
};
  	
//binary-tree
//top-down
//left-right

//-algorithmOpts: {sort: false}, без сортировки от меньшего размера к большему