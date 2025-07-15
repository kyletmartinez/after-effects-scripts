/**
 * @name Change Nested Composition Duration With Timecode
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the duration of the current composition and all nested compositions using
 * timecode.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function changeNestedCompositionDurationWithTimecode() {

    function isValidTimecode(timecode) {
        var regex = new RegExp("^\d{2}[:;]\d{2}([:;]\d{2}([:;]\d)?)?$");
        var str = timecode.split("").reverse().join("");
        return regex.test(str);
    }

    function changeCompDuration(comp, duration) {
        comp.duration = duration;
        var layers = comp.layers;
        for (var l = layers.length; l > 0; l--) {
            var layer = layers[l];
            if (layer.source instanceof CompItem) {
                changeCompDuration(layer.source, duration);
            }
        }
    }

    app.beginUndoGroup("Change Nested Composition Duration (Timecode)");
    var comp = app.project.activeItem;
    var frameRate = comp.frameRate;
    var newDurationString = prompt("New Duration (Timecode)", "0:00:30:00");
    if (newDurationString !== null && newDurationString.length > 0) {
        if (isValidTimecode(newDurationString)) {
            var duration = currentFormatToTime(newDurationString, frameRate, true);
            changeCompDuration(comp, duration);
        }
    }
    app.endUndoGroup();
})();
