/**
 * @name Remove Redundant Keyframes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Remove redundant keyframes from the selected properties. Especially helpful for
 * reducing the amount of keyframes after using the "Convert Expression to Keyframes" command.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function removeRedundantKeyframes() {

    function toArray(value) {
        return (value instanceof Array) ? value : [value];
    }

    function isEqual(valueA, valueB) {
        var arrayA = toArray(valueA);
        var arrayB = toArray(valueB);

        if (arrayA.length !== arrayB.length) return false;

        for (var i = 0; i < arrayA.length; i++) {
            var diff = Math.abs(arrayA[i] - arrayB[i]);
            if (diff > 0.0001) return false;
        }
        return true;
    }

    function removeKeys(property) {
        for (var k = property.numKeys; k > 1; k--) {
            var currentValue = property.keyValue(k);
            var previousValue = property.keyValue(k - 1);

            if (isEqual(currentValue, previousValue)) {
                property.removeKey(k);
            }
        }
    }

    app.beginUndoGroup("Remove Redundant Keyframes");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;

    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.isTimeVarying && property.numKeys > 0) {
            removeKeys(property);
        }
    }
    app.endUndoGroup();
})();
