/**
 * @name Shift Highlight Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Highlight layers are set up in a grid using sliders for X position and Y Position to
 * automatically adjust their position. Imagine the sliders indicating which column and row the
 * highlight should appear on and using math to actually set the position values.
 *
 * It became cumbersome to adjust groups of highlights individually so this script with adjust all
 * the selected layers at one time, shifting positions horizontally and vertically based on the
 * xOffset and yOffset values.
 *
 * I set the values manually but they could use a prompt() to ask for user input as well.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function shiftHighlightLayers() {

    var xOffset = 1;
    var yOffset = 0;

    app.beginUndoGroup("Shift Highlight Layers(s)");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var i = 0; i < numLayers; i++) {
        var effects = layers[i].property("ADBE Effect Parade");

        // X OFFSET
        var xOffsetEffect = effects.property("X Offset");
        var xOffsetSlider = xOffsetEffect.property("ADBE Slider Control-0001");
        var xOldValue = xOffsetSlider.value;
        xOffsetSlider.setValue(xOldValue + xOffset);

        // Y OFFSET
        var yOffsetEffect = effects.property("Y Offset");
        var yOffsetSlider = yOffsetEffect.property("ADBE Slider Control-0001");
        var yOldValue = yOffsetSlider.value;
        yOffsetSlider.setValue(yOldValue + yOffset);
    }
    app.endUndoGroup();
})();