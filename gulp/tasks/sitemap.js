var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
 
module.exports = function () {
	$.gulp.task('sitemap', function () {
	   return $.gulp.src('release/!(price)*.html', {
	            read: false
	        })
	        .pipe(sitemap({
	            siteUrl: 'https://domen.by/'
	        }))
	        .pipe(gulp.dest('./release/'));
	});
};