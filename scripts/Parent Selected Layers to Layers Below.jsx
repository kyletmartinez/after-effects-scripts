/**
 * @title Parent Selected Layers to Layers Below
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Parent each selected layer to the layer directly below it.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Parent Selected Layers to Layers Below");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    for (var i = 0; i < numSelectedLayers; i++) {
        var selectedLayer = selectedLayers[i];
        var selectedIndex = selectedLayer.index;
        selectedLayer.parent = layers[selectedIndex + 1];
    }
    app.endUndoGroup();
})();