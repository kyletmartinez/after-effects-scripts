/**
 * @name Swap Property Dimensions
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Swap the dimension values for all selected properties. For example, swap the x and y
 * size values for a rectangle shape layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function swapSelectedPropertyDimensions() {

    function swapPropertyDimensions(property) {
        var value = property.value.reverse();
        property.setValue(value);
    }

    app.beginUndoGroup("Swap Property Dimensions");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            switch (property.propertyValueType) {
                case PropertyValueType.TwoD:
                case PropertyValueType.TwoD_SPATIAL:
                    swapPropertyDimensions(property);
                    break;
            }
        }
    }
    app.endUndoGroup();
})();