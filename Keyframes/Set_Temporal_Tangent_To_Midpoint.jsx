/**
 * @name Set Temporal Tangent To Midpoint
 * @version 2.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the temporal ease of selected keyframes to the midpoint value between the
 * selected keyframe and an adjacent keyframe. Choose to set the "In" or "Out" ease direction.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setEaseToMidpoint() {

    function getEaseArray(multiplier, currentValue, refValue, timeDiff) {
        var easeArray = [];
        for (var d = 0; d < currentValue.length; d++) {
            var speed = multiplier * (currentValue[d] - refValue[d]) / timeDiff;
            easeArray[d] = new KeyframeEase(speed, 50);
        }
        return easeArray;
    }

    function toArray(value) {
        return (value instanceof Array) ? value : [value];
    }

    function iterateThroughKeyframes(property, easeDirection) {
        var numKeys = property.numKeys;
        var offset = easeDirection ? -1 : 1;
        var multiplier = easeDirection ? 1 : -1;

        for (var k = 1; k <= numKeys; k++) {
            if (!property.keySelected(k)) continue;
            if (offset === -1 && k === 1) continue;
            if (offset === 1 && k === numKeys) continue;

            var refKeyIndex = k + offset;
            var currentValue = toArray(property.keyValue(k));
            var refValue = toArray(property.keyValue(refKeyIndex));
            var timeDiff = Math.abs(property.keyTime(k) - property.keyTime(refKeyIndex));

            var easeArray = getEaseArray(multiplier, currentValue, refValue, timeDiff);

            if (easeDirection) {
                property.setTemporalEaseAtKey(k, easeArray, property.keyOutTemporalEase(k));
            } else {
                property.setTemporalEaseAtKey(k, property.keyInTemporalEase(k), easeArray);
            }
        }
    }

    function iterateThroughProperties(properties, easeDirection) {
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.isTimeVarying && property.numKeys > 1) {
                iterateThroughKeyframes(property, easeDirection);
            }
        }
    }

    function getEaseDirection() {
        var win = new Window("dialog", "Ease Direction");
        win.orientation = "row";
        var inButton = win.add("button", undefined, "In", {"name": "ok"});
        var outButton = win.add("button", undefined, "Out", {"name": "cancel"});
        inButton.active = true;
        return win.show() === 1;
    }

    app.beginUndoGroup("Set Ease to Midpoint");
    var easeDirection = getEaseDirection();
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    iterateThroughProperties(properties, easeDirection);
    app.endUndoGroup();

})();
