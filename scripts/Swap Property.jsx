/**
 * @name Swap Property
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Swap the values of two selected properties. They must be the same property type.
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
        app.beginUndoGroup("Swap Property");
        var comp = app.project.activeItem;
        var selectedProperties = comp.selectedProperties;
        var numProperties = selectedProperties.length;

        var targetProperties = [];
        for (var p = 0; p < numProperties; p++) {
            var property = selectedProperties[p];
            if (property.canVaryOverTime === true) {
                targetProperties.push(property);
            }
        }

        if (targetProperties.length === 2) {
            var propertyOne = targetProperties[0];
            var propertyOneValue = propertyOne.value;
            var propertyTwo = targetProperties[1];
            var propertyTwoValue = propertyTwo.value;

            propertyOne.setValue(propertyTwoValue);
            propertyTwo.setValue(propertyOneValue);
        } else {
            throw "You must select only two properties.";
        }
    } catch (err) {
        alert(err);
    } finally {
        app.endUndoGroup();
    }
})();