/**
 * @name Unlock All Layers
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Unlock all layers in all conmpositions in the current project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function unlockAllLayers() {

    function unlockAllCompositionLayers(comp) {
        var layers = comp.layers;
        for (var i = comp.numLayers; i > 0; i--) {
            var layer = layers[i];
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