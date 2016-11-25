'use strict'

var gulp = require('gulp')
var del = require('del')
const fs = require('fs')

var path = require('path')

// Load plugins
var $ = require('gulp-load-plugins')()
var browserify = require('browserify')
var watchify = require('watchify')
var source = require('vinyl-source-stream'),

  sourceFile = './app/scripts/app.js',

  destFolder = './dist/scripts',
  destFileName = 'app.js'

var browserSync = require('browser-sync')
var reload = browserSync.reload

// Styles
gulp.task('styles', ['moveCss'])

gulp.task('moveCss', ['sass'], function() {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(['.tmp/styles/**/*.css'], {
    base: '.tmp/styles/'
  })
    .pipe(gulp.dest('dist/styles'))
})

gulp.task('sass', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }))
})

var bundler = watchify(browserify({
  entries: [sourceFile],
  debug: true,
  insertGlobals: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}))

bundler.on('update', rebundle)
bundler.on('log', $.util.log)

function rebundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', $.util.log.bind($.util, 'Browserify Error'))
    .pipe(source(destFileName))
    .pipe(gulp.dest(destFolder))
    .on('end', function() {
      reload()
    })
}

// Scripts
gulp.task('scripts', rebundle)

gulp.task('buildScripts', function() {
  return browserify(sourceFile)
    .bundle()
    .pipe(source(destFileName))
    .pipe(gulp.dest('dist/scripts'))
})

gulp.task('jade', function() {
  return gulp.src('app/templates/*.jade')
    .pipe($.data(function(file) {
      return {
        'data': JSON.parse(fs.readFileSync('app/includes/data.json'))
      }
    }))
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
})

// HTML
gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe($.useref())
    .pipe(gulp.dest('dist'))
    .pipe($.size())
})

// Images
gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size())
})

// Fonts
gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('dist/fonts'))
})

// Clean
gulp.task('clean', function(cb) {
  $.cache.clearAll()
  cb(del.sync(['dist/styles', 'dist/scripts', 'dist/images']))
})

// Bundle
gulp.task('bundle', ['styles', 'scripts', 'bower'], function() {
  return gulp.src('./app/*.html')
    .pipe($.useref.assets())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist'))
})

gulp.task('buildBundle', ['styles', 'buildScripts', 'moveLibraries', 'bower', 'jade'], function() {
  return gulp.src('./app/*.html')
    .pipe($.useref.assets())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist'))
})

// Move JS Files and Libraries
gulp.task('moveLibraries', ['clean'], function() {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(['./app/scripts/**/*.js'], {
    base: './app/scripts/'
  })
    .pipe(gulp.dest('dist/scripts'))
})

// Bower helper
gulp.task('bower', function() {
  gulp.src('app/bower_components/**/*.js', {
    base: 'app/bower_components'
  })
    .pipe(gulp.dest('dist/bower_components/'))
})

gulp.task('json', function() {
  gulp.src('app/scripts/json/**/*.json', {
    base: 'app/scripts'
  })
    .pipe(gulp.dest('dist/scripts/'))
})

// Robots.txt and favicon.ico
gulp.task('extras', function() {
  return gulp.src(['app/*.txt', 'app/*.ico'])
    .pipe(gulp.dest('dist/'))
    .pipe($.size())
})

// Watch
gulp.task('watch', ['html', 'fonts', 'bundle'], function() {
  browserSync({
    notify: false,
    logPrefix: 'BS',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['dist', 'app']
  })

  // Watch .json files
  gulp.watch('app/scripts/**/*.json', ['json'])

  // Watch .html files
  gulp.watch('app/*.html', ['html'])

  gulp.watch(['app/styles/**/*.scss', 'app/styles/**/*.css'], ['styles', 'scripts', reload])

  // Watch .jade files
  gulp.watch('app/templates/**/*.jade', ['jade', 'html', reload])
  gulp.watch('app/includes/**/*.jade', ['jade', 'html', reload])

  // Watch image files
  gulp.watch('app/images/**/*', reload)
})

// Build
gulp.task('build', ['html', 'buildBundle', 'images', 'fonts', 'extras'], function() {
  gulp.src('dist/scripts/app.js')
    .pipe($.uglify())
    .pipe($.stripDebug())
    .pipe(gulp.dest('dist/scripts'))
})

// deploy to Github pages
gulp.task('deploy', ['build', 'cname'], () => {
  return gulp.src('dist')
    .pipe($.subtree({
      remote: 'github',
      branch: 'gh-pages',
      message: 'deployed by gulp'
    }))
});

gulp.task('cname', () => {
  return gulp.src([
    'app/CNAME'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', ['watch'])
