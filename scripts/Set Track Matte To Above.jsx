/**
 * @name Set Track Matte To Above
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the track matte for all selected layers to the layer above it.
 *
 * * "TrackMatteType.ALPHA"
 * * "TrackMatteType.ALPHA_INVERTED"
 * * "TrackMatteType.LUMA"
 * * "TrackMatteType.LUMA_INVERTED"
 * * "TrackMatteType.NO_TRACK_MATTE"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setTrackMatteToAbove() {
    app.beginUndoGroup("Set Track Matte To Above");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        layer.setTrackMatte(comp.layers[layer.index - 1], TrackMatteType.LUMA_INVERTED);
    }
    app.endUndoGroup();
})();
