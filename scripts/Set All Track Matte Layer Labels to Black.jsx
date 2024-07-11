/**
 * @name Set All Track Matte Layers to Black
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Reset the label colors for all track matte layers in the active composition as label
 * number 16. Label number 16 is Black (#FFFFFF) in my label preferences and is always used for
 * track matte layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var LABEL = 16;

    app.beginUndoGroup("Set All Track Matte Layers to Black");
    var trackMatteLayers = [];
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var l = 1; l <= numLayers; l++) {
        var layer = layers[l];
        if (layer.hasTrackMatte === true) {
            var trackMatteLayer = layer.trackMatteLayer;
            trackMatteLayer.label = LABEL;
        }
    }
    app.endUndoGroup();
})();