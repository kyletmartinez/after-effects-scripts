/**
 * @name Append Posterize Time
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Appends "posterizeTime(12);" to properties with existing expressions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function findSelectedProperties (comp) {
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (property.canVaryOverTime === true) {
                property.expression = "posterizeTime(12); " + property.expression;
            }
        }
    }

    app.beginUndoGroup("Append Posterize Time");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        findSelectedProperties(comp);
    }
    app.endUndoGroup();
})();