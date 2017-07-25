var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function(){
    gulp.src('./src/*.jade')//aqui esta nuestro archivo
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))//aqui tiene que mandar los resultados
})
//para que este alerta a cualquier cambio hecho en mis archivos jade
gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade'])
});

gulp.task('default', ['jade', 'watch'])
