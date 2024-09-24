/**
 * @name Select Parent Layer
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description If there is only one layer selected, and the selected layer has a parent layer, then
 * unlock and select the parent layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function selectParentLayer() {
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    if (numSelectedLayers === 1) {
        var layer = comp.selectedLayers[0];
        if (layer.parent !== null) {
            layer.selected = false;
            var parentLayer = layer.parent;
            parentLayer.locked = false;
            parentLayer.selected = true;
        }
    }
})();