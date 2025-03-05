/**
 * @name Layer Selection Get
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Reselect all layers stored in a previous "selection state" in the current
 * composition.
 *
 * Sister script to: "Layer Selection Set.jsx"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function getLayerSelection() {
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var l = layers.length; l > 0; l--) {
        var layer = layers[l];
        layer.selected = comp.comment.includes(layer.id);
    }
})();
