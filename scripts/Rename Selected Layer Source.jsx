/**
 * @name Rename Selected Layer Source
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the source of the currently selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameLayerSource() {
    app.beginUndoGroup("Rename Layer Source");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var oldName = layer.source.name;
    var newName = prompt("Rename Layer Source", oldName);
    if (newName !== null && newName.length > 0) {
        layer.source.name = newName;
    }
    app.endUndoGroup();
})();
