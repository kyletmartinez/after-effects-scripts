/**
 * @name Match Selected In Point To Below
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Match the in point of all selected layers to the layer directly below it.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function matchSelectedInPointToBelow() {
    app.beginUndoGroup("Match Selected In Point To Below");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        layer.inPoint = comp.layers[layer.index + 1].inPoint;
    }
    app.endUndoGroup();
})();
