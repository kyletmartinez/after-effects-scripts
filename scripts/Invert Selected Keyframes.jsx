/**
 * @name Invert Selected Keyframes
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Invert selected keyframe values.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function invertSelectedKeyframes() {

    function iterateThroughKeyframes(property, keyframes) {
        var numKeys = keyframes.length;
        for (var k = 0; k < numKeys; k += 1) {
            var key = keyframes[k];
            var value = property.keyValue(key) * -1;
            property.setValueAtKey(key, value);
        }
    }

    function iterateThroughProperties(properties) {
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p += 1) {
            var property = properties[p];
            if (property.canVaryOverTime === true) {
                var keyframes = property.selectedKeys;
                iterateThroughKeyframes(property, keyframes);
            }
        }
    }

    app.beginUndoGroup("Invert Selected Keyframe(s)");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    iterateThroughProperties(properties);
    app.endUndoGroup();
})();