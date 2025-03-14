/**
 * @name Update Expressions
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Find an replace all instances of a specific expression with a new expression.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function updateExpressions() {

    function getExpressions() {
        var win = new Window("dialog", "Update Expressions");
        win.orientation = "column";
        win.alignChildren = ["right", "top"];

        var expressionGroup = win.add("group");

        var oldPanel = expressionGroup.add("panel", undefined, "Old Expression");
        var oldEdit = oldPanel.add("edittext {properties: {multiline: true, scrollable: true}}");
        oldEdit.preferredSize.width = 300;
        oldEdit.preferredSize.height = 100;

        var betweenGroup = expressionGroup.add("group");
        betweenGroup.preferredSize.width = 30;
        betweenGroup.alignChildren = ["center", "center"];
        betweenGroup.add("statictext", undefined, "=>");

        var newPanel = expressionGroup.add("panel", undefined, "New Expression");
        var newEdit = newPanel.add("edittext {properties: {multiline: true, scrollable: true}}");
        newEdit.preferredSize.width = 300;
        newEdit.preferredSize.height = 100;

        var group3 = win.add("group");
        group3.add("button", undefined, "Cancel", {
            "name": "cancel"
        });
        group3.add("button", undefined, "Okay", {
            "name": "ok"
        });

        if (win.show() === 1) {
            return {
                "old": oldEdit.text,
                "new": newEdit.text
            };
        } else {
            return false;
        }
    }

    function iterateThroughProperties(propertyGroup, oldExpression, newExpression) {
        var numProperties = propertyGroup.numProperties;
        for (var p = 1; p <= numProperties; p++) {
            var property = propertyGroup.property(p);
            if (property.propertyType === PropertyType.PROPERTY) {
                if (property.canSetExpression === true) {
                    if (property.expressionEnabled === true) {
                        var currentExpression = property.expression.replace(/\n|\r/g, "");
                        if (currentExpression === oldExpression) {
                            property.expression = newExpression;
                        }
                    }
                }
            }
            if (property.propertyType === PropertyType.INDEXED_GROUP ||
                property.propertyType === PropertyType.NAMED_GROUP) {
                iterateThroughProperties(property, oldExpression, newExpression);
            }
        }
    }

    function iterateThroughLayers(comp, oldExpression, newExpression) {
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            iterateThroughProperties(layer, oldExpression, newExpression);
        }
    }

    app.beginUndoGroup("Update Expression(s)");
    var expressions = getExpressions();
    if (expressions !== false) {
        var oldExpression = expressions.old.replace(/\n|\r/g, "");
        var newExpression = expressions.new;
        if (oldExpression !== "" && newExpression !== "") {
            var comp = app.project.activeItem;
            iterateThroughLayers(comp, oldExpression, newExpression);
        }
    }
    app.endUndoGroup();
})();
