/**
 * @name Get Selected Layer Duration
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Display the duration (seconds) for the currently selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function getSelectedLayerDuration() {
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    if (selectedLayers.length > 0) {
        var layer = selectedLayers[0];
        var duration = layer.outPoint - layer.inPoint;
        alert("Layer '" + layer.name + "' duration: " + duration.toFixed(2) + " seconds");
    }
})();
