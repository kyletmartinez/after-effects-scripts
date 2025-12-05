/**
 * @name Connect Layers With A Line
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Connect two layers with a Shape Layer stroked line.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function connectTwoLayersWithALine() {

    function getLayerExpression(name) {
        var layer = "thisComp.layer(\"" + name + "\")";
        return layer + ".toComp(" + layer + ".transform.anchorPoint)";
    }

    app.beginUndoGroup("Connect Layers With A Line");

    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;

    var name1 = selectedLayers[0].name;
    var name2 = selectedLayers[1].name;

    var shapeLayer = comp.layers.addShape();
    shapeLayer.moveToEnd();
    shapeLayer.transform.position.setValue([0, 0]);

    var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group");
    var groupContents = shapeGroup.property("Contents");

    var stroke = groupContents.addProperty("ADBE Vector Graphic - Stroke");
    stroke.property("ADBE Vector Stroke Color").setValue([1, 1, 1]);
    stroke.property("ADBE Vector Stroke Width").setValue(3);

    /* eslint-disable */
    var path = shapeLayer.property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Shape - Group").property("ADBE Vector Shape");
    /* eslint-enable */

    var expression = [
        "var vertices = [",
        "    " + getLayerExpression(name1) + ",",
        "    " + getLayerExpression(name2),
        "];",
        "createPath(vertices, [], [], false);"
    ].join("\n");

    path.expression = expression;

    shapeLayer.selected = false;
    shapeLayer.locked = true;

    shapeLayer.transform.position.expression = "posterizeTime(0); [0, 0];";

    app.endUndoGroup();
})();
