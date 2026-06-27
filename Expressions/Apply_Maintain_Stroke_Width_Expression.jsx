/**
 * @name Apply Maintain Stroke Width Expression
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Search through all layers in the current composition, find all Stroke Width
 * properties, and apply an expression to maintain the stroke width visually despite any scale.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function applyMaintainStrokeWidthExpression() {

    var expression = "s = length(toComp([0,0]),toComp([0.7071,0.7071])); (s) ? value / s : 0;";

    function iterateThroughProperties(propertyGroup) {
        var numProperties = propertyGroup.numProperties;
        for (var p = 1; p <= numProperties; p++) {
            var property = propertyGroup.property(p);
            if (property.propertyType === PropertyType.PROPERTY) {
                if (property.matchName === "ADBE Vector Stroke Width") {
                    property.expression = expression;
                }
            }
            if (property.propertyType === PropertyType.INDEXED_GROUP ||
                property.propertyType === PropertyType.NAMED_GROUP) {
                iterateThroughProperties(property);
            }
        }
    }

    function iterateThroughLayers(comp) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughProperties(layer);
        }
    }

    app.beginUndoGroup("Apply Maintain Stroke Width Expression");
    var comp = app.project.activeItem;
    iterateThroughLayers(comp);
    app.endUndoGroup();
})();
