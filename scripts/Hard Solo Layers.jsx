/**
 * @name Hard Solo Layers
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Disable (toggle the eyeball icon) on all unselected layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Hard Solo Layer(s)");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.enabled = layer.selected;
        }
    }
    app.endUndoGroup();
})();