/**
 * @name Change Nested Composition Resolution
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the composition resolution factor. All nested precomps
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
    function changeCompResolution(comp, resolution) {
        comp.resolutionFactor = [resolution, resolution];
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            if (layer.source instanceof CompItem) {
                changeCompResolution(layer.source, resolution);
            }
        }
    }

    app.beginUndoGroup("Change Nested Composition Resolution");
    var newResolutionString = prompt("New Resolution (1, 2, 3, or 4)", "");
    if (newResolutionString !== null && newResolutionString.length > 0) {
        var newResolutionInt = parseInt(newResolutionString);
        if (isNaN(newResolutionInt) === false) {
            var comp = app.project.activeItem;
            changeCompResolution(comp, newResolutionInt);
        }
    }
    app.endUndoGroup();
})()