// Set up gulp dependency

var gulp = require('gulp');

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

gulp.task('default', gulp.series('html', 'css'));