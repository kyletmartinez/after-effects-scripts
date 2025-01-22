/**
 * @name Change Nested Composition Duration
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the duration of the current composition and all nested compositions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function changeNestedCompositionDuration() {

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

    app.beginUndoGroup("Change Nested Composition Duration");
    var newDurationString = prompt("New Duration (Seconds)", "30");
    if (newDurationString !== null && newDurationString.length > 0) {
        var duration = parseFloat(newDurationString);
        if (isNaN(duration) === false) {
            var comp = app.project.activeItem;
            changeCompDuration(comp, duration);
        }
    }
    app.endUndoGroup();
})();