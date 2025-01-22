/**
 * @name Zero Position
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Zero out the position of all selected layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addZeroPosition() {

    function addZeroPositionToLayer(comp, layer) {
        var positionValue = layer.transform.position.value;
        var zeroLayer = comp.layers.addShape();
        zeroLayer.name = "z_" + layer.name;
        zeroLayer.transform.position.setValue(positionValue);
        zeroLayer.moveToEnd();
        zeroLayer.enabled = false;
        zeroLayer.guideLayer = true;
        zeroLayer.label = 0;
        zeroLayer.shy = true;
        zeroLayer.threeDLayer = layer.threeDLayer;
        zeroLayer.locked = true;
        layer.parent = zeroLayer;
    }

    function addZeroPositionToLayers(comp, selectedIndices) {
        var numIndices = selectedIndices.length;
        for (var i = 0; i < numIndices; i++) {
            var index = selectedIndices[i];
            var layer = comp.layer(index);
            addZeroPositionToLayer(comp, layer);
        }
        comp.hideShyLayers = true;
    }

    function saveSelectedLayerIndicies(comp) {
        var selectedIndices = [];
        var layers = comp.selectedLayers;
        var numLayers = layers.length;
        for (var l = 0; l < numLayers; l++) {
            var layer = layers[l];
            selectedIndices.push(layer.index);
            layer.selected = false;
        }
        addZeroPositionToLayers(comp, selectedIndices);
    }

    app.beginUndoGroup("Add Zero Position");
    var comp = app.project.activeItem;
    saveSelectedLayerIndicies(comp);
    app.endUndoGroup();
})();