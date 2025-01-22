/**
 * @name Rename Selected Project Items
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename selected project items appending zero-padded numbers as needed.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameProjectItems() {

    if (!String.prototype.padStart) {
        String.prototype.padStart = function(length, pad) {
            return Array(Math.max(length - this.length + 1, 0)).join(pad) + String(this);
        };
    }

    function getLength(numLayers) {
        return Math.max(numLayers.toString().length, 2);
    }

    function getNumber(index, length) {
        return String(index).padStart(length, "0");
    }

    function renameItems(items, numItems, name) {
        var length = getLength(numItems);
        for (var i = 0; i < numItems; i++) {
            items[i].name = name + " " + getNumber(i + 1, length);
        }
    }

    app.beginUndoGroup("Rename Project Item(s)");
    var project = app.project;
    var items = project.selection;
    var numItems = items.length;
    if (numItems > 0) {
        var oldName = items[0].name;
        var newName = prompt("Rename Project Item(s)", oldName);
        if (newName !== null && newName.length > 0) {
            renameItems(items, numItems, newName);
        }
    }
    app.endUndoGroup();
})();