# Automation

This Gulp workflow was built to leverage my extensive use of [JSDoc](https://jsdoc.app/) comments with all of the script files and easily built the `README.md` file automatically from preexisting documentation.

Simply navigate to `/automation`and run the `gulp` command. The `gulpfile` will default to running all three tasks however, each task can be run individually as well.

`after-effects-scripts/automation % gulp`

## Lint

`after-effects-scripts/automation % gulp lint`

I'm using [eslint](https://eslint.org/) to keep script files bug-free and consistently formatted based on my [.eslintrc.json](.eslintrc.json) rules.

* `Parser options` - ExtendScript runs an older version of JavaScript
* `Global variables` - variables defined within the ExtendScript environment in After Effects
* `Rules` - formatting standards based on personal preferrence

## Validate

`after-effects-scripts/automation % gulp validate`

Because links are built using the `@name` within each script I need to ensure that `@name` and file name match perfectly (replacing spaces with `_` underscores of course!).

## Build

`after-effects-scripts/automation % gulp build`

The primary `README.md` is built automatically using [Handlebars](https://handlebarsjs.com/).

* `@name` - Script name
* `@version` - Script version
* `@description` - Script description

Knowing the build process is specifically targeting `README.md` files for GitHub I am able to take advantage of GitHub-centric markdown.

* Links on GitHub are built using the `@name` within each script
* Double quotes within the `@description` are converted to backticks and render as `inline-code snippets`
* Some scripts make use of GitHub-rendered alert blockquotes to provide additional information