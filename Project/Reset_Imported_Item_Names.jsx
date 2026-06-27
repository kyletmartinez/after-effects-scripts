/**
 * @name Reset Imported Item Names
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Reset the name for all selected imported items in the Project Panel.
 *
 * Useful for when a file name is changed on the operating system side then relinked in After
 * Effects but the name doesn't update.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function resetImportedItemNames() {
    app.beginUndoGroup("Reset Imported Item Names");
    var project = app.project;
    var items = project.selection;
    var numItems = items.length;
    for (var i = 0; i < numItems; i++) {
        var item = items[i];
        if (item instanceof FootageItem) {
            item.name = item.mainSource.file.displayName;
        }
    }
    app.endUndoGroup();
})();
