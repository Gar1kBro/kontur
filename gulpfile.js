const gulp = require('gulp');
var sassImage = require('gulp-sass-image');
// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);

// function image() {
//     return gulp.src('img/**/*.+(jpeg|jpg|png|gif|svg')
//         .pipe(compassImagehelper({
//             targetFile: 'main_sass-image.scss', // default target filename is '_sass-image.scss'
//             // template: 'your-sass-image-template.mustache',
//             images_path: 'img/',
//             css_path: 'css/',
//             prefix: 'icon-'
//         }))
//         .pipe(gulp.dest('sass'));
// }

// exports.image = image;