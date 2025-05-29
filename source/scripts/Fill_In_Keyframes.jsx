/**
 * @name Fill In Keyframes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Convert a property to keyframes and remove any redundant keyframes.
 *
 * > [!WARNING]
 * > While you can select multiple properties, running the "Convert Expression To Keyframes" as it
 * > is setup now only works on the first viable property. Assume one property at a time for now.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function fillInKeyframes() {

    function toArray(value) {
        return (value instanceof Array) ? value : [value];
    }

    function isEqual(valueA, valueB) {
        var arrayA = toArray(valueA);
        var arrayB = toArray(valueB);
        var arrayLength = arrayA.length;
        for (var i = 0; i < arrayLength; i++) {
            if (arrayA[i] !== arrayB[i]) {
                return false;
            }
        }
        return true;
    }

    function filterAllKeyframes(property) {
        var linear = KeyframeInterpolationType.LINEAR;
        var numKeys = property.numKeys - 1;
        for (var i = numKeys; i > 1; i--) {
            var bValue = property.keyValue(i - 1);
            var cValue = property.keyValue(i);
            var aValue = property.keyValue(i + 1);
            if (isEqual(bValue, cValue) && isEqual(cValue, aValue)) {
                property.removeKey(i);
            } else {
                property.setInterpolationTypeAtKey(i, linear, linear);
            }
        }
        property.setInterpolationTypeAtKey(1, linear, linear);
        property.setInterpolationTypeAtKey(property.numKeys, linear, linear);
    }

    app.beginUndoGroup("Fill In Keyframes");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.canVaryOverTime === true) {
                if (property.isTimeVarying === true) {
                    property.expression = "value;";
                    app.executeCommand(2639);
                    property.expression = "";
                    filterAllKeyframes(property);
                }
            }
        }
    }
    app.endUndoGroup();
})();
