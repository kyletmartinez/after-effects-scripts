/**
 * @name Replace Text in Project Item Name
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Replace text in the name of all selected project items.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Replace Text in Project Item Name")
    var selectedItems = app.project.selection;
    var numSelectedItems = selectedItems.length;
    for (var i = 0; i < numSelectedItems; i++) {
        var item = selectedItems[i];
        var name = item.name
        item.name = name.replace(/v05/g, "v06");
    }
    app.endUndoGroup();
})()