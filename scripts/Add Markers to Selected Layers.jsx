/**
 * @title Add Markers to Selected Layers
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a new maker to all selected layers with an optional comment.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Add Layer Marker");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var layers = comp.selectedLayers;
        var numLayers = layers.length;
        if (numLayers > 0) {
            var comment = prompt("Marker Comment", "");
            if (comment === null) {
                comment = "";
            }
            var marker = new MarkerValue(comment);
            for (var l = 0; l < numLayers; l++) {
                var layer = layers[l];
                layer.marker.setValueAtTime(comp.time, marker);
            }
        }
    }
    app.endUndoGroup();
})();