/**
 * @name Find Specific Effect
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Find all instances of a specific efffect in the current project. Add additional
 * effects to be checked to the "MatchNames" object.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function findSpecificEffects() {

    var MatchNames = {
        "ADBE Gaussian Blur 2": "Gaussian Blur"
    };

    function checkMatchName(layer, effect) {
        if (MatchNames.hasOwnProperty(effect.matchName)) {
            alert(layer.name + ": " + effect.matchName);
        }
    }

    function iterateThroughEffects(layer) {
        var effects = layer.property("ADBE Effect Parade");
        if (effects !== null) {
            for (var e = effects.numProperties; e > 0; e--) {
                var effect = effects.property(e);
                checkMatchName(layer, effect);
            }
        }
    }

    function iterateThroughLayers(comp) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughEffects(layer);
        }
    }

    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item);
        }
    }
})();
