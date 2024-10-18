/**
 * @name Add Posterize Time Expression
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add an expression to all selected properties to cut the framerate in half.
 * Animation will now happen on 2s. Existing expressions will be preserved.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function addPosterizeTimeExpression() {
    app.beginUndoGroup("Add Posterize Time Expression");
    var comp = app.project.activeItem;
    var fps = String(Math.ceil(comp.frameRate) / 2);
    var selectedProperties = comp.selectedProperties;
    var numSelectedProperties = selectedProperties.length;
    for (var p = 0; p < numSelectedProperties; p++) {
        var property = selectedProperties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.canSetExpression === true) {
                var exp = property.expression;
                if (exp.length === 0) {
                    property.expression = "posterizeTime(" + fps + "); value;";
                } else {
                    var s = (exp.includes("\r") || exp.includes("\n")) ? "\n" : " ";
                    property.expression = "posterizeTime(" + fps + ");" + s + exp;
                }
            }
        }
    }
    app.endUndoGroup();
})();