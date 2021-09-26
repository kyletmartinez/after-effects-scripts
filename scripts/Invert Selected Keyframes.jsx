/**
 * @title Invert Selected Keyframes
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Invert selected keyframe values
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function invertKeyframe (property, key) {
        var value = property.keyValue(key) * -1;
        property.setValueAtKey(key, value);
    }

    function findSelectedKeyframes (property) {
        var keys = property.selectedKeys;
        var numKeys = keys.length;
        for (var k = 0; k < numKeys; k++) {
            var key = keys[k];
            invertKeyframe(property, key);
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

    app.beginUndoGroup("Invert Selected Keyframes");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        findSelectedProperties(comp);
    }
    app.endUndoGroup();
})();