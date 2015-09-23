
var fs = require('fs');
var gulp = require('gulp');
var shell = require('gulp-shell');

try {
  fs.statSync('docs');
} catch(e) {
  fs.mkdir('docs');
}

gulp.task('ecs-doc', shell.task([
  'yuidoc -o docs/ecs yammo-ecs'
]));

gulp.task('default', ['ecs-doc']);
//console.log('ooooooooooooooooooka')