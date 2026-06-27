/**
 * @name Replace Grid Rig Control
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Replace the selected "Grid Rig Control" null layer created by "Flex by Zack Lovatt"
 * with a shape layer. This script assumes default and un-keyframed values.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function replaceGridRigControl() {
    app.beginUndoGroup("Replace Grid Rig Control");
    var comp = app.project.activeItem;
    var oldLayer = comp.selectedLayers[0];

    var newLayer = comp.layers.addShape();
    newLayer.enabled = oldLayer.enabled;
    newLayer.guideLayer = oldLayer.guideLayer;
    newLayer.label = oldLayer.label;
    newLayer.name = oldLayer.name;

    var gSlider = newLayer.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
    gSlider.name = "Gutter";

    var rSlider = newLayer.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
    rSlider.name = "Matte Roundness";

    oldLayer.remove();
    app.endUndoGroup();
})();
