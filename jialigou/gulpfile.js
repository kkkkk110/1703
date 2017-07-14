var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
gulp.task('jia',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass({
		outputStyle:'expanded'
	}).on('error',sass.logError))
	.pipe(gulp.dest('./src/css/'))
});

gulp.task('jialigou',function(){
	// browserSync({
	// 	proxy:'http://localhost:10086',
	// 	port:10087,
	// 	files:['src/css/*.css','src/**/*.html']

	// });
	gulp.watch('./src/sass/*.scss',['jia'])
})


gulp.task('ya',function(){
	gulp.src('./src/js/*.js')
	.pipe(sass({
		outputStyle:'compressed'
	}).on('error',sass.logError))
	.pipe(gulp.dest('./dis/js/'))
});

gulp.task('yashuo',function(){
	// browserSync({
	// 	proxy:'http://localhost:10086',
	// 	port:10087,
	// 	files:['src/css/*.css','src/**/*.html']

	// });
	gulp.watch('./src/js/*.js',['ya'])
})