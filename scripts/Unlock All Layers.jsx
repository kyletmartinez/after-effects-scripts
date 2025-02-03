/**
 * @name Unlock All Layers
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Unlock all layers in all conmpositions in the current project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function unlockAllLayers() {

    function unlockAllCompositionLayers(comp) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            layer.locked = false;
            layer.selected = false;
        }
    }

    app.beginUndoGroup("Unlock All Layer(s)");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            unlockAllCompositionLayers(item);
        }
    }
    app.endUndoGroup();
})();
