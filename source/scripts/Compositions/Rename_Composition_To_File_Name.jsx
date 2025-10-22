/**
 * @name Rename Composition To File Name
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the composition to match the name of the project file.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameCompositionToFileName() {
    app.beginUndoGroup("Rename Composition To File Name");
    app.project.activeItem.name = app.project.file.name.split(".")[0];
    app.endUndoGroup();
})();
