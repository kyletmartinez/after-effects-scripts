/**
 * @name Add Folder To Render Queue
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select a single folder in the Project panel and run this script to search through
 * all nested subfolders and add all compositions to the Render Queue.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addFolderToRenderQueue() {

    var renderQueue = app.project.renderQueue;

    function iterateThroughFolder(folder) {
        var items = folder.items;
        var numItems = folder.numItems;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof FolderItem) {
                iterateThroughFolder(item);
            } else if (item instanceof CompItem) {
                renderQueue.items.add(item);
            }
        }
    }

    app.beginUndoGroup("Add Folder To Render Queue");
    var folder = app.project.selection[0];
    iterateThroughFolder(folder);
    app.endUndoGroup();
})();
