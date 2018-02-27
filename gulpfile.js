var gulp = require("gulp");
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var fs = require('fs');
var image = require('gulp-image');
var webp = require('gulp-webp');

gulp.task('copy', function () {
  gulp.src(['src/**/*', '!src/images/**/*', '!src/robots/images/**/*'])
    .pipe(gulp.dest('dist'));
});

gulp.task("minify-html", function () {
  gulp.src("src/**/*.html")
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'));
});

gulp.task("merge-minify-js-css", function () {
  gulp.src("src/assets/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js"));
  gulp.src("src/assets/css/*.css")
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


  gulp.src('src/robots/images/**/*')
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

gulp.task("default", ["copy", "minify-html", "merge-minify-js-css"]);