/**
 * @title Make Hold Keyframes
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Convert selected keyframes into hold keyframes.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function makeHoldKeyframe (property, key) {
        var hold = KeyframeInterpolationType.HOLD;
        property.setInterpolationTypeAtKey(key, hold, hold);
    }

    function findSelectedKeyframes (property) {
        var keys = property.selectedKeys;
        var numKeys = keys.length;
        for (var k = 0; k < numKeys; k++) {
            var key = keys[k];
            makeHoldKeyframe(property, key);
        }
    }

    function findSelectedProperties (comp) {
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.canVaryOverTime === true) {
                findSelectedKeyframes(property);
            }
        }
    }

    app.beginUndoGroup("Make Hold Keyframes");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        findSelectedProperties(comp);
    }
    app.endUndoGroup();
})();