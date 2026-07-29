/**
 * @name Add Opacity Keyframe At Current Time
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add two "HOLD" opacity keyframes to any selected Opacity properties: one at 0%
 * opacity at the beginning of the composition and one at 100% at the Current Time Indicator.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addOpacityKeyframeAtCurrentTime() {

    var HOLD = KeyframeInterpolationType.HOLD;

    function setKeyframesToHold(property) {
        var numKeys = property.numKeys;
        for (var k = 1; k <= numKeys; k++) {
            property.setInterpolationTypeAtKey(k, HOLD, HOLD);
            property.setSelectedAtKey(k, false);
        }
    }

    app.beginUndoGroup("Add Opacity Keyframe At Current Time");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.matchName === "ADBE Opacity") {
            property.setValuesAtTimes([0, comp.time], [0, 100])
            setKeyframesToHold(property);
        }
    }
    app.endUndoGroup();

})();