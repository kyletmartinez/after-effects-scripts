/**
 * @name Add Posterize Time Expression
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add "posterizeTime(fps)" expression to all selected properties. Default "fps" will
 * be half the current frame rate and existing expressions will be preserved.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addPosterizeTimeExpression() {

    function addExpression(property, fps) {
        var newExpression = "posterizeTime(" + fps + "); value;";
        if (property.expression.length === 0) {
            property.expression = newExpression;
        } else {
            var divider = (exp.includes("\r") || exp.includes("\n")) ? "\n" : " ";
            property.expression = newExpression + divider + oldExpression;
        }
    }

    app.beginUndoGroup("Add Posterize Time Expression");
    var comp = app.project.activeItem;
    var fps = String(Math.ceil(comp.frameRate) / 2);
    var selectedProperties = comp.selectedProperties;
    var numSelectedProperties = selectedProperties.length;
    for (var p = 0; p < numSelectedProperties; p++) {
        var property = selectedProperties[p];
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.canSetExpression === true) {
                addExpression(property, fps);
            }
        }
    }
    app.endUndoGroup();
})();