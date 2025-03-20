/**
 * @name Update Turbulent Displace Expression
 * @version 1.4
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Comb throught the entire project looking for all instances of Turbulent Displace and
 * update the old expression on "Random Seed" with a new expression to avoid a visible "jump" at the
 * beginning of every composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function UpdateTurbluentDisplace() {
    var OLD_EXP = "seedRandom(index, true); time * random(0.6, 1.0)";
    var NEW_EXP = "seedRandom(index, true); (time + framesToTime(random(96))) * random(0.6, 1.0);";

    /**
     * If the "Random Seed" property has the old expression then replace it with a new one.
     * @param  {PropertyBase} effect - current effect
     */
    function checkEffect(effect) {
        var property = effect.property("ADBE Turbulent Displace-0010");
        if (property.expressionEnabled === true) {
            if (property.expression === OLD_EXP) {
                property.expression = NEW_EXP;
            }
        }
    }

    /**
     * Comb through all effects on the layer looking for the "Turbulent Displace" effect.
     * @param  {AVLayer} layer - current layer
     */
    function iterateThroughEffects(layer) {
        var effects = layer.property("ADBE Effect Parade");
        var numEffects = effects.numProperties;
        for (var e = 1; e <= numEffects; e++) {
            var effect = effects.property(e);
            if (effect.matchName === "ADBE Turbulent Displace") {
                checkEffect(effect);
            }
        }
    }

    /**
     * Comb through all layers in the composition looking for layers that can have effects.
     * @param  {CompItem} comp - current composition
     */
    function iterateThroughLayers(comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            if (layer instanceof AVLayer) {
                iterateThroughEffects(layer);
            }
        }
    }

    /**
     * Comb through all items in the project looking for compositions. Items must be an instance of
     * the "CompItem" class.
     * @param  {ProjectItem} project - current project
     */
    function iterateThroughItems(project) {
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof CompItem) {
                iterateThroughLayers(item);
            }
        }
    }

    app.beginUndoGroup("Update Turbulent Displace");
    iterateThroughItems(app.project);
    app.endUndoGroup();
})();
