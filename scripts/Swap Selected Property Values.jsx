/**
 * @name Swap Selected Property Values
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description For each selected property, swap the property values. For example, use this script
 * to swap the X and Y size for a rectangle shape layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function swapSelectedPropertyValues() {

    /**
     * Swap the first two indices of the property value.
     * @param  {Property} property - current property
     */
    function swapPropertyValues(property) {
        var value = property.value.slice();
        value[0] = property.value[1];
        value[1] = property.value[0];
        property.setValue(value);
    }

    app.beginUndoGroup("Swap Selected Property Value(s)");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            switch (property.propertyValueType) {
                case PropertyValueType.ThreeD:
                case PropertyValueType.ThreeD_SPATIAL:
                case PropertyValueType.TwoD:
                case PropertyValueType.TwoD_SPATIAL:
                    swapPropertyValues(property);
                    break;
            }
        }
    }
    app.endUndoGroup();

})();