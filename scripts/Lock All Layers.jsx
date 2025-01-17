/**
 * @name Lock All Layers
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Lock all layers in all conmpositions in the current project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function lockAllLayers() {

    function lockAllCompositionLayers(comp) {
        var layers = comp.layers;
        for (var i = comp.numLayers; i > 0; i--) {
            var layer = layers[i];
            layer.selected = false;
            layer.locked = true;
        }
    }

    app.beginUndoGroup("Lock All Layer(s)");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            lockAllCompositionLayers(item);
        }
    }
    app.endUndoGroup();
})();