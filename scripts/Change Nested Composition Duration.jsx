/**
 * @name Change Nested Composition Duration
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the composition and all layers to the given duration. All nested precomps
 * will be affected as well (and precomps within those precomps and so on).
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function changeCompDuration(comp, duration) {
        comp.duration = duration;
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.locked = false;
            if (layer.source instanceof CompItem) {
                changeCompDuration(layer.source, duration);
            }
            layer.outPoint = comp.duration;
        }
    }

    app.beginUndoGroup("Change Nested Composition Duration");
    var newDurationString = prompt("New Duration (Seconds)", "");
    if (newDurationString !== null && newDurationString.length > 0) {
        var newDurationFloat = parseFloat(newDurationString);
        if (isNaN(newDurationFloat) === false) {
            var comp = app.project.activeItem;
            changeCompDuration(comp, newDurationFloat);
        }
    }
    app.endUndoGroup();
})();