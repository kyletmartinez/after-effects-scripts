/**
 * @name Parent Closest Layers
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Parent the closest layer in the composition to each selected layer. Calculations
 * done in 2D space. Typically used in conjunction with Newton by Motion Botique.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function parentClosestLayers() {

    function getDistance(xOne, yOne, xTwo, yTwo) {
        return Math.sqrt(Math.pow(xOne - xTwo, 2) + Math.pow(yOne - yTwo, 2));
    }

    function getClosestLayer(comp, currentLayer) {
        var currentX = currentLayer.transform.position.value[0];
        var currentY = currentLayer.transform.position.value[1];
        var closestLayer = null;
        var closestDistance = Infinity;
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            if (layer.index !== currentLayer.index) {
                var closestX = layer.transform.position.value[0];
                var closestY = layer.transform.position.value[1];
                var distance = getDistance(currentX, currentY, closestX, closestY);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestLayer = layer;
                }
            }
        }
        return closestLayer;
    }

    app.beginUndoGroup("Parent Closest Layer(s)");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        var parentLayer = getClosestLayer(comp, layer);
        layer.parent = parentLayer;
    }
    app.endUndoGroup();
})();