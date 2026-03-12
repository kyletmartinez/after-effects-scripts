/**
 * @name Rename Selected Layers With Numbers
 * @version 2.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the selected layers appending zero-padded numbers as needed.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameLayersWithNumbers() {

    function padStart(str, length, pad) {
        str = String(str);
        return Array(Math.max(length - str.length + 1, 0)).join(pad) + str;
    }

    function getLength(numLayers) {
        return Math.max(numLayers.toString().length, 2);
    }

    function getNumber(index, length) {
        return padStart(index, length, "0");
    }

    function renameLayers(layers, numLayers, name) {
        var length = getLength(numLayers);
        for (var l = 0; l < numLayers; l++) {
            layers[l].name = name + " " + getNumber(l + 1, length);
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
