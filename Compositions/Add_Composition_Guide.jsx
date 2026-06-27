/**
 * @name Add Composition Guide
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a 16x9 fuscia rectangle shape layer to act as a guide. Helpful with things like
 * precomposed character rigs.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addCompositionGuide() {
    app.beginUndoGroup("Add Composition Guide");
    var comp = app.project.activeItem;
    var layer = comp.layers.addShape();
    layer.name = "Composition Guide";
    layer.guideLayer = true;
    var group = layer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var shape = group.property("ADBE Vectors Group");
    var rectangle = shape.addProperty("ADBE Vector Shape - Rect");
    var width = comp.width - 20;
    var height = comp.width * (9 / 16);
    rectangle.property("ADBE Vector Rect Size").setValue([width, height]);
    var stroke = shape.addProperty("ADBE Vector Graphic - Stroke");
    stroke.property("ADBE Vector Stroke Color").setValue([1, 0, 1, 1]);
    stroke.property("ADBE Vector Stroke Width").setValue(20);
    app.endUndoGroup();
})();
