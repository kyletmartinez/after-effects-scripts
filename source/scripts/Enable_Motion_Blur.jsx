/**
 * @name Enable Motion Blur
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Enabled the "Motion Blur" switch on all compositions and on all eligible layers
 * within the project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function enableMotionBlur() {

    function iterateThroughLayers(comp) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            layer.locked = false;
            if (layer.enabled === true) {
                if (layer.threeDLayer === true) {
                    layer.motionBlur = true;
                }
            }
        }
    }

    app.beginUndoGroup("Enable Motion Blur");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            item.motionBlur = true;
            iterateThroughLayers(item);
        }
    }
    app.endUndoGroup();
})();
