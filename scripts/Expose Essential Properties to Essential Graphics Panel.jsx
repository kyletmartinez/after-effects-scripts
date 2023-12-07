/**
 * @name Expose Essential Properties to Essential Graphics Panel
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Essential Properties from a nested composition can not be directly added to the
 * Essential Graphic Panel of the parent composition. Instead, run this script to expose those
 * Essential Properties by using an intermediate expression controller. Select a layer to add all
 * properterties or select specific properties to add them. This script does not currently support
 * Dropdown Menu Control.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getExpressionControllerMatchName (essentialProperty) {
        var expressionControllerMatchName = "";
        var epValueType = essentialProperty.propertyValueType;
        var epUnitsText = essentialProperty.unitsText;
        if (epValueType === PropertyValueType.OneD && epUnitsText === "") {
            expressionControllerMatchName = "ADBE Slider Control";
        } else if (epValueType === PropertyValueType.OneD && epUnitsText === "degrees") {
            expressionControllerMatchName = "ADBE Angle Control";
        } else if (epValueType === PropertyValueType.TwoD) {
            expressionControllerMatchName = "ADBE Point Control";
        } else if (epValueType === PropertyValueType.TwoD_SPATIAL) {
            expressionControllerMatchName = "ADBE Point Control";
        } else if (epValueType === PropertyValueType.COLOR) {
            expressionControllerMatchName = "ADBE Color Control";
        } else {
            expressionControllerMatchName = false;
        }
        return expressionControllerMatchName;
    }

    app.beginUndoGroup("Expose Essential Properties to Essential Graphics Panel");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var properties = layer.essentialProperty;
    var numProperties = properties.numProperties;
    var numSelectedProperties = comp.selectedProperties.length;
    for (var p = 1; p <= numProperties; p++) {
        var oldProperty = properties.property(p);
        if (oldProperty.selected === true || numSelectedProperties === 0) {
            if (oldProperty.isDropdownEffect === false) {
                var oldPropertyMatchName = getExpressionControllerMatchName(oldProperty);
                if (oldPropertyMatchName !== false) {
                    var oldPropertyName = oldProperty.name;
                    var oldPropertyValue = oldProperty.value;
                    var effects = layer.property("ADBE Effect Parade");
                    var newProperty = effects.addProperty(oldPropertyMatchName);
                    var newPropertyName = oldPropertyName;
                    newProperty.name = newPropertyName;
                    var newSubProperty = newProperty.property(1);
                    newSubProperty.setValue(oldPropertyValue);
                    var newSubPropertyName = newSubProperty.name;
                    var exp = [
                        "effect(\"" + newPropertyName + "\")",
                        "(\"" + newSubPropertyName + "\")",
                        ".value;"].join("");
                    oldProperty.expression = exp;
                }
            }
        }
    }
    app.endUndoGroup();
})()