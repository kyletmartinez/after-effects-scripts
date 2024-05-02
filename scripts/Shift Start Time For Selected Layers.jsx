/**
 * @name Shift Start Time For Selected Layers
 * @version 1.4
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Shift all selected layers to the Current Time Indicator as a group while maintaining
 * relative timing.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function shiftLayers (layers, currentTime, firstInPoint) {
        app.beginUndoGroup("Shift Start Time For Selected Layers");
        var difference = currentTime - firstInPoint;
        var numLayers = layers.length;
        for (var l = 0; l < numLayers; l++) {
            var layer = layers[l];
            layer.startTime += difference;
        }
        app.endUndoGroup();
    }

    function getFirstInPoint (layers) {
        var numLayers = layers.length;
        var firstInPoint = layers[0].inPoint;
        for (var l = 1; l < numLayers; l++) {
            var layer = layers[l];
            if (layer.inPoint < firstInPoint) {
                firstInPoint = layer.inPoint;
            }
        }
        return firstInPoint;
    }

    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var layers = comp.selectedLayers;
        var currentTime = comp.time;
        var firstInPoint = getFirstInPoint(layers);
        shiftLayers(layers, currentTime, firstInPoint);
    }
})();