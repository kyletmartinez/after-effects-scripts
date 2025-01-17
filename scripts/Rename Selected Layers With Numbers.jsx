/**
 * @name Rename Selected Layers With Numbers
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the selected layers appending zero-padded numbers as needed.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function renameLayersWithNumbers() {

    String.prototype.padStart = function(length, pad) {
        return Array(Math.max(length - this.length + 1, 0)).join(pad) + String(this);
    };

    function getLength(numLayers) {
        return Math.max(numLayers.toString().length, 2);
    }

    function getNumber(index, length) {
        return String(index).padStart(length, "0");
    }

    function renameLayers(layers, numLayers, name) {
        var length = getLength(numLayers);
        for (var i = 0; i < numLayers; i++) {
            layers[i].name = name + " " + getNumber(i + 1, length);
        }
    }

    app.beginUndoGroup("Rename Layer(s) With Numbers");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    if (numLayers > 0) {
        var oldName = layers[0].name;
        var newName = prompt("Rename Layer(s) With Numbers", oldName);
        if (newName !== null && newName.length > 0) {
            renameLayers(layers, numLayers, newName);
        }
    }
    app.endUndoGroup();
})();