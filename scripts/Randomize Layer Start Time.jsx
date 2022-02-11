/**
 * @title Randomize Layer Start Time
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Randomly shift the start time of all selected layers within a provided range.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getRandomNumber (min, max) {
        return Math.random() * (Math.abs(max) + Math.abs(min)) - Math.abs(min);
    }

    function roundToNearestFrame (num, fps) {
        return Math.round(num * fps) / fps;
    }

    app.beginUndoGroup("Randomize Layer Start Time");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var range = parseInt(prompt("Range (Frames)", ""));
        if (isNaN(range) === false) {
            var layers = comp.selectedLayers;
            var numLayers = layers.length;
            var frameRate = comp.frameRate;
            var frameDuration = comp.frameDuration;
            for (var l = 0; l < numLayers; l++) {
                var frameOffset = getRandomNumber(-range, range);
                var timeOffset = frameOffset * frameDuration;
                var roundedTimeOffset = roundToNearestFrame(timeOffset, frameRate);
                var layer = layers[l];
                layer.startTime += roundedTimeOffset;
            }
        }
    }
    app.endUndoGroup();
})();
