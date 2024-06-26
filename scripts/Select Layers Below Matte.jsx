/**
 * @name Select Layers Below Matte
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select layers below any layer with label 16 (Black).
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var LABEL_ID = 16;
    app.beginUndoGroup("Select Layers Below Matte");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var i = 1; i < numLayers; i++) {
        var selected = (layers[i].label === LABEL_ID);
        layers[i + 1].selected = selected;
    }
    app.endUndoGroup();
})();