/**
 * @name Copy Composition Markers To Layer
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Copy all markers from the current composition to the currently selected layer
 * including duration, comments, and labels.
 *
 * Sister script to: "Copy Layer Makers to Composition.jsx"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function copyCompositionMarkersToLayer() {
    app.beginUndoGroup("Copy Composition Markers To Layer");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var markers = comp.markerProperty;
    var numMarkers = markers.numKeys;
    for (var m = 1; m <= numMarkers; m++) {
        var time = markers.keyTime(m);
        var keyValue = markers.keyValue(m);
        var duration = keyValue.duration;
        var comment = keyValue.comment;
        var label = keyValue.label;
        var markerValue = new MarkerValue(comment);
        markerValue.duration = duration;
        markerValue.label = label;
        layer.marker.setValueAtTime(time, markerValue);
    }
    app.endUndoGroup();
})();