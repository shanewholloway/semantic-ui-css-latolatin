var
  gulp         = require('gulp-help')(require('gulp'))
  config       = require('./tasks/config/user')

gulp.task('default', false, [ 'build' ]);
gulp.task('build', 'Builds all files from source', require('./tasks/build'));
gulp.task('clean', 'Clean dist folder', require('./tasks/clean'));
gulp.task('version', 'Displays current version of Semantic', require('./tasks/version'));

