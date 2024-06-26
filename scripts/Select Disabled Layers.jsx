/**
 * @name Select Disable Layers
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select all layers in the current composition that are disabled. Disabled means the
 * eyeball icon is toggled OFF.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Select Disabled Layers");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var i = 1; i <= numLayers; i++) {
        var layer = layers[i];
        layer.selected = !layer.enabled;
    }
    app.endUndoGroup();
})();