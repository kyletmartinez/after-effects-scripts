/**
 * @name Select Layers Below Label
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select all layers in the current composition that are directly below a layer with
 * the label color "16". In my preferences label 16 is Black "#000000" and is always used for track
 * mattes.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function selectLayersBelowLabel() {
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var l = comp.numLayers; l > 0; l--) {
        var layer = layers[l];
        layer.selected = (layers[l - 1].label === 16);
    }
})();