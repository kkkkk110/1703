var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('mailegou',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/css'));
});

gulp.task('jianting',function(){
	gulp.watch('./src/sass/*.scss',['mailegou']);
})


// var gulp = require('gulp');
// var sass = require('gulp-sass');
// gulp.task('mailegou',function(){
// 	gulp.src('./src/sass/*.scss')
// 	.pipe(sass())
// 	.pipe(gulp.dest('./src/css'));
// });

// gulp.task('jtSass',function(){
// 	gulp.watch('./src/sass/*.scss',['mailegou']);	
// });
