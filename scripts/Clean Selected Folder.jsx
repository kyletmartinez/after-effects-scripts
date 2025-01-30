/**
 * @name Clean Selected Folder
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Remove unused items from any selected folders.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function cleanSelectedFolder() {

    function cleanFolder(folder) {
        var itemsCleaned = 0;
        var items = folder.items;
        var numItems = folder.numItems;
        for (var i = numItems; i > 0; i--) {
            var item = items[i];
            if (!(item instanceof FolderItem)) {
                if (item.usedIn.length === 0) {
                    item.remove();
                    itemsCleaned += 1;
                }
            } else {
                while (cleanFolder(item) === false);
                if (item.numItems === 0) {
                    item.remove();
                }
            }
        }
        return (itemsCleaned === 0);
    }

    app.beginUndoGroup("Clean Selected Folder(s)");
    var project = app.project;
    var rootFolder = app.project.rootFolder;
    var folders = project.selection;
    var numFolders = folders.length;
    for (var f = 0; f < numFolders; f++) {
        var folder = folders[f];
        while (cleanFolder(folder) === false);
        if (folder.numItems === 0) {
            if (folder.parentFolder !== rootFolder) {
                folder.remove();
            }
        }
    }
    app.endUndoGroup();
})();