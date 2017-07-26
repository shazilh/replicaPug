var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

var rutas = {
    //rutaJS: './src/assets/js/miGranJs.js',
    rutaSCSS: './src/assets/scss/main.scss',
    //rutaHTML: 'src/*.html'
};


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

/*
gulp.task('watchChangesCSS', function () {
    gulp.watch(rutas.rutaSCSS, ['sass-watch'])
});

gulp.task('prepararCSS', function () {
    gulp.src(rutas.rutaSCSS)
        .pipe(sass({
                outputStyle: 'compressed',
                precision: 3
            })
            .on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});*/