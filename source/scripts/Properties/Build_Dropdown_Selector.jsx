/**
 * @name Build Dropdown Selector
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Create a new controller layer and add a "Dropdown Control". You can now toggle the
 * visibility of all layers in the current composition. This dropdown will also be added to the
 * Essential Graphics Panel for the current composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function buildDropdownSelector() {

    var expression = "(thisComp.layer(1).effect(1)(1).value === index - 1) ? 100 : 0;";

    function addExpressions(comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 2; l <= numLayers; l++) {
            layers[l].transform.opacity.expression = expression;
        }
    }

    function getPropertyParameters(comp, parameters) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 2; l <= numLayers; l++) {
            parameters.push(layers[l].name);
        }
        return parameters;
    }

    app.beginUndoGroup("Build Dropdown Selector");
    var name = prompt("Name", "Controller");
    if (name !== null && name.length > 0) {
        var comp = app.project.activeItem;
        var layer = comp.layers.addShape();
        layer.name = name;
        layer.guideLayer = true;
        var parameters = getPropertyParameters(comp, []);
        var effects = layer.property("ADBE Effect Parade");
        effects.addProperty("ADBE Dropdown Control");
        effects.property(1).property(1).setPropertyParameters(parameters);
        effects.property(1).name = name;
        addExpressions(comp);
        var property = effects.property(1).property(1);
        if (property.canAddToMotionGraphicsTemplate(comp)) {
            property.addToMotionGraphicsTemplateAs(comp, name);
        }
    }
    app.endUndoGroup();
})();
