/**
 * @name Toggle Specific Effects
 * @version 2.5
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Disable all specified effects in the current project. Hold the "ALT" key to enable.
 * Add additional effects to be checked to the "MatchNames" object.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function toggleSpecificEffects() {

    var MatchNames = {"ADBE Turbulent Displace": "Turbulent Displace"};

    function checkMatchName(effect, enabled) {
        if (MatchNames.hasOwnProperty(effect.matchName)) {
            effect.enabled = enabled;
        }
    }

    function iterateThroughEffects(layer, enabled) {
        var effects = layer.property("ADBE Effect Parade");
        if (effects !== null) {
            for (var e = effects.numProperties; e > 0; e--) {
                var effect = effects.property(e);
                checkMatchName(effect, enabled);
            }
        }
    }

    function iterateThroughLayers(comp, enabled) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughEffects(layer, enabled);
        }
    }

    app.beginUndoGroup("Toggle Effects");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var enabled = (altKey === true);
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item, enabled);
        }
    }
    app.endUndoGroup();
})();
