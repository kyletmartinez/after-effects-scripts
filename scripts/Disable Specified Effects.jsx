/**
 * @name Disable Specified Effects
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Disable all of the specified effects in the project. Alt + click to enable. Add
 * additional effects to be checked into the matchNames object.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var matchNames = {
        "ADBE Turbulent Displace": "Turbulent Displace"
    };

    function checkAllMatchnames (effect, enabled) {
        if (matchNames.hasOwnProperty(effect.matchName) === true) {
            effect.enabled = enabled;
        }
    }

    function checkAllEffects (layer, enabled) {
        var effects = layer.property("ADBE Effect Parade");
        if (effects !== null) {
            var numEffects = effects.numProperties;
            for (var e = 1; e <= numEffects; e++) {
                var effect = effects.property(e);
                checkAllMatchnames(effect, enabled);
            }
        }
    }

    function checkAllLayers (comp, enabled) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            checkAllEffects(layer, enabled);
        }
    }

    app.beginUndoGroup("Disable Effect(s)");
    var enabled = ScriptUI.environment.keyboardState.altKey;
    var project = app.project;
    var items = project.items;
    var numItems = items.length;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            checkAllLayers(item, enabled);
        }
    }
    app.endUndoGroup();
})();