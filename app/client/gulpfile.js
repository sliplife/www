const gulp = require('gulp-help')(require('gulp'));
// Shared plugins
const del = require('del');
const notify = require('gulp-notify');
// Script plugins
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
// Style plugins
const less = require('gulp-less');
const LessRewriteImportPlugin = require('less-plugin-rewrite-import');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const replace = require('gulp-replace');
// Images
const imagemin = require('gulp-imagemin');

// Log
function log(error) {

  notify(error.toString && error.toString()).write(error);
  this.emit('end');
}

// Robots
gulp.task('robots', () => {

  del(['./app/client/public/robots.txt'], { force: true }).then(() => {

    gulp
      .src(['./app/client/assets/robots.txt'])
      .pipe(gulp.dest('./app/client/public/'));
  });
});

// Script tasks
gulp.task('webpack', false, () => {

  del(['./app/client/public/js/'], { force: true }).then(() => {

    gulp
      .src('./app/client/assets/js/**/*.js')
      .pipe(webpack(webpackConfig))
      .on('error', log)
      .pipe(gulp.dest('./app/client/public/js/'));
  });
});

// Style tasks
gulp.task('semantic-ui-theme', () => {

  gulp
    .src(['./node_modules/semantic-ui-less/themes/default/assets/**/*'])
    .pipe(gulp.dest('./app/client/public/themes/default/assets'));
});

gulp.task('fonts', () => {

  del(['./app/client/public/fonts/'], { force: true }).then(() => {

    gulp
      .src(['./app/client/assets/fonts/**/*'])
      .pipe(gulp.dest('./app/client/public/fonts/'));
    gulp
      .src(['./node_modules/slick-carousel/slick/fonts/**/*'])
      .pipe(gulp.dest('./app/client/public/fonts/slick/'));
  });
});

gulp.task('images', () => {

  del(['./app/client/public/images/'], { force: true }).then(() => {

    gulp
      .src(['./app/client/assets/images/**/*'])
      .pipe(imagemin())
      .pipe(gulp.dest('./app/client/public/images/'));
  });
});

gulp.task('less', false, ['fonts', 'images'], () => {

  del('./app/client/public/css/**', { force: true }).then(() => {

    gulp
      .src(['./app/client/assets/css/**/*.less'])
      .pipe(less({
        plugins: [
          new LessRewriteImportPlugin({
            paths: {
              '../../theme.config': 'app/client/assets/css/theme.config'
            }
          }),
          new LessPluginCleanCSS({ advanced: true }),
          new LessPluginAutoPrefix({ browsers: ['last 2 versions'] })
        ]
      }))
      .pipe(replace('/themes/default/assets/', '/assets/themes/default/assets/')) // SUI
      .pipe(replace('./fonts', '/assets/fonts/slick')) // Slick
      .on('error', log)
      .pipe(gulp.dest('./app/client/public/css/'));

  });
});

// Task groups
gulp.task('styles', 'Compile source styles to dist directory.', ['less', 'semantic-ui-theme']);
gulp.task('scripts', 'Compile source scripts to dist directory.', ['webpack']);
gulp.task('build', 'Run all build tasks.', ['styles', 'robots']);
gulp.task('default', ['build']);
