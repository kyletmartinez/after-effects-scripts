/**
 * @name Select Layers Below Label
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select all layers in the current composition that are directly below a layer with
 * the label color 16. In my preferences label 16 is Black (#FFFFFF) and is always used for track
 * mattes.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function selectLayersBelowLabel() {
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var i = comp.numLayers; i > 0; i--) {
        var layer = layers[i];
        layer.selected = (layers[i - 1].label === 16);
    }
})();