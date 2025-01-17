/**
 * @name Select Non-Null Layers
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select any unlocked layer in the current composition not created as a null object.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function selectNonNullLayers() {
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var i = comp.numLayers; i > 0; i--) {
        var layer = layers[i];
        if (!layer.locked) {
            layer.selected = !layer.nullLayer;
        }
    }
})();