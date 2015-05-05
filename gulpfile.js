var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

var paths = {
  src: './angular-kefir.js',
  dist: './'
};

gulp.task('build', function() {
  return gulp.src(paths.src)
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))

    .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['build']);

