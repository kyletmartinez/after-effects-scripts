/**
 * @name Toggle Difference Blend Mode
 * @version 2.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Toggle the blend mode of the selected layers to "Difference". Hold the "ALT" key to
 * toggle back to "Normal".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function toggleDifferenceBlendMode() {
    app.beginUndoGroup("Toggle Difference Blend Mode");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var blendingMode = (altKey === true) ? BlendingMode.NORMAL : BlendingMode.DIFFERENCE;
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        layers[l].blendingMode = blendingMode;
    }
    app.endUndoGroup();
})();
