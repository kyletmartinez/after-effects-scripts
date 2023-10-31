/**
 * @title Multiply Selected Keyframes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Multiply selected keyframe values by a provided value.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function multiplyKeyframe(property, key, multiplier) {
        var value = property.keyValue(key) * multiplier;
        property.setValueAtKey(key, value);
    }

    function findSelectedKeyframes(property, multiplier) {
        var keys = property.selectedKeys;
        var numKeys = keys.length;
        for (var k = 0; k < numKeys; k++) {
            var key = keys[k];
            multiplyKeyframe(property, key, multiplier);
        }
    }

    function findSelectedProperties(comp, multiplier) {
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.canVaryOverTime === true) {
                findSelectedKeyframes(property, multiplier);
            }
        }
    }

    app.beginUndoGroup("Multiply Selected Keyframes");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var multiplierString = prompt("Multiplier?", "2");
        if (multiplierString !== null && multiplierString.length > 0) {
            var multiplier = parseFloat(multiplierString);
            findSelectedProperties(comp, multiplier, multiplier);
        }
    }
    app.endUndoGroup();
})();