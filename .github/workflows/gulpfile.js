const gulp = require("gulp");

gulp.task("docs", (done) => {
    return done();
})

gulp.task("default", gulp.series("docs"));
