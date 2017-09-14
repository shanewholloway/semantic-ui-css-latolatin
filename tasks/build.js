/*******************************
          Build Task
*******************************/

var
  // dependencies
  gulp         = require('gulp-help')(require('gulp')),
  runSequence  = require('run-sequence'),

  // config
  config       = require('./config/user'),
  install      = require('./config/project/install'),

  // task sequence
  tasks        = []
;


// sub-tasks
require('./collections/build')(gulp);


module.exports = function(callback) {

  console.info('Building Semantic');

  if( !install.isSetup() ) {
    console.error('Cannot find semantic.json. Run "gulp install" to set-up Semantic');
    return 1;
  }

  tasks.push('build-css');
  tasks.push('build-assets');

  runSequence(tasks, callback);
};
