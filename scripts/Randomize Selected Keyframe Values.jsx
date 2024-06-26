/**
 * @name Randomize Selected Keyframe Values
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Randomize the value for selected 1 dimensional keyframes.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getRandomNumber (min, max) {
        return Math.random() * (Math.abs(max) + Math.abs(min)) - Math.abs(min);
    }

    function getNewKeyframeValue(value, range) {
        var offset = getRandomNumber(-range, range);
        return value + offset;
    }

    app.beginUndoGroup("Randomize Selected Keyframe Values");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    var range = parseFloat(prompt("Range (Units)", ""));
    if (isNaN(range) === false) {
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.propertyValueType === PropertyValueType.OneD) {
                var keys = property.selectedKeys;
                var numKeys = keys.length;
                for (var k = 0; k < numKeys; k++) {
                    var keyIndex = keys[k];
                    var keyframeValue = property.keyValue(keyIndex);
                    var newKeyframeValue = getNewKeyframeValue(keyframeValue, range);
                    property.setValueAtKey(keyIndex, newKeyframeValue);
                }
            }
        }
    }
    app.endUndoGroup();
})();