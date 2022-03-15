/**
 * @title Set To Average Position
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the last selected layer to the average position of all other layers. Hold the
 * ALT key to set the first selected layers to the average position of all other layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getAverageOfArray (arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total / arr.length;
    };

    app.beginUndoGroup("Set To Average Position");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    var xPositions = [];
    var yPositions = [];
    var zPositions = [];
    var minIndex = (altKey) ? 1 : 0;
    var maxIndex = (altKey) ? numLayers : numLayers - 1;
    for (var l = minIndex; l < maxIndex; l++) {
        var layer = layers[l];
        var oldPosition = layer.transform.position.value;
        xPositions.push(oldPosition[0]);
        yPositions.push(oldPosition[1]);
        zPositions.push(oldPosition[2]);
    }
    var newPosition = [
        getAverageOfArray(xPositions),
        getAverageOfArray(yPositions),
        getAverageOfArray(zPositions)
    ];
    var targetLayer = (altKey) ? layers[0] : layers[numLayers - 1];
    if (targetLayer.transform.position.dimensionsSeparated === true) {
        targetLayer.transform.xPosition.setValue(newPosition[0]);
        targetLayer.transform.yPosition.setValue(newPosition[1]);
        if (targetLayer.threeDLayer === true) {
            targetLayer.transform.zPosition.setValue(newPosition[2]);
        }
    } else {
        targetLayer.transform.position.setValue(newPosition);    
    }
})();