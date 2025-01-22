/**
 * @name Copy Layer Makers To Composition
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Copy all markers from the currently selected layer to the current composition
 * including duration, comments, and labels.
 *
 * Sister script to: "Copy Composition Markers To Layer.jsx"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function copyLayerMakersToComposition() {
    app.beginUndoGroup("Copy Layer Makers To Composition");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var markers = layer.marker;
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
        comp.markerProperty.setValueAtTime(time, markerValue);
    }
    app.endUndoGroup();
})();