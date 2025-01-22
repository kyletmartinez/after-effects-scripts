/**
 * @name Match Selected Start Time To Below
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Match the start time of all selected layers to the layer directly below it.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function matchSelectedStartTimeToBelow() {
    app.beginUndoGroup("Match Selected Start Time To Below");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        layer.startTime = comp.layers[layer.index + 1].startTime;
    }
    app.endUndoGroup();
})();