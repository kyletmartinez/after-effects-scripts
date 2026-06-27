/**
 * @name Toggle Puppet On Transparent
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Toggle the "On Transparent" checkbox for every instance of the "Puppet" effect in
 * the current project. This eliminates situations where the "Expansion" didn't quite grab every
 * pixel for the underlying layer and leaves an extra little snippet.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function togglePuppetOnTransparent() {

    function toggleCheckBox(effect, checked) {
        effect.property("ADBE FreePin3 On Transparent").setValue(checked);
    }

    function iterateThroughEffects(layer, checked) {
        var effects = layer.property("ADBE Effect Parade");
        var numEffects = effects.numProperties;
        if (numEffects !== 0) {
            for (var e = 1; e <= numEffects; e++) {
                var effect = effects.property(e);
                if (effect.matchName === "ADBE FreePin3") {
                    toggleCheckBox(effect, checked);
                }
            }
        }
    }

    function iterateThroughLayers(comp, checked) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughEffects(layer, checked);
        }
    }

    app.beginUndoGroup("Toggle On Transparent");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var checked = (altKey === false);
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item, checked);
        }
    }
    app.endUndoGroup();
})();
