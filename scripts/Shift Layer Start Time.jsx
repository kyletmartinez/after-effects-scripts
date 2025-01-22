/**
 * @name Shift Layer Start Time
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Shift the start of a group of selected layers to the current time while maintaining
 * relative timing within the group.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function shiftLayerStartTime() {

    function shiftLayers(layers, numLayers, difference) {
        for (var l = 0; l < numLayers; l++) {
            layers[l].startTime += difference;
        }
    }

    function getFirstInPoint(layers, numLayers) {
        var firstInPoint = layers[0].inPoint;
        for (var l = 1; l < numLayers; l++) {
            var layer = layers[l];
            if (layer.inPoint < firstInPoint) {
                firstInPoint = layer.inPoint;
            }
        }
        return firstInPoint;
    }

    app.beginUndoGroup("Shift Layer Start Time");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    var firstInPoint = getFirstInPoint(layers, numLayers);
    var difference = comp.time - firstInPoint;
    shiftLayers(layers, numLayers, difference);
    app.endUndoGroup();
})();