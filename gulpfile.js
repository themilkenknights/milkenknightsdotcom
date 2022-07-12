import gulp from "gulp";
import minifyHtml from "gulp-minify-html";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import fs from "fs";
import webp from "gulp-webp";
import template from "gulp-template-html";
import browserSync from "browser-sync";
import superstatic from "superstatic";
import workboxBuild from "workbox-build";
import cleanCSS from "gulp-clean-css";
import image from "gulp-image";


gulp.task('copy', function () {
  return gulp.src(['src/**/*', '!src/images/**/*', '!src/robots/images/**/*']).
    pipe(gulp.dest('dist'));
});

gulp.task('template-html', function () {
  return gulp.src([
    'dist/index.html',
    'dist/404.html',
    'dist/achievements.html',
    'dist/calendar.html',
    'dist/downloads.html',
    'dist/about.html',
    'dist/join.html',
    'dist/live.html',
    'dist/media.html',
    'dist/resources.html',
    'dist/thanks.html',
    'dist/azscout.html',
    'dist/ocscout.html',
    'dist/sponsors.html',
  ]).pipe(template('src/template.html')).pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function () {
  return gulp.src('dist/**/*.html').pipe(minifyHtml()).pipe(gulp.dest('dist'));
});

gulp.task('merge-minify-js-css', function () {
  gulp.src(['src/assets/js/*.js', '!src/assets/js/workbox-sw.js']).
    pipe(uglify()).
    pipe(gulp.dest('dist/assets/js'));
  return gulp.src('src/assets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/assets/css'));
});


gulp.task('compress-images-fast', function () {
  return gulp.src('src/images/*').pipe(image({
    pngquant: true,
    optipng: false,
    zopflipng: true,
    jpegRecompress: false,
    mozjpeg: true,
    guetzli: false,
    gifsicle: true,
    svgo: true,
    concurrent: 10,
    quiet: false,
    options: {
      optipng: ['-i 1', '-strip all', '-fix', '-o2', '-force'],
      pngquant: ['--speed=8', '--force', 256],
      zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
      jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
      mozjpeg: ['-optimize', '-progressive'],
      guetzli: ['--quality', 85],
      gifsicle: ['--optimize'],
      svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors'],
    },
  })).pipe(gulp.dest('dist/images'));
  });

gulp.task('compress-images', function () {
  gulp.src('src/images/*').pipe(image({
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
      jpegRecompress: [
        '--strip',
        '--quality',
        'medium',
        '--min',
        ,
        '--max',
        80
      ],
      mozjpeg: ['-optimize', '-progressive'],
      guetzli: ['--quality', 85],
      gifsicle: ['--optimize'],
      svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors'],
    },
  })).pipe(gulp.dest('dist/images'));

  return gulp.src('src/robots/images/**/*').pipe(image({
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
      jpegRecompress: [
        '--strip',
        '--quality',
        'medium',
        '--min',
        50,
        '--max',
        80
      ],
      mozjpeg: ['-optimize', '-progressive'],
      guetzli: ['--quality', 85],
      gifsicle: ['--optimize'],
      svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors'],
    },
  })).pipe(gulp.dest('dist/robots/images'));
});


gulp.task('service-worker', () => {
  return workboxBuild.injectManifest({
    swSrc: 'src/sw.js',
    swDest: 'dist/sw.js',
    globDirectory: 'dist',
    globPatterns: [
      '**\/*.{js,css,html,png,jpg,jpeg,gif,svg}',
    ]
  });
});

gulp.task('reload', gulp.series('copy', 'template-html', 'service-worker'));

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', gulp.series('reload', function (done) {
  browserSync.reload();
  done();
}));

// use default task to launch Browsersync and watch JS files
gulp.task('serve', gulp.series('reload', function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: 'dist/',
      middleware: [superstatic({
        stack: 'strict'
      })]
    },
  });
  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch('src/**/*', gulp.series('js-watch'));
}));

gulp.task('default', gulp.series('copy','compress-images-fast','template-html', 'minify-html', 'merge-minify-js-css', 'service-worker'));
