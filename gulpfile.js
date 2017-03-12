'use strict'

const gulp = require('gulp')
const del = require('del')
const fs = require('fs')
const path = require('path')

// Load plugins
const $ = require('gulp-load-plugins')()
const browserify = require('browserify')
const watchify = require('watchify')
const source = require('vinyl-source-stream')
const sourceFile = './app/scripts/app.js'
const destFolder = './dist/scripts'
const destFileName = 'app.js'
const browserSync = require('browser-sync')
const reload = browserSync.reload

// globals
let development = true

// Styles
gulp.task('styles', ['moveCss'])

gulp.task('moveCss', ['sass'], function() {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(['.tmp/styles/**/*.css'], {
    base: '.tmp/styles/'
  })
   // minify CSS
  .pipe($.if(!development, $.cssnano({
    safe: true,
    autoprefixer: false
  })))
  .pipe(gulp.dest('dist/styles'))
})

gulp.task('sass', () => {
  return gulp.src('app/lib/styles/**/*.scss')
    .pipe($.plumber())
    .pipe($.if(development, $.sourcemaps.init()))
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }))
    .pipe($.if(development, $.sourcemaps.write()))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.if(development, reload({
      stream: true
    })))
})

const bundler = watchify(browserify({
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
    .pipe($.brfs())
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
    .pipe($.brfs())
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
    .pipe($.if('*.css', $.rev()))
    .pipe($.if('*.js', $.rev()))
    .on('end', function() {
      $.util.log('revved JS');
    })
    .pipe($.revReplace({
      prefix: '/' // absolute URLs
    }))
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
  return gulp.src(['app/bower_components/**/*.{eot,svg,ttf,woff,woff2}'], {
    base: 'app/bower_components'
  })
    .pipe($.flatten())
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

gulp.task('buildBundle', ['styles', 'buildScripts', 'json', 'bower', 'jade'], function() {
  return gulp.src('./app/*.html')
    .pipe($.useref.assets())
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist'))
})

// // Move JS Files and Libraries
// gulp.task('moveLibraries', ['clean'], function() {
//   // the base option sets the relative root for the set of files,
//   // preserving the folder structure
//   gulp.src(['./app/scripts/**/*.js'], {
//       base: './app/scripts/'
//   })
//   .pipe(gulp.dest('dist/scripts'))
// })

// Bower helper
gulp.task('bower', function() {
  gulp.src('app/bower_components/**/*.js', {
    base: 'app/bower_components'
  })
    .pipe(gulp.dest('dist/bower_components/'))
})

gulp.task('json', function() {
  gulp.src('app/data/**/*.json', {
    base: 'app/data'
  })
    .pipe(gulp.dest('dist/data/'))
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
  gulp.watch('app/data/**/*.json', ['json'])

  // Watch .html files
  gulp.watch('app/*.html', ['html'])

  gulp.watch(['app/lib/styles/**/*.scss', 'app/lib/styles/**/*.css'], ['styles', 'scripts', reload])

  // Watch .jade files
  gulp.watch('app/templates/**/*.jade', ['jade', 'html', reload])
  gulp.watch('app/includes/**/*.jade', ['jade', 'html', reload])

  // Watch image files
  gulp.watch('app/images/**/*', reload)
})

gulp.task('setProduction', function() {
   development = false

    $.util.log("DEV="+ (development?"yes":"no"));
})

// Build
gulp.task('build', ['html', 'buildBundle', 'images', 'fonts', 'extras'], function() {
  gulp.src('dist/scripts/app.js')
    .pipe($.uglify())
    .pipe($.stripDebug())
    .pipe(gulp.dest('dist/scripts'))
})

// deploy to Github pages
gulp.task('deploy', ['setProduction', 'build', 'cname'], () => {
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
