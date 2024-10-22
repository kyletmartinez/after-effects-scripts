/**
 * @name Find Specific Effect
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Find all instances of a specific effect in the current project and alert the layer
 * which the effect is applied. Searching is done via matchName for better specificity.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function findSpecificEffect() {

    var EFFECT_MATCH_NAME = "ADBE Gaussian Blur 2";

    function getEffects(layer) {
        var effects = layer.property("ADBE Effect Parade");
        var numEffects = effects.numProperties;
        for (var e = 1; e <= numEffects; e++) {
            var effect = effects.property(e);
            if (effect.matchName === EFFECT_MATCH_NAME) {
                alert(layer.name + ": " + effect.matchName);
            }
        }
    }

    function getAVlayers(composition) {
        var layers = composition.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            if (layer instanceof AVLayer) {
                getEffects(layer);
            }
            if (layer instanceof ShapeLayer) {
                getEffects(layer);
            }
            if (layer instanceof TextLayer) {
                getEffects(layer);
            }
        }
    }

    function getCompositionItems(project) {
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof CompItem) {
                getAVlayers(item);
            }
        }
    }

    getCompositionItems(app.project);
})();