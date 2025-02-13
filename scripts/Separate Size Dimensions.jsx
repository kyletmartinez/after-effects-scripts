/**
 * @name Separate Size Dimensions
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Separate the size dimensions for a parametric rectangle adding a slider for both
 * "X Size" and "Y Size" to the layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function separateSizeDimensions() {

    function getLayer(property) {
        while (property.propertyGroup(1)) {
            property = property.propertyGroup(1);
        }
        return property;
    }

    function addSlider(layer, name, value) {
        var slider = layer.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
        slider.name = name;
        slider.property(1).setValue(value);
    }

    function separateSize(property) {
        var currentSize = property.value;
        var layer = getLayer(property);
        addSlider(layer, "X Size", currentSize[0]);
        addSlider(layer, "Y Size", currentSize[1]);
        property.expression = [
            "var x = effect(\"X Size\")(\"Slider\").value;",
            "var y = effect(\"Y Size\")(\"Slider\").value;",
            "[x, y];"
        ].join("\n");
    }

    app.beginUndoGroup("Separate Size");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.matchName === "ADBE Vector Rect Size") {
            separateSize(property);
        }
    }
    app.endUndoGroup();
})();
