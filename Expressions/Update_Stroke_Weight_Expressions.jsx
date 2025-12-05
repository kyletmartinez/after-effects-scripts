/**
 * @name Update Stroke Weight Expressions
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description There are a few variations of a "Maintain Stroke Weight" expression floating around
 * the internet but I believe mine is the best as it handles 0% scale much more elegantly. Use the
 * script to replace a common alternate.
 *
 * OLD:
 * `value / length(toComp([0,0]), toComp([0.7071,0.7071])) || 0.001;`
 *
 * NEW:
 * `s = length(toComp([0,0]),toComp([0.7071,0.7071])); (s) ? value / s : 0;`
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function updateStrokeWeightExpressions() {

    var Expression = {
        "OLD": "value / length(toComp([0,0]), toComp([0.7071,0.7071])) || 0.001;",
        "NEW": "s = length(toComp([0,0]),toComp([0.7071,0.7071])); (s) ? value / s : 0;"
    };

    function normalize(expr) {
        return expr.replace(/\s+/g, "");
    }

    var replacementCount = 0;

    function processProperty(property) {
        if (property.canSetExpression && property.expressionEnabled) {
            var currentExpression = normalize(property.expression);
            if (currentExpression === Expression.OLD) {
                property.expression = Expression.NEW;
                replacementCount += 1;
            }
        }
    }

    function iterateThroughProperties(propertyGroup) {
        var numProperties = propertyGroup.numProperties;
        for (var p = 1; p <= numProperties; p++) {
            var property = propertyGroup.property(p);
            if (property.propertyType === PropertyType.PROPERTY) {
                processProperty(property);
            }
            if (property.propertyType === PropertyType.INDEXED_GROUP ||
                property.propertyType === PropertyType.NAMED_GROUP) {
                iterateThroughProperties(property);
            }
        }
    }

    function iterateThroughLayers(comp) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughProperties(layer);
        }
    }

    function iterateThroughItems(project) {
        var items = project.items;
        for (var i = project.numItems; i > 0; i--) {
            var item = items[i];
            if (item instanceof CompItem) {
                iterateThroughLayers(item);
            }
        }
    }

    app.beginUndoGroup("Update Stroke Weight Expressions");
    Expression.OLD = normalize(Expression.OLD);
    iterateThroughItems(app.project);
    app.endUndoGroup();

    var label = (replacementCount === 1) ? "expression" : "expressions";
    alert("Replacement complete!\n\n" + replacementCount + " " + label + " updated.");

})();
