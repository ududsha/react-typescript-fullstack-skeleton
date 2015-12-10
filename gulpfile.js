// LAST EDIT: 30/11/2015
//GULP 4
var gulp = require('gulp');
var merge = require('merge2');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var uglify = require("gulp-uglify");
var buffer = require('vinyl-buffer');
var notify = require('gulp-notify');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript'),
  pjson = require('./package.json');
var concat = require("gulp-concat");
var livereload = require('gulp-livereload');
var tsProject = typescript.createProject('tsconfig.json', {
  declaration: false,
  jsx: "react"
});

/* BACKEND */

gulp.task('backendSrc', function() {
  var tsResult = gulp.src(['src/backend/**/*.ts', 'src/backend/**/**/*.ts']) // instead of gulp.src(["src/**/*.ts", "src/**/**/*.ts"]) //lib, and lib/queries. //except lib.d.ts. Maybe for future use:  { base: './src/' }
    .pipe(typescript(tsProject))

  return tsResult.js.pipe(gulp.dest('./build'));

});

gulp.task('serverAssets', function() {

  return gulp.src('./src/backend/**/*.json')
    .pipe(gulp.dest('./build'));
});


/* FINISH BACKEND */

/* FRONTEND */

gulp.task('frontendSrc', function() {
  var tsResult = gulp.src(['src/frontend/**/*.tsx', 'src/frontend/**/**/*.tsx', 'src/frontend/**/*.ts', 'src/frontend/**/**/*.ts']) // instead of gulp.src(["src/**/*.ts", "src/**/**/*.ts"]) //lib, and lib/queries. //except lib.d.ts. Maybe for future use:  { base: './src/' }
    .pipe(typescript(tsProject))

  return tsResult.js
  .pipe(sourcemaps.init())
  .pipe(gulp.dest('./build/public'));
});


gulp.task('frontendAssetsFolder', function() {

  return gulp.src('./src/frontend/assets/**/**/**')
    .pipe(gulp.dest('./build/public/assets'));
});

gulp.task('frontendHtml', function() {
  return gulp.src('./src/frontend/**/*.html')
    .pipe(gulp.dest('./build/public'));
});

gulp.task('frontendCss', function() {
  return gulp.src('./src/frontend/**/*.css')
    .pipe(gulp.dest('./build/public'));
});

gulp.task('frontendJs', function() {
  return gulp.src(['./src/frontend/**/*.js','./src/frontend/**/*.json'])
    .pipe(gulp.dest('./build/public'));
});


// Basic usage 
gulp.task('runBrowserify', function() {
  // Single entry point to browserify 
  var entry = browserify({
    //do your config here
    entries: ['./build/public/entry.js'],
    global: true,
    debug: true
  });


  //entry.external(dependencies || []);

  return entry.bundle()
    .pipe(source('entry.js')) //this converts to stream
    
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify())
    //do all processing here.
    //like uglification and so on.
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/public/bundle'))
    .pipe(notify('Frontend finished.'))
    .pipe(livereload());
	 console.log('Browser reloaded.');
	
});


gulp.task("frontend", gulp.series(["frontendSrc", 'frontendAssetsFolder', 'frontendJs', 'frontendCss', 'frontendHtml', 'runBrowserify']), function() {

});

/* FINISH FRONTEND */

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['src/frontend/**/*.ts', 'src/frontend/**/**/*.ts', 'src/frontend/**/*.tsx', 'src/frontend/**/**/*.tsx','./src/frontend/assets/**/**/**','./src/frontend/**/*.html'],
    gulp.series('frontend'));

  //be care my friends, here nodemon runs from the current gulpfile's directory, because of this the: ext: 'ts'
  nodemon({
    // the script to run the app
    script: './build/server.js',
    tasks: ['backendSrc', 'serverAssets'],
    ext: 'ts json', //den vazw ext: ts json .js gt exoume ts isws gia json to xreiastoume alla 9a exei confict me to serverAssets 9a dw.
    ignore: ['public/', 'build/','frontend/','gulpfile.js', 'package.json', 'tsconfig.json']
  }).on('restart', function() {
    // when the app has restarted, run livereload.
    gulp.src('./build/server.js')
      .pipe(livereload())
      .pipe(notify('Server restarted, reloading page...'));
	   console.log('Server restarted.');
  });

});


gulp.task('default', gulp.series(['frontend', 'backendSrc', 'serverAssets', 'watch']), function() {});