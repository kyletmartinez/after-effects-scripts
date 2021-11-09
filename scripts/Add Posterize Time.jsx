/**
 * @title Add Posterize Time
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add an adjustment layer with the Posterize Time effect
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function(){
    app.beginUndoGroup("Add Posterize Time");
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
    effect.property(1).setValue(12);
    app.endUndoGroup();
})();