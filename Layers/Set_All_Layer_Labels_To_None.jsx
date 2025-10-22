/**
 * @name Set All Layer Labels To None
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the label for all layers in the current composition to "None" or label "0".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setAllLayerLabelsToNone() {
    app.beginUndoGroup("Set All Layer Labels To None");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var i = comp.numLayers; i > 0; i--) {
        layers[i].label = 0;
    }
    app.endUndoGroup();
})();
