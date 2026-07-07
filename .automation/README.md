# ⚙️ Automation

This Gulp workflow leverages [JSDoc](https://jsdoc.app/) comments in script files to automatically generate `README.md` files.

From the `.automation` directory, run:

```bash
npm run default   # Runs lint, validate, and build
npm run lint      # Lint only
npm run validate  # Validate only
npm run build     # Build only
```

## 🧼 Lint

```bash
npm run lint
```

Uses [ESLint 10](https://eslint.org/) with flat config ([eslint.config.mjs](eslint.config.mjs)) to enforce code quality and consistent formatting.

* `Parser options` - ExtendScript (older JavaScript version)
* `Global variables` - After Effects ExtendScript environment
* `Rules` - Formatting standards

## 🔎 Validate

```bash
npm run validate
```

Ensures that the `@name` JSDoc comment matches the filename exactly (with spaces replaced by underscores).

## 📝 Build

```bash
npm run build
```

The primary `README.md` and each category `README.md` are built automatically using [Handlebars](https://handlebarsjs.com/).

* `@name` - Script name
* `@version` - Script version
* `@description` - Script description

Each category folder also gets an emoji defined in the `categoryEmojis` map at the top of the `gulpfile`. The emoji appears next to the category in the root README list and in the category README heading (e.g. `🎯 Selection Scripts`). When adding a new category folder, add a matching entry to the map so the icon renders in both places.

Knowing the build process is specifically targeting `README.md` files for GitHub I am able to take advantage of GitHub-centric markdown.

* Links on GitHub are built using the `@name` within each script
* Double quotes within the `@description` are converted to backticks and render as `inline-code snippets`
* Some scripts make use of GitHub-rendered alert blockquotes to provide additional information