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

// Script tasks
gulp.task('webpack', false, () => {

  del(['./public/js/'], { force: true }).then(() => {

    gulp
      .src('./assets/js/**/*.js')
      .pipe(webpack(webpackConfig))
      .on('error', log)
      .pipe(gulp.dest('./public/js/'));
  });
});

// Style tasks
gulp.task('semantic-ui-theme', () => {

  gulp
    .src(['../../node_modules/semantic-ui-less/themes/default/assets/**/*'])
    .pipe(gulp.dest('./public/themes/default/assets'));
});

gulp.task('fonts', () => {

  del(['./public/fonts/'], { force: true }).then(() => {

    gulp
      .src(['./assets/fonts/**/*'])
      .pipe(gulp.dest('./public/fonts/'));
  });
});

gulp.task('images', () => {

  del(['./public/images/'], { force: true }).then(() => {

    gulp
      .src(['./assets/images/**/*'])
      .pipe(imagemin())
      .pipe(gulp.dest('./public/images/'));
  });
});

gulp.task('less', false, ['fonts', 'images'], () => {

  del('./public/css/**', { force: true }).then(() => {

    gulp
      .src(['./assets/css/**/*.less'])
      .pipe(less({
        plugins: [
          new LessRewriteImportPlugin({
            paths: {
              '../../theme.config': 'assets/css/theme.config'
            }
          }),
          new LessPluginCleanCSS({ advanced: true }),
          new LessPluginAutoPrefix({ browsers: ['last 2 versions'] })
        ]
      }))
      .pipe(replace('/themes/default/assets/', '/assets/themes/default/assets/'))
      .on('error', log)
      .pipe(gulp.dest('./public/css/'));
  });
});

// Task groups
gulp.task('styles', 'Compile source styles to dist directory.', ['less', 'semantic-ui-theme']);
gulp.task('scripts', 'Compile source scripts to dist directory.', ['webpack']);
gulp.task('build', 'Run all build tasks.', ['styles']);
gulp.task('default', ['build']);
