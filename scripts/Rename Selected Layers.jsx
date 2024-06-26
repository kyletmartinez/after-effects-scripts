/**
 * @name Rename Selected Layers
 * @version 1.7
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename selected layers and append zero padded numbers. Selecting a single layer
 * will not append zero padded numbers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function padNumber(num, length) {
        return Array(Math.max(length - String(num).length + 1, 0)).join(0) + num;
    }

    function renameSelectedLayers (layers, numLayers, newName) {
        app.beginUndoGroup("Rename Layer(s)");
        if (numLayers == 1) {
            layers[0].name = newName;
        } else {
            var length = Math.max(numLayers.toString().length, 2);
            for (var l = 0; l < numLayers; l++) {
                var layer = layers[l];
                layer.name = newName + " " + padNumber(l + 1, length);
            }
        }
        app.endUndoGroup();
    }

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    if (numLayers > 0) {
        var oldName = layers[0].name;
        var newName = prompt("Name", oldName);
        if (newName !== null && newName.length > 0) {
            renameSelectedLayers(layers, numLayers, newName);
        }
    }
})();