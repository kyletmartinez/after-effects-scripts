/**
 * @name Set All Layer Labels To None
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the label for all layers in the current composition to None.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function setAllLayerLabelsToNone() {
    app.beginUndoGroup("Set All Layer Labels To None");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var i = comp.numLayers; i > 0; i--) {
        layers[i].label = 0;
    }
    app.endUndoGroup();
})();