var gulp = require("gulp");
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var fs = require('fs');
var image = require('gulp-image');
var webp = require('gulp-webp');
var template = require('gulp-template-html');
var runSequence = require('run-sequence');


gulp.task('copy', function () {
    return gulp.src(['src/**/*', '!src/images/**/*', '!src/robots/images/**/*'])
        .pipe(gulp.dest('dist'));
});

gulp.task("template-html", function () {
    return gulp.src([
        "dist/index.html",
        "dist/404.html",
        "dist/achievements.html",
        "dist/calendar.html",
        "dist/downloads.html",
        "dist/join.html",
        "dist/live.html",
        "dist/media.html",
        "dist/resources.html",
        "dist/thanks.html"
    ])
        .pipe(template('src/template.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task("minify-html", function () {
    return gulp.src("dist/**/*.html")
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist'));
});

gulp.task("merge-minify-js-css", function () {
    gulp.src("src/assets/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/assets/js"));
    return gulp.src("src/assets/css/*.css")
        .pipe(minifyCss())
        .pipe(gulp.dest("dist/assets/css"));
});

gulp.task("compress-images", function () {
    gulp.src('src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: false,
            options: {
                optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
                pngquant: ['--speed=1', '--force', 256],
                zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
                jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
                mozjpeg: ['-optimize', '-progressive'],
                guetzli: ['--quality', 85],
                gifsicle: ['--optimize'],
                svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
            }
        }))
        .pipe(gulp.dest('dist/images'))


    return gulp.src('src/robots/images/**/*')
        .pipe(image({
            pngquant: true,
            optipng: true,
            zopflipng: true,
            jpegRecompress: true,
            mozjpeg: true,
            guetzli: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: false,
            options: {
                optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
                pngquant: ['--speed=1', '--force', 256],
                zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
                jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
                mozjpeg: ['-optimize', '-progressive'],
                guetzli: ['--quality', 85],
                gifsicle: ['--optimize'],
                svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
            }
        }))
        .pipe(gulp.dest('dist/robots/images'))
});


gulp.task("default", function (callback) {
    runSequence(
        'copy', 'template-html', 'minify-html', 'merge-minify-js-css',
        callback);
});