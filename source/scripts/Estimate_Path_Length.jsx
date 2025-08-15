/**
 * @name Estimate Path Length
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add two sliders to the selected layer to estimate the length of a selected path.
 * Increase the "Path Samples" slider for a more accurate length and use the "Path Length" slider
 * to reveal the path length.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function estimatePathLength() {

    function getPropertyPath(property) {
        if (!property || !property.parentProperty) {
            return "thisLayer";
        }

        var parent = property.parentProperty;
        var pathPart = "\"" + property.name + "\"";
        if (parent.propertyType === PropertyType.INDEXED_GROUP) {
            pathPart = property.propertyIndex;
        }

        return getPropertyPath(parent) + "(" + pathPart + ")";
    }

    function addExpressionControllers(comp, path) {
        var layer = comp.selectedLayers[0];

        var sampleSlider = layer.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
        sampleSlider.name = "Path Samples";
        sampleSlider.property(1).setValue(100);

        var lengthSlider = layer.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
        lengthSlider.name = "Path Length";
        lengthSlider.property(1).expression = [
            "var pathProperty = " + getPropertyExpressionString(path) + ";",
            "var samples = effect(\"Path Samples\")(1).value;",
            "var totalLength = 0;",
            "var previousPoint = pathProperty.pointOnPath(0);",
            "for (var i = 1; i <= samples; i++) {",
            "    var t = i / samples;",
            "    var currentPoint = pathProperty.pointOnPath(t);",
            "    totalLength += length(currentPoint - previousPoint);",
            "    previousPoint = currentPoint;",
            "}",
            "Math.ceil(totalLength);"
        ].join("\n");
    }

    app.beginUndoGroup("Estimate Path Length");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    var path = properties[numProperties - 1];
    if (path.matchName === "ADBE Vector Shape") {
        addExpressionControllers(comp, path);
    }
    app.endUndoGroup();

})();
