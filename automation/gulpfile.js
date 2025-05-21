const eslint = require("gulp-eslint");
const fs = require("fs");
const gulp = require("gulp");
const jsdoc2md = require("jsdoc-to-markdown");
const path = require("path");
const through = require("through2");

const files = "../source/scripts/*.jsx";

gulp.task("build", done => {
    jsdoc2md.render({
        "template": fs.readFileSync("template.hbs", "utf8"),
        "helper": "replace.js",
        "files": files})
    .then(output => fs.writeFileSync(`../README.md`, output));
    return done();
});

gulp.task("validate", () => {
    const nameRegex = /@name\s+(.+)/;
    return gulp.src([files])
        .pipe(
            through.obj(function (file, _, cb) {
                if (file.isBuffer()) {
                    const fileName = path.basename(file.path, ".jsx");
                    if (/\s/.test(fileName)) {
                        console.error(`File name contains spaces: ${fileName}`);
                    }
                    const fileNameStripped = fileName.replace(/_/g, " ");
                    const content = file.contents.toString();
                    const match = content.match(nameRegex);
                    if (match && match[1]) {
                        const docName = match[1].trim();
                        if (fileNameStripped !== docName) {
                            console.error(`Mismatch in ${fileName}.jsx`);
                        }
                    }
                }
                cb(null, file);
            })
        );
});

gulp.task("lint", () => {
    return gulp.src([files])
        .pipe(eslint({configFile: ".eslintrc.json"}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("default", gulp.series("lint", "validate", "build"));
