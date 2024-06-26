/**
 * @name Toggle Difference Blend Mode
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Toggle the blend mode of the selected layers between Normal and Difference. Hold the
 * ALT key to force all selected layers to Normal blend mode. Hold the SHIFT key to force all
 * selected layers to Difference blend mode.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Toggle Blend Mode");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var shiftKey = ScriptUI.environment.keyboardState.shiftKey;
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    for (var l = 0; l < numSelectedLayers; l++) {
        var currentLayer = selectedLayers[l];
        var currentBlendMode = currentLayer.blendingMode;
        if (altKey === true && shiftKey === false) {
            currentLayer.blendingMode = BlendingMode.NORMAL;
        } else if (altKey === false && shiftKey === true) {
            currentLayer.blendingMode = BlendingMode.DIFFERENCE;
        } else {
            if (currentBlendMode === BlendingMode.NORMAL) {
                currentLayer.blendingMode = BlendingMode.DIFFERENCE;
            } else if (currentBlendMode === BlendingMode.DIFFERENCE) {
                currentLayer.blendingMode = BlendingMode.NORMAL;
            }
        }
    }
    app.endUndoGroup();
})();