var gulp = require('gulp');
const fonter = require('gulp-fonter');
var fontmin = require('gulp-fontmin');
var ttf2woff2 = require('gulp-ttf2woff2');
var rename = require('gulp-rename');
var changeCase = require('change-case');


module.exports = function () {

    $.gulp.task('font-min2', () => {
        return $.gulp.src('src/fonts/*')
        .pipe(fontmin({
            text:" №!#$%&'()*+±,-‐‑‒–—―./:;<=>?@][^_`{|}~¢£¥¨ƒ§©«®™°´′¸»ˆ˚˜€‘’‚“”″„×÷•…‹›€₽←⇐➔➜➟↖↑↓↗↘↙↺↻✔✓αβγδεηθμπρσφω" + '"0123456789¼½¾²³ⅠⅡⅢⅣⅤ' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
        }))
        .pipe(ttf2woff2({
            ignoreExt: true,
            clone: true,
        })) 
        .pipe(rename(function(path) {
            path.basename = changeCase.lowerCase(path.basename);
        }))      
        .pipe(gulp.dest('dist/css/'));
    });


    $.gulp.task('font-min', () => {
        return $.gulp.src('src/fonts/*')
        .pipe(fonter({
            subset:" №!#$%&'()*+±,-‐‑‒–—―./:;<=>?@][^_`{|}~¢£¥¨ƒ§©«®™°´′¸»ˆ˚˜€‘’‚“”″„×÷•…‹›€₽←⇐➔➜➟↖↑↓↗↘↙↺↻✔✓αβγδεηθμπρσφω" + '"0123456789¼½¾²³ⅠⅡⅢⅣⅤ' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
            formats: ['woff', 'woff2', 'ttf']
        }))
        .pipe(ttf2woff2({
            ignoreExt: true,
            clone: true,
        }))
        .pipe(rename(function(path) {
            path.basename = changeCase.lowerCase(path.basename);
        }))
        .pipe(gulp.dest('dist/css/'));
    });
};






//-Полный список

//!"#$%&'()*+±,-./:;<=>?@[\/]^_`{|}~¢£¥¨ƒ§©«®™´¸»ˆ˚˜€–—‘’‚“”„×÷•…‹›€₽←⇐➔➜➟↖↑↓↗↘↙↺↻✔✓αβγδεηθμπρσφω

//0123456789¼½¾²³ⅠⅡⅢⅣⅤ

//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

//АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя