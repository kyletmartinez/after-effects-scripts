/**
 * @name Parent Newton Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description For each selected layers, parent the closest layer in composition space. Typically
 * used for prepping artwork for Motion Botique's Newton plugin.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getLayerDistance(xOne, yOne, xTwo, yTwo) {
        var a = xOne - xTwo;
        var b = yOne - yTwo;
        return Math.sqrt(a * a + b * b);
    }

    function getClosestLayer(comp, selectedLayer) {
        var selectedX = selectedLayer.transform.position.value[0];
        var selectedY = selectedLayer.transform.position.value[1];
        var closestLayer = null;
        var closestLayerDistance = 99999999;
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            if (layer.index !== selectedLayer.index) {
                var currentX = layer.transform.position.value[0];
                var currentY = layer.transform.position.value[1];
                var layerDistance = getLayerDistance(selectedX, selectedY, currentX, currentY);
                if (layerDistance < closestLayerDistance) {
                    closestLayerDistance = layerDistance;
                    closestLayer = layer;
                }
            }
        }
        return closestLayer;
    }

    app.beginUndoGroup("Parent Newton Layers");
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    for (var l = 0; l < numSelectedLayers; l++) {
        var selectedLayer = selectedLayers[l];
        var parentLayer = getClosestLayer(comp, selectedLayer);
        selectedLayer.parent = parentLayer;
    }
    app.endUndoGroup();
})()