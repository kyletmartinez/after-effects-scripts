/**
 * @name Fix Turbulent Displace
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Iterate recursively through all precomps and all layers to change the Size property
 * of all Turbulent Displace effects.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var totalChanged = 0;

    function fixTurbulentDisplace (effect) {
        effect.property("Size").setValue(150);
        totalChanged++;
    }

    function iterateThroughEffects (layer) {
        var effects = layer.property("ADBE Effect Parade");
        var numEffects = effects.numProperties;
        if (numEffects !== 0) {
            for (var e = 1; e <= numEffects; e++) {
                var effect = effects.property(e);
                if (effect.matchName === "ADBE Turbulent Displace") {
                    fixTurbulentDisplace(effect);
                }
            }
        }
    }

    function iterateThroughLayers (comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = comp.layers[l];
            if (layer.source instanceof CompItem) {
                iterateThroughLayers(layer.source);
            } else {
                iterateThroughEffects(layer);
            }
        }
    }

    app.beginUndoGroup("Fix Turbulent Displace");
    var comp = app.project.activeItem;
    iterateThroughLayers(comp);
    alert("Total Changed:\n" + totalChanged);
    app.endUndoGroup();
})();