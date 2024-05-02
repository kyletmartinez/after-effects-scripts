/**
 * @name Round Position
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Round the position values of selected layers to the nearest whole number.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Round Position");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        var oldPosition = layer.transform.position.value;
        var newPosition = [
            Math.round(oldPosition[0]),
            Math.round(oldPosition[1]),
            Math.round(oldPosition[2])
        ];
        if (layer.transform.position.dimensionsSeparated === true) {
            layer.transform.xPosition.setValue(newPosition[0]);
            layer.transform.yPosition.setValue(newPosition[1]);
            if (layer.threeDLayer === true) {
                layer.transform.zPosition.setValue(newPosition[2]);
            }
        } else {
            layer.transform.position.setValue(newPosition);    
        }
    }
    app.endUndoGroup();
})();