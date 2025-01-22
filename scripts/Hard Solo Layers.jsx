/**
 * @name Hard Solo Layers
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Disable all selected layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function hardSoloLayers() {
    app.beginUndoGroup("Hard Solo Layer(s)");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var l = comp.numLayers; l > 0; l--) {
        layers[l].enabled = layers[l].selected;
    }
    app.endUndoGroup();
})();