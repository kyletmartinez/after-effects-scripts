/**
 * @name Rename Selected Properties
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the selected properties appending numbers as needed.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameSelectedProperties() {
    app.beginUndoGroup("Rename Selected Properties");
    var name = prompt("Name", "Shape");
    if (name !== null && name.length > 0) {
        var comp = app.project.activeItem;
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            property.name = name + " " + (p + 1);
        }
    }
    app.endUndoGroup();
})();
