/**
 * @name Select All Children
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select any unlocked layer parented to the selected layer in the current composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function selectAllChildren() {

    function layerHasMatchingParent(layer, index) {
        return (layer.parent && layer.parent.index === index);
    }

    function selectChildrenLayers(comp, index) {
        var layers = comp.layers;
        for (var i = comp.numLayers; i > 0; i--) {
            var layer = layers[i];
            if (layerHasMatchingParent(layer, index)) {
                if (!layer.locked) {
                    layer.selected = true;
                }
            }
        }
    }

    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    if (selectedLayers.length === 1) {
        var parentLayer = selectedLayers[0];
        var parentIndex = parentLayer.index;
        parentLayer.selected = false;
        selectChildrenLayers(comp, parentIndex);
    }
})();