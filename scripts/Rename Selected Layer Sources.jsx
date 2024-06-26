/**
 * @name Rename Selected Layer Sources
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the sources of the currently selected layers.
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

    function renameSelectedLayerSources (layers, numLayers, name) {
        app.beginUndoGroup("Rename Layer Sources");
        var length = Math.max(numLayers.toString().length, 2);
        for (var i = 0; i < numLayers; i++) {
            layers[i].source.name = name + " " + padNumber(i + 1, length);
        }
        app.endUndoGroup();
    }

    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var layers = comp.selectedLayers;
        var numLayers = layers.length;
        if (numLayers > 0) {
            var name = prompt("Name", "");
            if (name !== null && name.length > 0) {
                renameSelectedLayerSources(layers, numLayers, name);
            }
        }
    }
})()