/**
 * @name Set Selected Layer Track Matte To Layer Above It
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the track matte for all selected layers to the layer above it. Currently uses
 * a Luma Inverted track matte type.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Set Selected Layer Track Matte To Layer Above It");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    for (var l = 0; l < numSelectedLayers; l++) {
        var layer = selectedLayers[l];
        layer.setTrackMatte(layers[layer.index - 1], TrackMatteType.LUMA_INVERTED);
    }
    app.endUndoGroup();
})();