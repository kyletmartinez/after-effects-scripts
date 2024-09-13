/**
 * @name Round Selected Keyframe Value(s)
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Round the values for all selected keyframes to the nearest whole number. Currently
 * works with 1 dimensional properties (Opacity, Rotation, etc.), 2 dimensional properties
 * (2D Scale, 2D Position, etc.), and 3 dimensional properties (3D Scale, 3D Position, etc.).
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function roundSelectedKeyframeValues() {
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

    function roundKeyframeValues(property) {
        var propertyValueType = property.propertyValueType;
        var keys = property.selectedKeys;
        var numKeys = keys.length;
        for (var k = 0; k < numKeys; k++) {
            var index = keys[k];
            var oldKeyValue = property.keyValue(index);
            var newKeyValue = oldKeyValue;
            switch (propertyValueType) {
                case PropertyValueType.OneD:
                    newKeyValue = roundValue(oldKeyValue);
                    break;
                case PropertyValueType.TwoD:
                case PropertyValueType.TwoD_SPATIAL:
                case PropertyValueType.ThreeD:
                case PropertyValueType.ThreeD_SPATIAL:
                    newKeyValue = roundValues(oldKeyValue);
                    break;
                default:
                    break;
            }
            property.setValueAtKey(index, newKeyValue);
        }
    }

    app.beginUndoGroup("Round Selected Keyframe Value(s)");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.isTimeVarying === true) {
                roundKeyframeValues(property);
            }
        }
    }
    app.endUndoGroup();
})();