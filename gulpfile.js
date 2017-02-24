var gulp = require('gulp');
var rename = require("gulp-rename");
gulp.task('dist', function () {
    return gulp.src(['_site/**/*'], {
        base: '_site'
    })
	.pipe(rename(function (path) {
		if (path.extname === ".html") {
			path.extname = ".php";
		}
	}))
	.pipe(gulp.dest('../aarondelanicom/static'));
});
