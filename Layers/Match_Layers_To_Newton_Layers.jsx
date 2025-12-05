/**
 * @name Match Layers To Newton Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Copy position values then parent individual layers to a matching Newton layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function matchLayersToNewtonLayers() {

    var targetName = "Illustrator Icon";
    var parentName = "Newton Icon";

    app.beginUndoGroup("Match Layer(s) to Newton Layers(s)");

    var comp = app.project.activeItem;
    var layers = comp.layers;
    var numLayers = layers.length;

    for (var l = 1; l <= numLayers; l++) {
        var layer = layers[l];
        var layerName = layer.name;

        if (layerName.indexOf(targetName) === 0) {

            var layerNumber = layerName.split(" ").pop();
            var parent = comp.layer(parentName + " " + layerNumber);

            var layerPos = layer.property("ADBE Transform Group").property("ADBE Position");
            var parentPos = parent.property("ADBE Transform Group").property("ADBE Position");

            try {
                // WITH KEYFRAMES
                var keyTime = parentPos.keyTime(1);
                var keyValue = parentPos.keyValue(1);
                layerPos.setValueAtTime(keyTime, keyValue);
            } catch (err) {
                // WITHOUT KEYFRAMES
                layerPos.setValue(parentPos.value);
            }

            layer.parent = parent;
        }
    }

    app.endUndoGroup();

})();
