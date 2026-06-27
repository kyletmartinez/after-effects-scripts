/**
 * @name Flip Path
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Flip a "Shape" or "Mask" path either "Horizontally" or "Vertically". Supports both
 * static paths and keyframed paths.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function flipPath() {

    function flipShape(oldShape, center, scale) {
        var oldVertices = oldShape.vertices;
        var oldInTangents = oldShape.inTangents;
        var oldOutTangents = oldShape.outTangents;

        var newVertices = [];
        var newInTangents = [];
        var newOutTangents = [];

        var numVertices = oldVertices.length;
        for (var v = 0; v < numVertices; v++) {
            newVertices.push([
                center[0] + (oldVertices[v][0] - center[0]) * scale[0],
                center[1] + (oldVertices[v][1] - center[1]) * scale[1]
            ]);

            newInTangents.push([
                oldInTangents[v][0] * scale[0],
                oldInTangents[v][1] * scale[1]
            ]);

            newOutTangents.push([
                oldOutTangents[v][0] * scale[0],
                oldOutTangents[v][1] * scale[1]
            ]);
        }

        var newShape = new Shape();
        newShape.vertices = newVertices;
        newShape.inTangents = newInTangents;
        newShape.outTangents = newOutTangents;
        newShape.closed = oldShape.closed;

        return newShape;
    }

    function getBoundingBoxCenter(shape) {
        var vertices = shape.vertices;
        var numVertices = vertices.length;
        var minX = vertices[0][0], maxX = vertices[0][0];
        var minY = vertices[0][1], maxY = vertices[0][1];
        for (var v = 1; v < numVertices; v++) {
            minX = (vertices[v][0] < minX) ? vertices[v][0] : minX;
            maxX = (vertices[v][0] > maxX) ? vertices[v][0] : maxX;
            minY = (vertices[v][1] < minY) ? vertices[v][1] : minY;
            maxY = (vertices[v][1] > maxY) ? vertices[v][1] : maxY;
        }
        return [(minX + maxX) / 2, (minY + maxY) / 2];
    }

    function processPathProperty(property, scale) {
        if (property.expressionEnabled === false) {
            if (property.numKeys > 0) {
                var numKeys = property.numKeys;
                for (var k = 1; k <= numKeys; k++) {
                    var time = property.keyTime(k);
                    var shape = property.keyValue(k);
                    var center = getBoundingBoxCenter(shape);
                    property.setValueAtTime(time, flipShape(shape, center, scale));
                }

            } else {
                var shape = property.value;
                var center = getBoundingBoxCenter(shape);
                property.setValue(flipShape(shape, center, scale));
            }
        }
    }

    function isPathProperty(property) {
        return (property.matchName === "ADBE Vector Shape" ||
                property.matchName === "ADBE Mask Shape");
    }

    function getFlipDirection() {
        var direction = null;
        var win = new Window("dialog", "Flip Path");
        win.orientation = "row";

        var hButton = win.add("button", undefined, "Horizontally");
        var vButton = win.add("button", undefined, "Vertically");

        hButton.onClick = function() {
            direction = {
                "scale": [-1, 1],
                "label": hButton.text
            };
            win.close(1);
        };

        vButton.onClick = function() {
            direction = {
                "scale": [1, -1],
                "label": vButton.text
            };
            win.close(1);
        };

        return (win.show() === 1) ? direction : null;
    }

    var direction = getFlipDirection();
    if (direction === null) return;

    app.beginUndoGroup("Flip Path " + direction.label);
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (isPathProperty(property) === true) {
            processPathProperty(property, direction.scale);
        }
    }
    app.endUndoGroup();

})();
