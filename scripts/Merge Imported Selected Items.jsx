/**
 * @name Merge Imported Selected Items
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Merge all imported and selected items in a previously existing and matching folder.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function mergeImportedSelectedItems() {

    function getNewParentFolder(project, parentFolder) {
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof FolderItem) {
                if (item.name === parentFolder.name) {
                    if (item.id < parentFolder.id) {
                        return item;
                    }
                }
            }
        }
        return false;
    }

    app.beginUndoGroup("Merge Imported Selected Item(s)");
    var project = app.project;
    var items = project.selection;
    var numItems = items.length;
    for (var i = 0; i < numItems; i++) {
        var item = items[i];
        var oldParentFolder = item.parentFolder;
        var newParentFolder = getNewParentFolder(project, oldParentFolder);
        if (newParentFolder !== false) {
            item.parentFolder = newParentFolder;
        }
    }
    app.endUndoGroup();
})();