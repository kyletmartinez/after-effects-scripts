/**
 * @name Clean Selected Folders
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Clean unused items from any selected folders. Remove empty folders unless they are
 * top level.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function cleanSelectedFolder(folder) {
        var itemsCleaned = 0;
        var items = folder.items;
        var numItems = folder.numItems;
        for (var i = numItems; i > 0; i--) {
            var item = items[i];
            if (!(item instanceof FolderItem)) {
                if (item.usedIn.length === 0) {
                    item.remove();
                    itemsCleaned++;
                }
            } else {
                while(cleanSelectedFolder(item) === false);
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
        while(cleanSelectedFolder(folder) === false);
        if (folder.numItems === 0) {
            if (folder.parentFolder !== rootFolder) {
                folder.remove();
            }
        }
    }
    app.endUndoGroup();
})();
