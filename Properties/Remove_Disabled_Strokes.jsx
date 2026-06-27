/**
 * @name Remove Disabled Strokes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select any shape layers and run the script to remove all disabled Stroke properties.
 *
 * When converting a typing animation from "Text Animator" to "Shape layer" for Lottie my workflow
 * typically uses:
 * 1. "Layers/Create_Shapes_From_Text.jsx"
 * 2. "Properties/Remove_Disabled_Strokes.jsx"
 * 3. "Keyframes/Keyframe_Group_Opacities.jsx"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function removeDisabledStrokes() {

    function iterateThroughProperties(propertyGroup) {
        var removed = 0;
        var numProperties = propertyGroup.numProperties;
        for (var p = numProperties; p >= 1; p--) {
            var property = propertyGroup.property(p);
            if (property.matchName === "ADBE Vector Graphic - Stroke") {
                if (property.enabled === false) {
                    property.remove();
                    removed += 1;
                }
            } else if (property.propertyType !== PropertyType.PROPERTY) {
                removed += iterateThroughProperties(property);
            }
        }
        return removed;
    }

    app.beginUndoGroup("Remove Disabled Strokes");
    var removed = 0;
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        removed += iterateThroughProperties(layer);
    }

    alert("Removed " + removed + " disabled stroke properties.");
    app.endUndoGroup();

})();
