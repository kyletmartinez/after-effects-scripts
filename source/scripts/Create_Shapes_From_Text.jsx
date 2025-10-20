/**
 * @name Create Shapes From Text
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Convert all Text Layers in the current composition to Shape Layers using the
 * "Menu > Layer > Create > Create Shapes from Text" command but with the following customizations:
 *
 * * Layers with names that start with "DNU" ("Do Not Use") will be ignored
 * * Previously converted layers will be ignored
 * * Any resulting Stroke properties that are not enabled will be removed
 *
 * > [!WARNING]
 * > Due to the use of the "app.findMenuCommandId();" method this script may only work in English
 * > After Effects installations.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function createShapesFromText() {

    // Menu > Layer > Create > Create Shapes from Text
    var CREATE_SHAPES_FROM_TEXT_COMMAND_ID = app.findMenuCommandId("Create Shapes From Text");

    function removeStrokeProperties(propertyGroup) {
        var numProperties = propertyGroup.numProperties;
        for (var i = numProperties; i >= 1; i--) {
            var property = propertyGroup.property(i);
            if (property.matchName === "ADBE Vector Graphic - Stroke") {
                if (property.enabled === false) {
                    property.remove();
                }
            }
            if (property.propertyType === PropertyType.INDEXED_GROUP ||
                property.propertyType === PropertyType.NAMED_GROUP) {
                removeStrokeProperties(property);
            }
        }
    }

    function convertTextToShape(comp, layer) {
        var selectedLayers = comp.selectedLayers;
        var numSelectedLayers = selectedLayers.length;
        for (var l = 0; l < numSelectedLayers; l++) {
            selectedLayers[l].selected = false;
        }

        layer.selected = true;
        app.executeCommand(CREATE_SHAPES_FROM_TEXT_COMMAND_ID);
    }

    function getTextLayers(comp) {
        var textLayers = [];
        var layers = comp.layers;
        for (var l = comp.numLayers; l > 0; l--) {
            var layer = layers[l];
            if (layer instanceof TextLayer) {
                textLayers.push(layer);
            }
        }
        return textLayers;
    }

    function convertAllTextLayersToShapes(comp) {
        var convertedLayers = 0;
        var textLayers = getTextLayers(comp);
        var numTextLayers = textLayers.length;
        for (var l = 0; l < numTextLayers; l++) {
            var layer = textLayers[l];
            var index = layer.index;
            var name = layer.name;

            if (name.indexOf("DNU") === 0) {
                continue;
            }

            var previousIndex = index - 1;
            if (previousIndex !== 0) {
                var previousName = comp.layer(previousIndex).name;
                if (previousName === name + " Outlines") {
                    continue;
                }
            }

            convertTextToShape(comp, layer);

            var shapeLayer = comp.layer(index);
            removeStrokeProperties(shapeLayer);

            convertedLayers += 1;
        }

        alert("Converted " + convertedLayers + " text layer(s) to shapes");
    }

    app.beginUndoGroup("Create Shapes from Text");
    var comp = app.project.activeItem;
    convertAllTextLayersToShapes(comp);
    app.endUndoGroup();

})();
