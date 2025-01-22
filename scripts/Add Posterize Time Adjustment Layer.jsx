/**
 * @name Add Posterize Time Adjustment Layer
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add "Posterize Time" adjustment layer to the current composition. Default "Frame
 * Rate" will be half the current frame rate.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addPosterizeTimeAdjustmentLayer() {
    app.beginUndoGroup("Add Posterize Time Adjustment Layer");
    var comp = app.project.activeItem;
    var color = [0.5, 0.5, 0.5];
    var name = "Posterize Time";
    var width = comp.width;
    var height = comp.height;
    var pixelAspect = comp.pixelAspect;
    var duration = comp.duration;
    var layer = comp.layers.addSolid(color, name, width, height, pixelAspect, duration);
    layer.adjustmentLayer = true;
    var effect = layer.property("ADBE Effect Parade").addProperty("ADBE Posterize Time");
    var fps = Math.ceil(comp.frameRate) / 2;
    effect.property(1).setValue(fps);
    app.endUndoGroup();
})();