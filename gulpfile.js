var gulp = require("gulp");
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('copy', function() {
  gulp.src('src/**/*')
    .pipe(gulp.dest('docs'));
});

gulp.task("minify-html", function() {
  gulp.src("src/**/*.html")
    .pipe(minifyHtml())
    .pipe(gulp.dest('docs'));
});

gulp.task("merge-minify-js-css", function() {
  gulp.src("src/assets/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("docs/assets/js"));
  gulp.src("src/assets/css/*.css")
    .pipe(minifyCss())
    .pipe(gulp.dest("docs/assets/css"));
});

gulp.task("compress-images", function() {
  gulp.src('src/images/*')
    .pipe(imagemin([

      imageminPngquant({
        speed: 1,
        quality: 98
      }),
      imageminMozjpeg({
        quality: 90
      }),
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest('docs/images'))
});


gulp.task("default", ["copy", "minify-html", "merge-minify-js-css", "compress-images"]);
