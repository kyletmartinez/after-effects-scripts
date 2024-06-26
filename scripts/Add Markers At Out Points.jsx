/**
 * @name Add Marker(s) At Out Point(s)
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a composition marker at each outpoint of every layer in the composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Add Marker(s) At Out Point(s)");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var numLayers = layers.length;
    for (var l = 1; l < numLayers; l++) {
        var layer = layers[l];
        var time = layer.outPoint;
        var marker = new MarkerValue("");
        comp.markerProperty.setValueAtTime(time, marker);
    }
    app.endUndoGroup();
})();