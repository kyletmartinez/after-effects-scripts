const eslint = require("gulp-eslint");
const fs = require("fs");
const gulp = require("gulp");
const jsdoc2md = require("jsdoc-to-markdown");
const path = require("path");
const through = require("through2");

const categories = fs.readdirSync("../")
    .filter(name => {
        const fullPath = path.join("..", name);
        return fs.statSync(fullPath).isDirectory() &&
               name !== "automation" &&
               name !== ".git" &&
               !name.startsWith(".");
    });

gulp.task("build", async () => {
    const categoryTemplate = fs.readFileSync("template-category.hbs", "utf8");
    const rootTemplate = fs.readFileSync("template-root.hbs", "utf8");

    for (const category of categories) {
        const categoryPath = path.join("..", category);
        const files = path.join(categoryPath, "*.jsx");

        try {
            const customizedTemplate = categoryTemplate.replace(/{{categoryName}}/g, category);

            const output = await jsdoc2md.render({
                "template": customizedTemplate,
                "helper": "replace.js",
                "files": files
            });

            fs.writeFileSync(path.join(categoryPath, "README.md"), output);
            console.log(`Generated README for ${category}`);
        } catch (error) {
            console.error(`Error generating README for ${category}:`, error.message);
        }
    }

    const allScripts = categories.flatMap(cat =>
        fs.readdirSync(path.join("..", cat))
            .filter(file => file.endsWith(".jsx"))
            .map(file => path.join("..", cat, file))
    );

    try {
        const categoryList = categories.map(cat => `- [${cat}](/${cat})`).join("\n");
        const customizedTemplate = rootTemplate.replace(/{{#each categories}}[\s\S]*?{{\/each}}/g, categoryList);

        const output = await jsdoc2md.render({
            "template": customizedTemplate,
            "helper": "replace.js",
            "files": allScripts
        });

        fs.writeFileSync("../README.md", output);
        console.log("Generated root README");
    } catch (error) {
        console.error("Error generating root README:", error.message);
    }
});

gulp.task("validate", () => {
    const nameRegex = /@name\s+(.+)/;
    const allScripts = categories.map(cat => path.join("..", cat, "*.jsx"));

    return gulp.src(allScripts)
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
    const allScripts = categories.map(cat => path.join("..", cat, "*.jsx"));

    return gulp.src(allScripts)
        .pipe(eslint({configFile: ".eslintrc.json"}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("default", gulp.series("lint", "validate", "build"));
