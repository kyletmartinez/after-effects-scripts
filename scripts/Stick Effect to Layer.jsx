/**
 * @name Stick Effect to Layer
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Force effects wih selected position properties such as CC Bend It or Gradient Ramp
 * to stick properly to a layer.
 * 
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Stick Effect to Layer");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.canVaryOverTime === true) {
                if (property.propertyValueType === PropertyValueType.TwoD_SPATIAL) {
                    property.expression = "toComp(anchorPoint + value);";
                }
            }
        }
    }
    app.endUndoGroup();
})();