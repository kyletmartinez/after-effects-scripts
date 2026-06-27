/**
 * @name Prepare Layer Out Points For Lottie
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Ensure that any layer active on the last from of the composition it's "Out Point"
 * extended one frame past the end. This removes a bug from Lottie exports.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function prepareLayerOutPointsForLottie() {

    function iterateThroughLayers(comp) {
        var duration = comp.duration;
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            if (layer.outPoint === duration) {
                layer.outPoint += comp.frameDuration;
            }
        }
    }

    app.beginUndoGroup("Prepare Layer Out Points For Lottie");
    var items = app.project.items;
    var numItems = app.project.numItems;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item);
        }
    }
    app.endUndoGroup();
})();
