/**
 * @name Add Background Layer
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a background layer to the current composition that will stay centered and match
 * the "width" and "height" of the current composition no matter if it is resized or copy and pasted
 * to a new composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addBackgroundLayer() {
    app.beginUndoGroup("Add Background Layer");
    var comp = app.project.activeItem;

    var layer = comp.layers.addShape();
    layer.name = "Background";

    var position = layer.property("ADBE Transform Group").property("ADBE Position");
    position.expression = "posterizeTime(0); [thisComp.width / 2, thisComp.height / 2];";

    var group = layer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rectangle = group.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");

    var size = rectangle.property("ADBE Vector Rect Size");
    size.setValue([comp.width, comp.height]);
    size.expression = "posterizeTime(0); [thisComp.width, thisComp.height];";

    var fill = group.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fill.property("ADBE Vector Fill Color").setValue([0.5, 0.5, 0.5]);
    app.endUndoGroup();
})();
