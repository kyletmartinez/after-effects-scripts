/**
 * @title Calculate Distance Between 2D Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Calculate the distance between two 2D layers
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
        var comp = app.project.activeItem;
        var layers = comp.selectedLayers;
        var numLayers = layers.length;
        var layerA = layers[0];
        var layerB = layers[1];
        var a = layerA.transform.position.value;
        var b = layerB.transform.position.value;
        var distance = Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
        var layerAMsg = "[" + layerA.index + "] " + layerA.name;
        var layerBMsg = "[" + layerB.index + "] " + layerB.name;
        alert(distance.toFixed(2) + "px\n" + layerAMsg + "\n" + layerBMsg);
})();
