'use strict';

var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');

gulp.task('testMI1', function(){
  gulp.src('./test/*.js', {read: false})
  .pipe(mocha({
    reporter: 'list',
    istanbul: true 
  }))
  .once('error', () => {
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });
});

gulp.task('testMI2', function(){
  gulp.src('./test/*.js', {read: false})
  .pipe(mocha({
        istanbul: {
          dir: './coverage/'
        }
    }))
  .once('error', () => {
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });
});


gulp.task('default', ['testMI2']);