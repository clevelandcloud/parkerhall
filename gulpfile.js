// Set up gulp dependency

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Move HTML
gulp.task('html', function () {
    // Pipe html files
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

// Compress and process tailwind css
gulp.task('css', function() {
    var postcss = require('gulp-postcss');
    return gulp.src('src/css/styles.css')
        // ..
        .pipe(postcss([
            // ..
            require('tailwindcss'),
            require('autoprefixer'),
        ]))
        // ..
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('browser-sync', gulp.series('html', 'css'), function() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html",
        }
    });
    gulp.watch("src/css/*.css", gulp.series('css'));
    gulp.watch("src/*.html/").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('browser-sync'));