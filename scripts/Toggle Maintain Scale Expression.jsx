/**
 * @title Toggle Maintain Scale Expression
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Disable or enable an expression that maintains the visual scale of a layer as it's
 * positioned in Z Space.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function disableScaleExpression (layer) {
        var scaleProperty = layer.transform.scale;
        var scaleValue = scaleProperty.value;
        scaleProperty.expression = "";
        scaleProperty.setValue(scaleValue);
    }

    function enableScaleExpression (layer) {
        var scaleProperty = layer.transform.scale;
        var scaleValue = scaleProperty.value[0];
        var positionValue = layer.transform.position.value[2];
        var zoomValue = layer.containingComp.width / 0.72;
        if (layer.containingComp.activeCamera !== null) {
            zoomValue = layer.containingComp.activeCamera.cameraOption.zoom.value;
        }
        var value = scaleValue / (1 + (positionValue / zoomValue));
        scaleProperty.setValue([value, value, value]);
        scaleProperty.expression = ["try { var zoom = thisComp.activeCamera.cameraOption.zoom; } catch (e) { var zoom = thisComp.width / 0.72; }",
                                    "value * (1 + (transform.position[2] / zoom));"].join("\n");
    }

    app.beginUndoGroup("Toggle Maintain Scale Expression");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        if (layer.threeDLayer === true) {
            if (layer.transform.scale.expression.length > 0) {
                disableScaleExpression(layer);
            } else {
                enableScaleExpression(layer);
            }
        }
    }
    app.endUndoGroup();
})();