/**
 * @name Change Nested Composition Start Frame
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the start frame of the current composition and all nested compositions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function changeNestedCompositionStartFrame() {

    function changeCompStartFrame(comp, startFrame) {
        comp.displayStartFrame = startFrame;
        var layers = comp.layers;
        for (var l = layers.length; l > 0; l--) {
            var layer = layers[l];
            if (layer.source instanceof CompItem) {
                changeCompStartFrame(layer.source, startFrame);
            }
        }
    }

    app.beginUndoGroup("Change Nested Composition Start Frame");
    var startFrameString = prompt("New Start Frame", "1");
    if (startFrameString !== null && startFrameString.length > 0) {
        var startFrame = parseInt(startFrameString, 10);
        if (isNaN(startFrame) === false) {
            var comp = app.project.activeItem;
            changeCompStartFrame(comp, startFrame);
        }
    }
    app.endUndoGroup();
})();