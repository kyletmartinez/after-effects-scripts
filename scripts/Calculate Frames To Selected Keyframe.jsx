/**
 * @name Calculate Frames To Selected Keyframe
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Calculate and alert the amount of time, in frames instead of seconds, between the
 * currently selected keyframe and the Current Time Indicator.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function calculateFramestoSelectedKeyframe() {

    function calculateTimeDifference(comp, property, keyframe) {
        var time = Math.abs(comp.time - property.keyTime(keyframe));
        var frames = Math.floor(time * comp.frameRate);
        var suffix = (frames === 1) ? "frame" : "frames";
        alert(frames + " " + suffix);
    }

    function iterateThroughProperties(comp, properties) {
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.propertyType === PropertyType.PROPERTY) {
                var keyframe = property.selectedKeys[0];
                calculateTimeDifference(comp, property, keyframe);
            }
        }
    }

    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    iterateThroughProperties(comp, properties);
})();