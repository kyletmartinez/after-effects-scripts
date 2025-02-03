/**
 * @name Set Simple Time Remap Loop
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Automatically enable Time Remapping, set the appropriate keyframes, and apply the
 * "loopOut()" expression to correctly loop a layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setSimpleTimeRemapLoop() {
    app.beginUndoGroup("Set Simple Time Remap Loop");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    layer.timeRemapEnabled = true;
    layer.outPoint = comp.duration;
    var timeRemapping = layer.property("ADBE Time Remapping");
    var numKeys = timeRemapping.numKeys;
    var firstKeyTime = timeRemapping.keyTime(1);
    var lastKeyTime = timeRemapping.keyTime(numKeys);
    var firstKeyValue = timeRemapping.valueAtTime(firstKeyTime, false);
    timeRemapping.addKey(lastKeyTime - comp.frameDuration);
    timeRemapping.setValueAtTime(lastKeyTime, firstKeyValue);
    timeRemapping.expression = "loopOut(\"cycle\");";
    app.endUndoGroup();
})();
