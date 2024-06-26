/**
 * @name Rename Selected Layer Source
 * @version 1.4
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
    try {
       var comp = app.project.activeItem;
       var layer = comp.selectedLayers[0];
        var oldName = layer.source.name;
        var newName = prompt("Name", oldName);
        if (newName !== null && newName.length > 0) {
            app.beginUndoGroup("Rename Layer Source");
            layer.source.name = newName;
            app.endUndoGroup();
        }
    } catch (err) {
        alert(err);
    }
})();