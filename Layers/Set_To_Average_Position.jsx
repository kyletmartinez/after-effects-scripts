/**
 * @name Set To Average Position
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the last selected layer to the average position of all other layers. Hold the
 * "ALT" key to set the first selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function setToAveragePosition() {

    function getAverage(sum, count) {
        return sum / count;
    }

    function getAveragePosition(layers, numLayers) {
        var xPositionSum = 0;
        var yPositionSum = 0;
        var zPositionSum = 0;
        for (var l = 0; l < numLayers; l++) {
            var layer = layers[l];
            var position = layer.transform.position.value;
            xPositionSum += position[0];
            yPositionSum += position[1];
            zPositionSum += position[2];
        }
        return [
            getAverage(xPositionSum, numLayers),
            getAverage(yPositionSum, numLayers),
            getAverage(zPositionSum, numLayers)
        ];
    }

    app.beginUndoGroup("Set To Average Position");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    var position = getAveragePosition(layers, numLayers);
    var layer = (altKey) ? layers[0] : layers[numLayers - 1];
    if (layer.transform.position.dimensionsSeparated === true) {
        layer.transform.xPosition.setValue(position[0]);
        layer.transform.yPosition.setValue(position[1]);
        if (layer.threeDLayer === true) {
            layer.transform.zPosition.setValue(position[2]);
        }
    } else {
        layer.transform.position.setValue(position);
    }
    app.endUndoGroup();
})();
