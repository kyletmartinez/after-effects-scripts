/**
 * @name Enable Collapse Transformations
 * @version 1.1
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

    function iterateThroughLayers(comp, collapseTransformation) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            layer.locked = false;
            if (layer.canSetCollapseTransformation === true) {
                if (layerProtected(layer) === false) {
                    layer.collapseTransformation = collapseTransformation;
                }
            }
        }
    }

    function getCollapseTransformations() {
        var win = new Window("dialog", "Collapse Transformations");
        win.orientation = "row";
        var oButton = win.add("button", undefined, "Enable", {"name": "ok"});
        var cButton = win.add("button", undefined, "Disable", {"name": "cancel"});
        oButton.active = true;
        cButton.active = false;
        return (win.show() === 1);
    }

    var collapseTransformations = getCollapseTransformations();
    app.beginUndoGroup("Toggle Collapse Transformations (" + collapseTransformations + ")");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item, collapseTransformations);
        }
    }
    app.endUndoGroup();

})();
