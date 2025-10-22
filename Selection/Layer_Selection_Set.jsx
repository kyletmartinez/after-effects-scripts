/**
 * @name Layer Selection Set
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Store all currently selected layers as a "selection state" within the current
 * composition.
 *
 * Sister script to: "Layer Selection Get.jsx"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setLayerSelection() {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        comp.comment += "*" + layers[l].id;
    }
})();
