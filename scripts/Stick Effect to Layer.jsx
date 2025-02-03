/**
 * @name Stick Effect To Layer
 * @version 2.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Help effects with position properties such as "CC Bend It" or "Gradient Ramp" stick
 * properly to a layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function stickEffectToLayer() {
    app.beginUndoGroup("Stick Effect To Layer");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.propertyValueType === PropertyValueType.TwoD_SPATIAL) {
            property.expression = "toComp(anchorPoint + value);";
        }
    }
    app.endUndoGroup();
})();
