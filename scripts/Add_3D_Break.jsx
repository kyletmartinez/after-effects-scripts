/**
 * @name Add 3D Break
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add an adjustment layer above the currently selected layer to break the 3D space of
 * After Effects. If no layers are selected the adjustment layer will be added at the top.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addThreeDBreak() {
    app.beginUndoGroup("Add 3D Break");
    var comp = app.project.activeItem;
    var color = [0.5, 0.5, 0.5];
    var name = "=== 3D Break ===";
    var width = comp.width;
    var height = comp.height;
    var pixelAspect = comp.pixelAspect;
    var duration = comp.duration;
    var index = 1;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    if (numSelectedLayers !== 0) {
        selectedLayers.sort(function(a, b) {
            return a.index - b.index;
        });
        index = selectedLayers[0].index;
    }
    var newLayer = comp.layers.addSolid(color, name, width, height, pixelAspect, duration);
    newLayer.adjustmentLayer = true;
    if (comp.numLayers > 0) {
        newLayer.moveBefore(comp.layers[index]);
    }
    app.endUndoGroup();
})();
