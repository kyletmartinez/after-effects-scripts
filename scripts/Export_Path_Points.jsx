/**
 * @name Export Path Points
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Export path points for the select path property to a text file on the desktop.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function exportPathPoints() {
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.matchName === "ADBE Vector Shape") {
            var vertices = property.value.vertices;
            var numVertices = vertices.length;
            for (var v = 0; v < numVertices; v++) {
                var vertex = vertices[v];
                var vertexX = parseFloat(vertex[0].toFixed(2));
                var vertexY = parseFloat(vertex[1].toFixed(2));
                vertices[v] = [vertexX, vertexY];
            }
            vertices.push(vertices.shift());
            var str = JSON.stringify(vertices);
            var file = new File(Folder.desktop.fsName + "/points.txt");
            file.open("w");
            file.write("var points = " + str + ";");
            file.close();
        }
    }
})();
