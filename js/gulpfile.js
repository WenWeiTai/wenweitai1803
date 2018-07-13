var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass",function() {
    gulp.src('../css/sass/common.scss')
    .pipe(sass())
    .pipe(gulp.dest('../css/'))
})
gulp.watch('../css/sass/*.scss', ['sass'])