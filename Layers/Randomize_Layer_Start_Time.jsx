/**
 * @name Randomize Layer Start Time
 * @version 2.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Randomly shift the start time of all selected layers within a provided range.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function randomizeLayerStartTime() {

    function getRandomNumber(range) {
        var num = generateRandomNumber() * range;
        return (generateRandomNumber() < 0.5) ? num : num * -1;
    }

    function roundToNearestFrame(time, frameRate) {
        return Math.round(time * frameRate) / frameRate;
    }

    app.beginUndoGroup("Randomize Layer Start Time");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var range = Number(prompt("Range (Frames)", ""));
        if (isNaN(range) === false) {
            var layers = comp.selectedLayers;
            var numLayers = layers.length;
            var frameRate = comp.frameRate;
            var frameDuration = comp.frameDuration;
            for (var l = 0; l < numLayers; l++) {
                var frameOffset = getRandomNumber(range);
                var timeOffset = frameOffset * frameDuration;
                var roundedTimeOffset = roundToNearestFrame(timeOffset, frameRate);
                layers[l].startTime += roundedTimeOffset;
            }
        }
    }
    app.endUndoGroup();
})();
