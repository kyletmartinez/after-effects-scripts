/**
 * @name Rename Puppet Pins For DuIK
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename selected arm puppet pins in preparation for DuIK. Hold the "ALT" key to
 * rename selected leg puppet pins.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renamePuppetPinsForDuIK() {

    var altKey = ScriptUI.environment.keyboardState.altKey;
    var names = (altKey) ? ["Hip", "Knee", "Ankle"] : ["Shoulder", "Elbow", "Wrist"];

    app.beginUndoGroup("Rename Puppet Pins For DuIK");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.name.match(/Puppet Pin [0-9]*/g)) {
            var index = parseInt(property.name.split(" ")[2], 10);
            property.name = names[index - 1];
        }
    }
    app.endUndoGroup();
})();