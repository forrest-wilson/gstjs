var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    runSequence = require("run-sequence"),
    rename = require("gulp-rename");

// Minifies the JS found in the temp/js folder
gulp.task("minify-js", () => {
    return gulp.src("./gstjs/gst.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(uglify())
        .pipe(rename("gst.min.js"))
        .pipe(gulp.dest("./gstjs/"));
});

gulp.task("build", (cb) => {
    runSequence("minify-js", cb);
});