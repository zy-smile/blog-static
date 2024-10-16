
gulp插件：
1. `gulp-htmlmin   `压缩html
2. `gulp-csso` 压缩css
3. `gulp-less`less语法转换
4. `gulp-file-include` 公共文件包含
5. `gulp-babel` javascript语法转换es6转换为es5
6. `gulp-uglify`压缩js
7. `browsersync`l浏览器实时同步

```css
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
gulp.task('first', (cb) => {
	console.log('第一个gulp执行了');
	console.log('第二个gulp执行了');
	cb();
})
gulp.task('two',(cb)=> {
	console.log('执行不了');
	cb();
})
// 打包html文件
gulp.task('htmlmin',(cb) => {
	gulp.src('./src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'));
	cb();

})
// 打包css文件
gulp.task('cssmin',(cb) => {
	gulp.src('./src/css/*.css')
		.pipe(csso())
		.pipe(gulp.dest('dist/css'));
		cb();
})
// 打包js文件
gulp.task('jsmin',(cb)=> {
	gulp.src('./src/js/*.js')
		.pipe(babel({
            presets: ['@babel/env']
        }))
		.pipe(gulp.dest('dist/js'));
		cb();
})
// 打包图片
gulp.task('copy',(cb)=>{
	gulp.src('./src/images/*')
		.pipe(gulp.dest('dist/images'));

	gulp.src('./src/lib/*')
		.pipe(gulp.dest('dist/lib'))
		cb();
})
// 同时执行多个任务
gulp.task('default',gulp.series('htmlmin','cssmin','jsmin','copy',(cb) => {
    // Do something after a,b, and c are finished.
    cb();
}));

```
