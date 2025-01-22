/**
 * @name Change Nested Composition Frame Rate
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the frame rate of the current composition and all nested compositions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function changeNestedCompositionFrameRate() {

    function changeCompFrameRate(comp, frameRate) {
        comp.frameRate = frameRate;
        var layers = comp.layers;
        for (var l = layers.length; l > 0; l--) {
            var layer = layers[l];
            if (layer.source instanceof CompItem) {
                changeCompFrameRate(layer.source, frameRate);
            } 
        }
    }

    app.beginUndoGroup("Change Nested Composition Frame Rate");
    var frameRateString = prompt("New Frame Rate", "24");
    if (frameRateString !== null && frameRateString.length > 0) {
        var frameRate = parseFloat(frameRateString);
        if (isNaN(frameRate) === false) {
            var comp = app.project.activeItem;
            changeCompFrameRate(comp, frameRate);
        }
    }
    app.endUndoGroup();
})();