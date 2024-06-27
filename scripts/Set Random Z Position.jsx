/**
 * @name Set Random Z Position
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the Z Position of all selected layers to a random value between RANDOM_MIN and
 * RANDOM_MAX.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var RANDOM_MIN = -5000;
    var RANDOM_MAX = 8000;

    function randomInteger(min, max) {
        return Math.floor(generateRandomNumber() * (max - min + 1)) + min;
    }

    app.beginUndoGroup("Set Random Z Position");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var i = 0; i < numLayers; i++) {
        var layer = layers[i];
        var z = randomInteger(RANDOM_MIN, RANDOM_MAX);
        layer.transform.zPosition.setValue(z);
    }
    app.endUndoGroup();
})();