/**
 * @name Add Value To Selected Keyframes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a provided value to all selected keyframe values. Currently supports basic
 * properties with 1, 2, or 3 dimensions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addToSelectedKeyframes() {

    function addValue(oldValue, amount) {
        return oldValue + amount;
    }

    function addValues(oldValues, amount) {
        var newValues = [];
        var numOldValues = oldValues.length;
        for (var v = 0; v < numOldValues; v++) {
            newValues.push(addValue(oldValues[v], amount));
        }
        return newValues;
    }

    function addToKeyframeValues(property, amount) {
        var propertyValueType = property.propertyValueType;
        var keys = property.selectedKeys;
        var numKeys = keys.length;
        for (var k = 0; k < numKeys; k++) {
            var index = keys[k];
            var oldKeyValue = property.keyValue(index);
            var newKeyValue = oldKeyValue;
            switch (propertyValueType) {
                case PropertyValueType.OneD:
                    newKeyValue = addValue(oldKeyValue, amount);
                    break;
                case PropertyValueType.TwoD:
                case PropertyValueType.TwoD_SPATIAL:
                case PropertyValueType.ThreeD:
                case PropertyValueType.ThreeD_SPATIAL:
                    newKeyValue = addValues(oldKeyValue, amount);
                    break;
                default:
                    break;
            }
            property.setValueAtKey(index, newKeyValue);
        }
    }

    app.beginUndoGroup("Add to Selected Keyframe(s)");
    var comp = app.project.activeItem;
    var amountString = prompt("Amount", "0");
    if (amountString !== null && amountString.length > 0) {
        var amount = parseFloat(amountString);
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.propertyType === PropertyType.PROPERTY) {
                if (property.isTimeVarying === true) {
                    addToKeyframeValues(property, amount);
                }
            }
        }
    }
    app.endUndoGroup();
})();
