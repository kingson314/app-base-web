const gulp = require('gulp')
var clean = require('gulp-clean'); //清理文件或文件夹
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const fileinclude = require('gulp-file-include')
const connect = require('gulp-connect')
const proxy = require('http-proxy-middleware')
const htmlmin = require('gulp-htmlmin')
const minifyCSS = require('gulp-minify-css')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')
const sourcemaps = require("gulp-sourcemaps")
const gulpAutoprefixer = require('gulp-autoprefixer')
const autoprefixer = require('autoprefixer')
const cssnext = require('cssnext')
const precss = require('precss')
 

const scss = {
  src: 'src/scss/**/*',
  dest: 'css'
} 
const js = {
  src: 'src/js/**/*',
  dest: 'js'
} 

//清理构建目录
gulp.task('clean', function() {
  return gulp.src([ 'dist','css'], {
    read: false
  }).pipe(clean({
    force: true
  }));
});
gulp.task('js', () => {
  return gulp.src(js.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    // .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(js.dest))
})

gulp.task('sass', () => {
  return gulp.src(scss.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpAutoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(scss.dest))
})  
//使用connect启动一个Web服务器
// gulp.task('connect', function() {
//   connect.server({
//     root: './dist',
//     livereload: true,
//     port: 3000,
//     middleware: function(connect, opt) {
//       return [jsonPlaceholderProxy]
//     }
//   })
// })

gulp.task('watch', () => {
  gulp.watch(scss.src, ['sass'])
  // gulp.watch(js.src, ['js'])
})

gulp.task('default', ['clean','js', 'sass', 'watch'])
gulp.task('build', ['clean','js', 'sass'])
