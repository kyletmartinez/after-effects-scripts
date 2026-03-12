/**
 * @name Enable Motion Blur
 * @version 1.1
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

    function enableLayerMotionBlur(comp, motionBlur) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.motionBlur = motionBlur;
        }
    }

    function enableCompositionLayerBlur(project, motionBlur) {
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof CompItem) {
                item.motionBlur = motionBlur;
                enableLayerMotionBlur(item, motionBlur);
            }
        }
    }

    function getMotionBlur() {
        var win = new Window("dialog", "Enable Motion Blur");
        win.orientation = "row";
        var oButton = win.add("button", undefined, "Enable", {"name": "ok"});
        var cButton = win.add("button", undefined, "Disable", {"name": "cancel"});
        oButton.active = true;
        cButton.active = false;
        return (win.show() === 1);
    }

    var motionBlur = getMotionBlur();
    var undoGroup = (motionBlur) ? "Enable All Motion Blur" : "Disable All Motion Blur";
    app.beginUndoGroup(undoGroup);
    enableCompositionLayerBlur(app.project, motionBlur);
    app.endUndoGroup();

})();
