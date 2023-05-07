/**
 * @title Change Nested Composition Layer Names
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename all the layers within all nested compositions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function changeLayerNames(comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            if (layer.source instanceof CompItem) {
                changeLayerNames(layer.source);
            } else {
                if (layer.index == 1) {
                    layer.name = "Dot";
                } else {
                    layer.name = "Diamond";
                }
            }
        }
    }

    app.beginUndoGroup("Change Nested Composition Layer Names");
    var comp = app.project.activeItem;
    changeLayerNames(comp);
    app.endUndoGroup();
})()