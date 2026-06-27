/**
 * @name Fix Fresh Pickwhip Expression
 * @version 2.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Append ".value;" to the end of an expression recently set with the pickwhip.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function fixFreshPickwhipExpression() {
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.canSetExpression === true) {
            if (property.expressionEnabled === true) {
                property.expression = property.expression + ".value;";
            }
        }
    }
})();
