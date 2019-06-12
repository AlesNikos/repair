let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let htmlmin = require('gulp-htmlmin');
let tinyPNG = require('gulp-tinypng-compress');





gulp.task('minify-css', function(done) {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))
  done();
});

gulp.task('minify-js', function (done) {
  return gulp.src(['./src/js/*.js', '!./src/js/*.min.js']) 
  .pipe(uglify()) 
  .pipe(rename({
    suffix: '.min'
  })) 
  .pipe(gulp.dest('dist/js/')) 
  done();
});

gulp.task('move-js', function (done) {
  return gulp.src('./src/js/*.min.js')
  .pipe(gulp.dest('dist/js/'))
  done();
});

gulp.task('htmlmin', function (done) {
  return gulp.src('src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'))
  done();
});

gulp.task('fonts', function (done) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts/'))
  done();
});

gulp.task('tinypng', function (done) {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: 's5pturJNj4eRPPUIfkIyTXQQAovgcuj6',
      sigFile: 'images/.tinypng-sigs',
      log: true
    }))
    .pipe(gulp.dest('dist/img/'))
    done();
});

gulp.task('default', gulp.parallel('minify-css', 'minify-js', 'move-js', 'htmlmin', 'fonts', 'tinypng', function (done) {
  done();
}));