/**
 * @name Match Selected Layer In Time To Below
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Match the in point of all selected layers to the layer directly below it.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Match Selected Layer Start In To Below");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        var nextLayer = comp.layers[layer.index + 1];
        layer.inPoint = nextLayer.inPoint;
    }
    app.endUndoGroup();
})();