/**
 * @name Change Nested Composition Frame Rate
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the composition and all layers to the given frame rate. All nested precomps
 * will be affected as well (and precomps within those precomps and so on).
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function changeCompFrameRate(comp, frameRate) {
        comp.frameRate = frameRate;
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.locked = false;
            if (layer.source instanceof CompItem) {
                changeCompFrameRate(layer.source, frameRate);
            } 
        }
    }

    app.beginUndoGroup("Change Nested Composition Frame Rate");
    var newFrameRateString = prompt("New Frame Rate (Frames)", "");
    if (newFrameRateString !== null && newFrameRateString.length > 0) {
        var frameRateInt = parseFloat(newFrameRateString);
        if (isNaN(frameRateInt) === false) {
            var comp = app.project.activeItem;
            changeCompFrameRate(comp, frameRateInt);
        }
    }
    app.endUndoGroup();
})();