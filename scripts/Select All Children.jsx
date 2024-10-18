/**
 * @name Select All Children
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select all layers parented to the currently selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function selectAllChildren() {
    app.beginUndoGroup("Select All Children");
    var comp = app.project.activeItem;
    var selectedLayer = comp.selectedLayers[0];
    var selectedIndex = selectedLayer.index;
    selectedLayer.selected = false;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var l = 1; l <= numLayers; l++) {
        var layer = layers[l];
        if (layer.parent !== null) {
            if (layer.parent.index === selectedIndex) {
                layer.selected = true;
            }
        }
    }
})();