const gulp = require('gulp');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

const paths = {
  src: {
    scripts: ['./src/SpyScroller.ts', './src/Animation/Animate-css/AnimateCss.ts'],
    styles: './src/**/*.scss',
  },
  dist: {
    scripts: './dist/js',
    styles: './dist/styles',
  },
};

// Task to minify and bundle JavaScript files
gulp.task('scripts', () => {
  return gulp
    .src(paths.src.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js')) // Concatenate all scripts into a single file
    .pipe(terser()) // Minify the JavaScript code
    .pipe(rename({ suffix: '.min' })) // Add .min suffix to the filename
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.scripts));
});

// Task to compile Sass files to CSS
gulp.task('styles', () => {
  return gulp
    .src(paths.src.styles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Compile Sass to CSS
    .pipe(rename({ suffix: '.min' })) // Add .min suffix to the filename
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.styles));
});

// Task to watch for changes in scripts and styles
gulp.task('watch', () => {
  gulp.watch(paths.src.scripts, gulp.series('scripts'));
  gulp.watch(paths.src.styles, gulp.series('styles'));
});

// Default task
gulp.task('default', gulp.series('scripts', 'styles', 'watch'));
