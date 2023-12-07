/**
 * @name Toggle Puppet Pin Type
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Toggle selected puppet pins between Position type and Advanced type.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Toggle Puppet Pin Type");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.matchName == "ADBE FreePin3 PosPin Atom") {
            var pinTypeProperty = property.property("ADBE FreePin3 PosPin Type");
            if (pinTypeProperty.value == 1) {
                pinTypeProperty.setValue(4);
            } else {
                pinTypeProperty.setValue(1);
            }
        }
    }
    app.endUndoGroup();
})()