/**
 * @name Add Properties To Essential Graphics
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add all selected properties to Essential Graphics Panel. If any properties belong to
 * a native After Effects expression controller then use the effect name instead.
 *
 * * "Angle Control"
 * * "Checkbox Control"
 * * "Color Control"
 * * "Dropdown Menu Control"
 * * "Layer Control"
 * * "Point Control"
 * * "Slider Control"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addPropertiesToEssentialGraphics() {

    function getName(property) {
        var effect = property.propertyGroup(1);
        if (property.isDropdownEffect) {
            return effect.name;
        }
        switch (effect.matchName) {
            case "ADBE Angle Control":
            case "ADBE Checkbox Control":
            case "ADBE Color Control":
            case "ADBE Layer Control":
            case "ADBE Point Control":
            case "ADBE Slider Control":
                return effect.name;
        }
        return property.name;
    }

    app.beginUndoGroup("Add Properties To Essential Graphics");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.canAddToMotionGraphicsTemplate(comp)) {
            var name = getName(property);
            property.addToMotionGraphicsTemplateAs(comp, name);
        }
    }
    app.endUndoGroup();
})();