/**
 * @name Posterize Start Time
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Posterize the start time of all layers in a composition to be on 2s.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Posterize Start Point");
    var comp = app.project.activeItem;
    var frameDuration = comp.frameDuration;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var l = 1; l <= numLayers; l++) {
        var layer = layers[l];
        var oldTime = layer.startTime;
        var oldFrame = Math.floor(oldTime / frameDuration);
        if (oldFrame % 2 != 0) {
            writeLn(oldFrame + " (" + layer.index + ") is ODD. Adjusting...");
            var newFrame = oldFrame - 1;
            var newTime = newFrame * frameDuration;
            layer.startTime = newTime;
        } else {
            writeLn(oldFrame + " (" + layer.index + ") is EVEN. Skipping...");
        }
    }
    app.endUndoGroup();
})()
