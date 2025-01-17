/**
 * @name Rename Composition to File Name
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the composition to match the name of the project file.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function renameCompositionToFileName() {
    app.beginUndoGroup("Rename Composition to File Name");
    var comp = app.project.activeItem;
    comp.name = app.project.file.name.split(".")[0];
    app.endUndoGroup();
})();