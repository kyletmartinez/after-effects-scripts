/**
 * @name Place Pin
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Assist with pin placement based on gutter width. Ensure that each pin is parented to
 * the pin above it in the pin grid.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function placePin() {

    /**
     * Get the pin height from a precomposed pin.
     * @param  {CompItem} comp - pin precomp
     * @return {Int}           - pin height
     */
    function getPinHeight(comp) {
        var layer = comp.layers[2];
        var rootVectorsGroup = layer.property("ADBE Root Vectors Group");
        var vectorGroup = rootVectorsGroup.property("ADBE Vector Group");
        var vectorsGroup = vectorGroup.property("ADBE Vectors Group");
        var vectorShape = vectorsGroup.property("ADBE Vector Shape - Rect");
        var vectorRectSize = vectorShape.property("ADBE Vector Rect Size");
        return vectorRectSize.value[1];
    }

    var gutter = prompt("Gutter Width (px)", 24);
    if (gutter !== null && gutter !== "") {
        app.beginUndoGroup("Place Pin");
        var comp = app.project.activeItem;
        var layer = comp.selectedLayers[0];
        var currentPinHeight = getPinHeight(layer.source) / 2;
        var parentPinHeight = getPinHeight(layer.parent.source) / 2;
        var parentCompHeight = layer.parent.source.height / 2;
        var gutterInt = Number(gutter);
        var yPosition = parentCompHeight + currentPinHeight + parentPinHeight + gutterInt;
        layer.transform.yPosition.setValue(yPosition);
        app.endUndoGroup();
    }
})();
