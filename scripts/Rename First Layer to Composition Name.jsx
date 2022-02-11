/**
 * @title Rename First Layer to Composition Name
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the first layer in each selected composition to match the name of the
 * composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Rename First Layer to Composition Name");
    var project = app.project;
    var selectedComps = project.selection;
    var numSelectedComps = selectedComps.length;
    for (var c = 0; c < numSelectedComps; c++) {
        var comp = selectedComps[c];
        var compName = comp.name;
        var layer = comp.layers[1];
        var locked = layer.locked;
        layer.locked = false;
        layer.name = compName;
        layer.locked = locked;
    }
    app.endUndoGroup();
})();