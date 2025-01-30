/**
 * @name Posterize Layer Start Time
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Posterize the start time of all layers in a composition to be on 2s.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function posterizeLayerStartTime() {
    app.beginUndoGroup("Posterize Layer Start Time");
    var comp = app.project.activeItem;
    var frameDuration = comp.frameDuration;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var l = 1; l <= numLayers; l++) {
        var layer = layers[l];
        var oldFrame = Math.floor(layer.startTime / frameDuration);
        if (oldFrame % 2 !== 0) {
            layer.startTime = (oldFrame - 1) * frameDuration;
        }
    }
    app.endUndoGroup();
})();