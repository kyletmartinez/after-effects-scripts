/**
 * @name Add Markers At Selected Keyframes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a marker to each layer at the same time as the selected keyframe.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addMarkersAtSelectedKeyframes() {

    function getLayer(property) {
        while (property.parentProperty !== null) {
            property = property.parentProperty;
        }
        return property;
    }

    function addMarker(property, marker) {
        var keys = property.selectedKeys;
        if (keys.length === 1) {
            var time = property.keyTime(keys[0]);
            var layer = getLayer(property);
            layer.marker.setValueAtTime(time, marker);
        }
    }

    app.beginUndoGroup("Add Marker(s)");
    var marker = new MarkerValue("");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        addMarker(property, marker);
    }
    app.endUndoGroup();
})();
