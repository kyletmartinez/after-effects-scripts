/**
 * @name Select All Children
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select all layers parented to the currently selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getParentLayer(layer) {
        while (layer.parent !== null) {
            layer = layer.parent
        }
        return layer;
    }

    function selectAllChilden(comp, selectedLayer) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            var parentLayer = getParentLayer(layer);
            if (selectedLayer === parentLayer) {
                layer.selected = true;
            }
        }
    }

    try {
        app.beginUndoGroup("Select All Children");
        var comp = app.project.activeItem;
        var selectedLayer = comp.selectedLayers[0];
        selectAllChilden(comp, selectedLayer);
    } catch (err) {
        alert(err);
    } finally {
        app.endUndoGroup();
    }
})()