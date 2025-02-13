/**
 * @name Add Additional AnimationC ontrol
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add an additional animation controller to the layer for the selected property.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addAdditionalAnimationControl() {

    function getLayer(property) {
        while (property.parentProperty !== null) {
            property = property.parentProperty;
        }
        return property;
    }

    function addController(layer, unitsText) {
        var property = (unitsText === "") ? "ADBE Slider Control" : "ADBE Angle Control";
        return layer.property("ADBE Effect Parade").addProperty(property);
    }

    function addAnimationController(property) {
        var layer = getLayer(property);
        var controller = addController(layer, property.unitsText);
        controller.name = "Additional " + property.name;
        var expression = [
            "value + effect(\"",
            controller.name,
            "\")(\"",
            controller.property(1).name,
            "\").value;"
        ].join("");
        property.expression = expression;
    }

    app.beginUndoGroup("Add Additional Animation Control");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.propertyValueType === PropertyValueType.OneD) {
                addAnimationController(property);
            }
        }
    }
    app.endUndoGroup();
})();
