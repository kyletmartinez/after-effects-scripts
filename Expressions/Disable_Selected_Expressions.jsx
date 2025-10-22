/**
 * @name Disable Selected Expressions
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Disable the expression for all selected properties.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function disableSelectedExpressions() {
    app.beginUndoGroup("Disable Selected Expressions");
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.canSetExpression === true) {
            property.expressionEnabled = false;
        }
    }
    app.endUndoGroup();
})();
