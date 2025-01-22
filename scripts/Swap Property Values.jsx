/**
 * @name Swap Property Values
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Swap the values of two selected properties with the same property type.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function swapPropertyValues() {
    app.beginUndoGroup("Swap Property Values");
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
        var propertyTwo = targetProperties[1];
        if (propertyOne.propertyValueType === propertyTwo.propertyValueType) {
            var propertyOneValue = propertyOne.value;
            var propertyTwoValue = propertyTwo.value;
            propertyOne.setValue(propertyTwoValue);
            propertyTwo.setValue(propertyOneValue);
        }

    }
    app.endUndoGroup();
})();