/**
 * @name Calculate Distance Between Layers
 * @version 2.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Calculate the distance between any two layers.
 *
 * Distance Types:
 * * "2D Distance" is the distance between two layers in composition space - the optical distance
 * * "3D Distance" is the distance between two layers in world space - the literal distance
 *
 * Calculation Combinations:
 * * "2D" and "2D" will default to "2D Distance"
 * * "3D" and "3D" will default to "3D Distance"
 * * "2D" and "3D" will default to "3D Distance"
 *
 * Hold the "ALT key" to force any combination to calculate "2D Distance".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function calculateDistanceBetweenLayers() {

    function getPosition(layer, type) {
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
    var layerA = layers[0];
    var layerB = layers[1];
    var a = null;
    var b = null;
    if (altKey) {
        a = getPosition(layerA, "composition");
        b = getPosition(layerB, "composition");
    } else {
        a = getPosition(layerA, "world");
        b = getPosition(layerB, "world");
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
