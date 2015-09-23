
var fs = require('fs');
var gulp = require('gulp');
var shell = require('gulp-shell');

try {
  fs.statSync('docs');
} catch(e) {
  fs.mkdir('docs');
}

gulp.task('docs', shell.task([
  'yuidoc -o docs/ecs yagl-ecs/src -t node_modules/yuidoc-lucid-theme -H node_modules/yuidoc-lucid-theme/helpers/helpers.js',
  'yuidoc -o docs/behavior3 yagl-behavior3/lib -t node_modules/yuidoc-lucid-theme -H node_modules/yuidoc-lucid-theme/helpers/helpers.js',
  'yuidoc -o docs/tiledmap yagl-tiledmap/src -t node_modules/yuidoc-lucid-theme -H node_modules/yuidoc-lucid-theme/helpers/helpers.js'
]));

gulp.task('default', ['docs']);
//console.log('ooooooooooooooooooka')