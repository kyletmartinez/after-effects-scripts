/**
 * @name Rename Source To Layer Name
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the selected item to match the name of the layer it is used for.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameSourceToLayerName() {

    function getLayer(comp, source) {
        var layers = comp.layers;
        for (var l = layers.length; l > 0; l--) {
            var layer = layers[l];
            if (layer.source === source) {
                return layer;
            }
        }
    }

    app.beginUndoGroup("Rename Source To Layer Name");
    var item = app.project.selection[0];
    var layer = getLayer(item.usedIn[0], item);
    item.name = layer.name;
    app.endUndoGroup();
})();
