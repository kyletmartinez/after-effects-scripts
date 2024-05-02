/**
 * @name Rename Selected Layer Sources
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the source of the currently selected layer.
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

    function renameSelectedLayerSources (layers, numLayers, newName) {
        app.beginUndoGroup("Rename Layer Source(s)");
        if (numLayers == 1) {
            layer[0].source = newName;
        } else {
            var length = Math.max(numLayers.toString().length, 2);
            for (var l = 0; l < numLayers; l++) {
                var source = layers[l].source;
                source.name = newName + " " + padNumber(l + 1, length);
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
            renameSelectedLayerSources(layers, numLayers, newName);
        }
    }
})();