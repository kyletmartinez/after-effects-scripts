/**
 * @name Add Composition Guides
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a 16x9 fuscia rectangle shape layer with guide layer enable to serve as a guide
 * for compositions with larger or smaller dimensions. Helpful with precomposed character rigs.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Add Composition Guides");
    var comp = app.project.activeItem;
    var layer = comp.layers.addShape();
    layer.name = "Composition Guide";
    layer.guideLayer = true;
    var group = layer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var shape = group.property("ADBE Vectors Group");
    var rect = shape.addProperty("ADBE Vector Shape - Rect");
    var width = comp.width - 20;
    var height = comp.width * (9 / 16);
    rect.property("ADBE Vector Rect Size").setValue([width,height]);
    var stroke = shape.addProperty("ADBE Vector Graphic - Stroke");
    stroke.property("ADBE Vector Stroke Color").setValue([1,0,1,1]);
    stroke.property("ADBE Vector Stroke Width").setValue(20);
    app.endUndoGroup();
})();