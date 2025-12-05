/**
 * @name Keyframe Current Valuet From Expression
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a keyframe at the Current Time Indicator for each selected property effectively
 * snapshotting a post-expression value.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function keyframeCurrentValueFromExpression() {
    app.beginUndoGroup("Keyframe Current Valuet From Expression");
    var comp = app.project.activeItem;
    var currentTime = comp.time;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyValueType !== PropertyValueType.NO_VALUE) {
            if (property.canSetExpression === true && property.expression !== "") {
                var currentValue = property.valueAtTime(currentTime, false);
                property.setValueAtTime(currentTime, currentValue);
            }
        }
    }
    app.endUndoGroup();
})();
