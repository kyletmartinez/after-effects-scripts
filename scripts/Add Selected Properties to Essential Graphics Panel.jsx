/**
 * @name Add Selected Properties to Essential Graphics Panel
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add all selected properties to Essential Graphics Panel using effect names instead
 * of property names for expression controls.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function isExpressionControl (property) {
        var isExpressionControl = false;
        switch (property.propertyGroup(1).matchName) {
            case "ADBE Point3D Control":
            case "ADBE Angle Control":
            case "ADBE Checkbox Control":
            case "ADBE Color Control":
            case "ADBE Layer Control":
            case "ADBE Point Control":
            case "ADBE Slider Control":
                isExpressionControl = true;
        }
        if (property.isDropdownEffect === true) {
            isExpressionControl = true;
        }
        return isExpressionControl;
    }

    app.beginUndoGroup("Add Selected Properties to Essential Graphics Panel");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.canAddToMotionGraphicsTemplate(comp) === true) {
            var name = property.name;
            if (isExpressionControl(property) === true) {
                name = property.propertyGroup(1).name;
            }
            property.addToMotionGraphicsTemplateAs(comp, name);
        }
    }
    app.endUndoGroup();
})();