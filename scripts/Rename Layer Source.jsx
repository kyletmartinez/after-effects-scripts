/**
 * @title Rename Layer Source
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the source of the currently selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Rename Layer Source");
    var comp = app.project.activeItem;
    var layerSource = comp.selectedLayers[0].source;
    if (layerSource !== null && layerSource !== undefined) {
        var newName = prompt("Name", "");
        if (newName !== null && newName.length > 0) {
            layerSource.name = newName;
        }
    }
    app.endUndoGroup();
})();