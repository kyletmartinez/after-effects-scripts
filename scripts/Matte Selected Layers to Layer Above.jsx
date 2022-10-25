/**
 * @title Matte Selected Layers to Layer Above
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the track matte of a layer to the layer above it using the specified track matte
 * type. Change TRACK_MATTE_TYPE to any matte type or to none.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    /**
     * TRACK MATTE TYPES
     * None                     TrackMatteType.NO_TRACK_MATTE
     * Alpha Matte              TrackMatteType.ALPHA
     * Alpha Matte Inverted     TrackMatteType.ALPHA_INVERTED
     * Luma Matte               TrackMatteType.LUMA
     * Luma Matte Inverted      TrackMatteType.LUMA_INVERTED
     */

    var TRACK_MATTE_TYPE = TrackMatteType.LUMA_INVERTED;

    app.beginUndoGroup("Matte Selected Layers to Layer Above");
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    for (var i = 0; i < numSelectedLayers; i++) {
        var selectedLayer = selectedLayers[i];
        selectedLayer.trackMatteType = TRACK_MATTE_TYPE;
    }
    app.endUndoGroup();
})();