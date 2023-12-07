/**
 * @name Rename Source to Layer Name
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the source of the selected layer to match.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function findLayer (source, comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = numLayers; l > 0; l--) {
            var layer = layers[l];
            if (layer.source === source) {
                break;
            }
        }
        return layer;
    }

    app.beginUndoGroup("Rename Source to Layer Name");
    var items = app.project.selection;
    var numItems = items.length;
    for (var i = 0; i < numItems; i++) {
        var item = items[i];
        if (item.usedIn.length === 1) {
            var comp = item.usedIn[0];
            var layer = findLayer(item, comp);
            item.name = layer.name;
        }
    }
    app.endUndoGroup();
})();