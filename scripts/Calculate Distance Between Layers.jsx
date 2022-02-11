/**
 * @title Calculate Distance Between Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Calculate the distance between any two layers. Two 2D layers will result in 2D
 * distance (composition space). Two 3D layers will result in 3D distance (world space). One 2D
 * layer and one 3D layer will result in 3D distance (world space). Hold the ALT key to force the
 * result to be 2D distance (composition space). Forcing 2D distance (composition space) will result
 * in the optical distance between two layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {

    function getPosition (layer, type) {
        var matchName = (type === "world") ? "ADBE Point3D Control" : "ADBE Point Control";
        var methodName = (type === "world") ? "toWorld" : "toComp";
        var pointControl = layer.property("ADBE Effect Parade").addProperty(matchName);
        var expression = [
            "thisComp.layer(\"" + layer.name + "\")",
            "." + methodName + "(thisComp.layer(\"" + layer.name + "\").transform.anchorPoint);"
        ];
        var pointProperty = pointControl.property(1);
        pointProperty.expression = expression.join("");
        var position = pointProperty.value;
        position.push(0);
        pointControl.remove();
        return position;
    }

    app.beginUndoGroup("Calculate Distance Between Layers");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    var layerA = layers[0];
    var layerB = layers[1];
    if (altKey === false) {
        var a = getPosition(layerA, "world");
        var b = getPosition(layerB, "world");
    } else {
        var a = getPosition(layerA, "composition");
        var b = getPosition(layerB, "composition");
    }
    var x = Math.pow(b[0] - a[0], 2);
    var y = Math.pow(b[1] - a[1], 2);
    var z = Math.pow(b[2] - a[2], 2);
    var distance = Math.sqrt(x + y + z);
    var layerAMsg = "[" + layerA.index + "] " + layerA.name;
    var layerBMsg = "[" + layerB.index + "] " + layerB.name;
    alert(distance.toFixed(2) + "px\n" + layerAMsg + "\n" + layerBMsg);
    app.endUndoGroup();
})();
