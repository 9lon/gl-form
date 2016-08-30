var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('htmlReplace',function(){
     gulp.src('src/gl-form-label.html')
     gulp.src('src/gl-form-panel.html')
    .pipe(replace('../bower_components/','../'))
    .pipe(gulp.dest(''));
});

gulp.task('watch',function(){
    gulp.watch('src/gl-form-label.html',['htmlReplace']);
    gulp.watch('src/gl-form-panel.html',['htmlReplace']);
});

gulp.task('default', ['htmlReplace','watch']);