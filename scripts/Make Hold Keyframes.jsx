/**
 * @name Make Hold Keyframes
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Convert selected keyframes into hold keyframes.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function makeHoldKeyframes() {
    var HOLD = KeyframeInterpolationType.HOLD;

    function setKeyframesToHold(property) {
        var keys = property.selectedKeys;
        var numKeys = keys.length;
        for (var k = 0; k < numKeys; k++) {
            var index = keys[k];
            property.setInterpolationTypeAtKey(index, HOLD, HOLD);
        }
    }

    app.beginUndoGroup("Make Hold Keyframe(s)");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.isTimeVarying === true) {
                setKeyframesToHold(property);
            }
        }
    }
    app.endUndoGroup();
})();
