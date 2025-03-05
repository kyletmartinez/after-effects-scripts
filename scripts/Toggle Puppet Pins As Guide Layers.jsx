/**
 * @name Toggle Puppet Pins As Guide Layers
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set all DuIK Pin layers to visible. Hold the "ALT" key to set to guide layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function togglePuppetPinsAsGuideLayers() {

    function iterateThroughEffects(layer, guideLayer) {
        var effects = layer.property("ADBE Effect Parade");
        if (effects !== null) {
            var numEffects = effects.numProperties;
            if (numEffects !== 0) {
                for (var e = 1; e <= numEffects; e++) {
                    var effect = effects.property(e);
                    if (effect.matchName === "Pseudo/Duik pin02") {
                        layer.guideLayer = guideLayer;
                    }
                }
            }
        }
    }

    function iterateThroughLayers(comp, guideLayer) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughEffects(layer, guideLayer);
        }
    }

    app.beginUndoGroup("Toggle Puppet Pins As Guide Layers");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var guideLayer = (altKey === true);
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item, guideLayer);
        }
    }
    app.endUndoGroup();
})();
