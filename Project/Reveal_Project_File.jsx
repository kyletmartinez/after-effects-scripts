/**
 * @name Reveal Project File
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Attempt to reveal the project file location of a saved After Effects project in
 * Finder on macOS or Explorer on Windows.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function revealProjectFile() {
    try {
        app.project.file.parent.execute();
    } catch (err) {
        alert("After Effects\nUnable to open project file");
    }
})();
