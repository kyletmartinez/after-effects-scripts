/**
 * @name Add Markers to Selected Layers
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a marker to all selected layers with an optional comment.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addMarkersToSelectedLayers() {
    app.beginUndoGroup("Add Markers to Selected Layer(s)");
    var comment = prompt("Marker Comment (Optional)", "") || "";
    var marker = new MarkerValue(comment);
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        layers[l].marker.setValueAtTime(comp.time, marker);
    }
    app.endUndoGroup();
})();
