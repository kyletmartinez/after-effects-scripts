/**
 * @name OCD Expression Fix
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Append ".value;" to the end of the expression on selected properties. Typically used
 * immediately after using the pickwhip to quickly set the expression.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var comp = app.project.activeItem;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var i = 0; i < numProperties; i++) {
        var property = properties[i];
        if (property.canSetExpression == true) {
            if (property.expressionEnabled == true) {
                property.expression = property.expression + ".value;";
            }
        }
    }
})();