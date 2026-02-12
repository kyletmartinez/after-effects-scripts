/**
 * @name Millseconds To Frames
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Easily calcuate millseconds to frames and frames to milliseconds.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function millisecondsToFrames() {

    function calculateFrames() {
        var ms = parseFloat(msInput.text) || 0;
        var fps = parseFloat(fpsInput.text) || 0;
        frameInput.text = parseFloat((ms * fps / 1000).toFixed(2));
    }

    function calculateMilliseconds() {
        var frames = parseFloat(frameInput.text) || 0;
        var fps = parseFloat(fpsInput.text) || 0;
        msInput.text = parseFloat((frames * 1000 / fps).toFixed(2));
    }

    var win = new Window("dialog", "Milliseconds to Frames");
    win.orientation = "row";

    var msGroup = win.add("group");
    msGroup.spacing = 5;

    var msInput = msGroup.add("edittext", [0, 0, 60, 24], "600");
    msInput.onChanging = calculateFrames;

    msGroup.add("statictext", undefined, "ms");

    var fpsGroup = win.add("group");
    fpsGroup.spacing = 5;

    var fpsInput = fpsGroup.add("edittext", [0, 0, 60, 24], "60");
    fpsInput.onChanging = calculateFrames;

    fpsGroup.add("statictext", undefined, "fps");

    var frameGroup = win.add("group");
    frameGroup.spacing = 5;

    var frameInput = frameGroup.add("edittext", [0, 0, 60, 24], "36");
    frameInput.onChanging = calculateMilliseconds;

    frameGroup.add("statictext", undefined, "frames");

    win.show();

})();
