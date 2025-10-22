/**
 * @name Find All Expressions
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Find and report all active expressions in the current project. Useful in preparing
 * compositions for Lottie.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */


(function findAllExpressions() {

    function getLayer(property) {
        while (property.parentProperty !== null) {
            property = property.parentProperty;
        }
        return property;
    }

    function iterateThroughProperties(propertyGroup) {
        var numProperties = propertyGroup.numProperties;
        for (var p = 1; p <= numProperties; p++) {
            var property = propertyGroup.property(p);
            if (property.expressionEnabled === true) {
                var layer = getLayer(property);
                var comp = layer.containingComp;
                var msg = [
                    "Expression Found:",
                    "Composition: " + comp.name,
                    "Layer [" + layer.index + "]: " + layer.name
                ].join("\n");
                alert(msg);
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

    var items = app.project.items;
    var numItems = app.project.numItems;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            iterateThroughLayers(item);
        }
    }
})();
