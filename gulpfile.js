var gulp = require("gulp"),
    clean = require("gulp-clean"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    runSequence = require("run-sequence"),
    rename = require("gulp-rename");

// Cleans the dist folder
gulp.task("clean", () => {
    return gulp.src("./dist/", { read: false })
        .pipe(clean());
});

// ES6 to ES5 Compiler
gulp.task("babel", () => {
    return gulp.src("./src/gst.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("./dist/"));
});

// Minifies the JS found in the temp/js folder
gulp.task("minify-js", () => {
    return gulp.src("./dist/gst.js")
        .pipe(uglify())
        .pipe(rename("gst.min.js"))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("build", (cb) => {
    runSequence("clean", "babel", "minify-js", cb);
});