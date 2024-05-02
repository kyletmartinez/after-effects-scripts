/**
 * @name Rename Selected Project Items
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename selected project items and append zero padded numbers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function padStart(num) {
        var n = num.toString();
        if (n.length == 1) { n = "0" + n; }
        return n;
    }

    app.beginUndoGroup("Rename Project Item(s)");
    var project = app.project;
    var selectedItems = project.selection;
    var numSelectedItems = selectedItems.length;
    if (numSelectedItems > 0) {
        var newName = prompt("Name", "");
        if (newName !== null && newName.length > 0) {
            for (var s = 0; s < numSelectedItems; s++) {
                var item = selectedItems[s];
                item.name = newName + padStart(s + 1);
            }
        }
    }
    app.endUndoGroup();
})()