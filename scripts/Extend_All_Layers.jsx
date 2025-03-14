/**
 * @name Extend All Layers
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Extend every layer to match the composition duration in every composition in the
 * current project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function extendAllLayers() {

    function extendLayers(comp) {
        var duration = comp.duration;
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            layers[l].outPoint = duration;
        }
    }

    app.beginUndoGroup("Extend All Layers");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            extendLayers(item);
        }
    }
    app.endUndoGroup();
})();
