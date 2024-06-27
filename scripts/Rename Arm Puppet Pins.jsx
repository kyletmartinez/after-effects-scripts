/**
 * @name Rename Arm Puppet Pins
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename selected puppet pins added to arm layers in preparation for Duik
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var names = [
        "Shoulder", // Puppet Pin 1
        "Elbow",    // Puppet Pin 2
        "Wrist"     // Puppet Pin 3
    ];

    app.beginUndoGroup("Rename Arm Puppet Pins");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.name.match(/Puppet Pin [0-9]*/g)) {
            var i = parseInt(property.name.split(" ")[2]);
            property.name = names[i - 1];
        }
    }
    app.endUndoGroup();
})();