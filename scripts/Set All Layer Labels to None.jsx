/**
 * @name Set All Layer Labels to None
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Reset the label colors for all layers in the active composition as None.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var LABEL = 0;

    app.beginUndoGroup("Set All Layer Labels to None");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var l = 1; l <= numLayers; l++) {
        var layer = layers[l];
        layer.label = LABEL;
    }
    app.endUndoGroup();
})();