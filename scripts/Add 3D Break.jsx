/**
 * @name Add 3D Break
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add an adjustment layer above the currently selected layer to break the 3D space of
 * After Effects. If no layers are selected the adjustment layer will be added at the top.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    Array.prototype.map = function (callback) {
        var array = [];
        for (var i = 0; i < this.length; i++) {
            array.push(callback(this[i]));
        }
        return array;
    };

    app.beginUndoGroup("Add 3D Break");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    var idx = Math.min.apply(Math, selectedLayers.map(function(layer) { return layer.index; }));
    var oldLayer = (numSelectedLayers >= 1) ? layers[idx] : layers[1];
    var newLayer = layers.addSolid([1, 1, 1], "3D Break", comp.width, comp.height, comp.pixelAspect);
    newLayer.adjustmentLayer = true;
    newLayer.moveBefore(oldLayer);
    newLayer.name = "=== 3D Break ===";
    app.endUndoGroup();
})();