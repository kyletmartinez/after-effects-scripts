/**
 * @name Select Guide Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select all layers in the current composition that are Guide Layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function selectGuideLayers() {
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var l = comp.numLayers; l > 0; l--) {
        var layer = layers[l];
        layer.selected = false;
        layer.selected = (layer.guideLayer);
    }
})();
