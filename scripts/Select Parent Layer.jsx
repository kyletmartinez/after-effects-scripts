/**
 * @name Select Parent Layer
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select the parent of the currently selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function selectParentLayer() {
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    if (selectedLayers.length === 1) {
        var layer = selectedLayers[0];
        if (layer.parent) {
            layer.selected = false;
            layer.parent.locked = false;
            layer.parent.selected = true;
        }
    }
})();