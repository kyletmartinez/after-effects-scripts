/**
 * @name Round Selected Property Values
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Round the values for all selected properties to the nearest whole number. Currently
 * supports basic properties with 1, 2, or 3 dimensions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function roundSelectedPropertyValues() {

    function roundValue(oldValue) {
        return Math.round(oldValue);
    }

    function roundValues(oldValues) {
        var newValues = [];
        var numOldValues = oldValues.length;
        for (var v = 0; v < numOldValues; v++) {
            newValues.push(roundValue(oldValues[v]));
        }
        return newValues;
    }

    function roundPropertyValues(property) {
        var propertyValueType = property.propertyValueType;
        var oldValue = property.value;
        var newValue = oldValue;
        switch (propertyValueType) {
            case PropertyValueType.OneD:
                newValue = roundValue(oldValue);
                break;
            case PropertyValueType.TwoD:
            case PropertyValueType.TwoD_SPATIAL:
            case PropertyValueType.ThreeD:
            case PropertyValueType.ThreeD_SPATIAL:
                newValue = roundValues(oldValue);
                break;
            default:
                break;
        }
        property.setValue(newValue);
    }

    app.beginUndoGroup("Round Selected Keyframe Value(s)");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.isTimeVarying === false) {
                roundPropertyValues(property);
            }
        }
    }
    app.endUndoGroup();
})();
