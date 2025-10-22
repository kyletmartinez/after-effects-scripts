/**
 * @name Append To Expression
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Append new code to all selected properties that contain expressions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function appendToExpression() {

    function appendCode(property, newCode) {
        var oldExpression = property.expression;
        var divider = (oldExpression.includes("\r")) ? "\n" : " ";
        property.expression = newCode + divider + oldExpression;
    }

    function iterateThroughProperties(properties, newCode) {
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.canSetExpression === true) {
                if (property.expressionEnabled === true) {
                    appendCode(property, newCode);
                }
            }
        }
    }

    app.beginUndoGroup("Append To Expression(s)");
    var newCode = prompt("Code to Append", "posterizeTime(0);");
    if (newCode !== null && newCode.length > 0) {
        var comp = app.project.activeItem;
        var properties = comp.selectedProperties;
        iterateThroughProperties(properties, newCode);
    }
    app.endUndoGroup();
})();
