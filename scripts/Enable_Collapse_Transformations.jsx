/**
 * @name Enable Collapse Transformations
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Enabled the "Collapase Transformations" switch on all layers within the project.
 * Layers with a marker that has the exact text of "Do Not Collapse Transformations" will be
 * ignored.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function enableCollapseTransformations() {

    function layerProtected(layer) {
        var layerProtected = false;
        if (layer.marker.numKeys > 0) {
            var marker = layer.marker.keyValue(1);
            if (marker.comment === "Do Not Collapse Transformations") {
                layerProtected = true;
            }
        }
        return layerProtected;
    }

    function iterateThroughLayers(comp) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            layer.locked = false;
            if (layer.canSetCollapseTransformation === true) {
                if (layerProtected(layer) === false) {
                    layer.collapseTransformation = true;
                }
            }
        }
    }

    app.beginUndoGroup("Enable Collapse Transformations");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item);
        }
    }
})();
