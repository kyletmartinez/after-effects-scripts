/**
 * @name Add Selection To New Folder
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add all selected items in the Project Panel to a new folder.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addSelectionToNewFolder() {
    app.beginUndoGroup("Add Selection to New Folder");
    var name = prompt("Folder Name", "New Folder");
    if (name !== null && name !== "") {
        var items = app.project.selection;
        var numItems = items.length;
        var newParentFolder = app.project.items.addFolder(name);
        var oldParentFolder = items[0].parentFolder;
        for (var i = 0; i < numItems; i++) {
            var item = items[i];
            item.parentFolder = newParentFolder;
        }
        newParentFolder.parentFolder = oldParentFolder;
    }
    app.endUndoGroup();
})();
