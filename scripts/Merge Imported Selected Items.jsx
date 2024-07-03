/**
 * @name Merge Imported Selected Items
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Attempt to move all selected and newly imported items into their matching and
 * previously existing folders.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {

    /**
     * Find a new parent folder based on the old parent folder. A valid new parent folder must meet
     * the following criteria:
     *
     * 1. New folder must be an instance of "FolderItem" (duh!)
     * 2. New folder must have an identical name to the old folder (makes sense!)
     * 3. New folder ID must be smaller than the old folder ID. (wait why?)
     *
     *    The older the item, the smaller the ID. The newer the item, the larger the ID. Lucky for
     *    us, imported projects do not retain their orignal item IDs. Instead, they are assigned
     *    newer, and by extension larger, item IDs.
     *
     * 4. If no valid options can be found, return "false" so we don't change the parent folder for
     *    the selected item.
     *
     * @param  {ProjectItem} project      - current project
     * @param  {FolderItem}  parentFolder - old parent folder
     * @return {FolderItem}               - new parent folder
     */
    function getNewParentFolder (project, parentFolder) {
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