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
  src: 'src/**/*',
  dest: 'js'
} 

//清理构建目录
gulp.task('clean', function() {
  return gulp.src([ 'css'], {
    read: false,
    allowEmpty: true
  }).pipe(clean({
    force: true
  }));
});
//拷贝
gulp.task('copy', function() {
  let dist="/Volumes/Docs/Git/app-spm-web/node_modules/app-base-web/"
   gulp.src([scss.dest+ '/**/*'], {
  }).pipe(gulp.dest(dist+"css"));
   gulp.src([js.dest+ '/**/*'], {
  }).pipe(gulp.dest(dist+"js"));
  gulp.src(['src/**/*'], {
  }).pipe(gulp.dest(dist+"src"));


   dist="/Volumes/Docs/Git/hf-race-admin/node_modules/app-base-web/"
   gulp.src([scss.dest+ '/**/*'], {
  }).pipe(gulp.dest(dist+"css"));
   gulp.src([js.dest+ '/**/*'], {
  }).pipe(gulp.dest(dist+"js"));
  gulp.src(['src/**/*'], {
  }).pipe(gulp.dest(dist+"src"));

  dist="/Volumes/Docs/Git/app-qy-web/node_modules/app-base-web/"
   gulp.src([scss.dest+ '/**/*'], {
  }).pipe(gulp.dest(dist+"css"));
   gulp.src([js.dest+ '/**/*'], {
  }).pipe(gulp.dest(dist+"js"));
  
  return gulp.src(['src/**/*'], {
  }).pipe(gulp.dest(dist+"src"));
  // return gulp.src(['/Volumes/Docs/Git/app-base-web/**/*'], {
  // }).pipe(gulp.dest(dist));
});

// gulp.task('js', () => {
//   console.log(js.src);
//   return gulp.src(js.src)
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     // .pipe(concat('main.js'))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest(js.dest))
// });

gulp.task('sass', () => {
  console.log(scss.src);
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
  gulp.watch([scss.src],gulp.series('sass',() => {
    return new Promise(function(resolve, reject) {
      console.log("complete")
      resolve();
    });
  })); 
});

// gulp.task("watch",async ()=>{
//         gulp.watch(scss.src,async ()=>{
//           console.log(scss.src);
//             return gulp.src(scss.src)
//           .pipe(plumber())
//           .pipe(sourcemaps.init())
//           .pipe(sass().on('error', sass.logError))
//           .pipe(gulpAutoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//           }))
//           // .pipe(concat('main.css'))
//           .pipe(minifyCSS())
//           .pipe(sourcemaps.write('.'))
//           .pipe(gulp.dest(scss.dest))
//         });
//   });

gulp.task('build',gulp.series('clean', 'sass','copy',() => {
  return new Promise(function(resolve, reject) {
    console.log("complete")
    resolve();
  });
}));
// gulp.task('default',gulp.series('watch'));