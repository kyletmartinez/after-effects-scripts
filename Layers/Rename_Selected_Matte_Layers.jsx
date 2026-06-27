/**
 * @name Rename Selected Matte Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Renames a selected layer to match the layer below and appending "Matte" to the end.
 *
 * > [!WARNING]
 * > This script doesn't detect actual Track Matte pairs. This script also assumes the timeline is
 * set up using the old style of mattes where mattes were required to be directly above a layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameSelectedMatteLayers() {
    app.beginUndoGroup("Rename Selected Matte Layers");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        var index = layer.index;
        layer.name = comp.layers[index + 1].name + " Matte";
    }
    app.endUndoGroup();
})();
