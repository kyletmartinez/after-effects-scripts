/**
 * @name Increase All Pin Sizes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Increase the scale of all DuIK Pin layers in the current project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function increaseAllPinSizes() {

    function fixPin(effect, size) {
        effect.property(2).setValue(size);
    }

    function iterateThroughEffects(layer, size) {
        var effects = layer.property("ADBE Effect Parade");
        var numEffects = effects.numProperties;
        if (numEffects !== 0) {
            for (var e = 1; e <= numEffects; e++) {
                var effect = effects.property(e);
                if (effect.matchName === "Pseudo/Duik pin02") {
                    fixPin(effect, size);
                }
            }
        }
    }

    function iterateThroughLayers(comp, size) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughEffects(layer, size);
        }
    }

    app.beginUndoGroup("Increase Pin Size");
    var newSizeString = prompt("Size (Percent)", "100");
    if (newSizeString !== null && newSizeString.length > 0) {
        var size = parseInt(newSizeString, 10);
        if (isNaN(size) === false) {
            var project = app.project;
            var items = project.items;
            for (var i = project.numItems; i > 0; i--) {
                var item = items[i];
                if (item instanceof CompItem) {
                    iterateThroughLayers(item, size);
                }
            }
        }
    }
    app.endUndoGroup();
})();
