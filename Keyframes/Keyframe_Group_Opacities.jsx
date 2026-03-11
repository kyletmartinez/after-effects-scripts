/**
 * @name Keyframe Group Opacities
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select any shape layers and run the script to add a keyframe to all group Opacity
 * properties at the Current Time Indicator.
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

(function keyframeGroupOpacity() {

    function iterateThroughProperties(propertyGroup, time) {
        var keyframed = 0;
        var numProperties = propertyGroup.numProperties;
        for (var p = numProperties; p >= 1; p--) {
            var property = propertyGroup.property(p);
            if (property.matchName === "ADBE Vector Group Opacity") {
                property.addKey(time);
                keyframed += 1;
            } else if (property.propertyType !== PropertyType.PROPERTY) {
                keyframed += iterateThroughProperties(property, time);
            }
        }
        return keyframed;
    }

    app.beginUndoGroup("Keyframe Group Opacity");
    var keyframed = 0;
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    var time = comp.time;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        keyframed += iterateThroughProperties(layer, time);
    }

    alert("Keyframed " + keyframed + " group opacities.");
    app.endUndoGroup();

})();
