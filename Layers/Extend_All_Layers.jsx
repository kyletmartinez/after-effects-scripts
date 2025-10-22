/**
 * @name Extend All Layers
 * @version 1.2
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

    function extendLayers(comp, duration) {
        var layers = comp.layers;
        for (var l = layers.length; l > 0; l--) {
            var layer = layers[l];
            layer.locked = false;
            layer.outPoint = duration;
            if (layer.source instanceof CompItem) {
                extendLayers(layer.source, duration);
            }
        }
    }

    app.beginUndoGroup("Extend All Layers");
    var newDurationString = prompt("New Duration (Seconds)", "30");
    if (newDurationString !== null && newDurationString.length > 0) {
        var duration = parseFloat(newDurationString);
        if (isNaN(duration) === false) {
            var comp = app.project.activeItem;
            extendLayers(comp, duration);
        }
    }
    app.endUndoGroup();
})();
