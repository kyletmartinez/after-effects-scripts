/**
 * @name Duplicate Selected Layer
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Exactly like selected layer and hitting CMD/CTRL + D. But instead of moving the
 * duplicated layer above the selected layer, move the duplicated layer below the selected layer.
 * This script currently only supports duplicating the first selected layer and will ignore any
 * other selected layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function duplicateSelectedLayer() {
    app.beginUndoGroup("Duplicate Selected Layer");
    var comp = app.project.activeItem;
    var oldLayer = comp.selectedLayers[0];
    var newLayer = oldLayer.duplicate();
    newLayer.moveAfter(oldLayer);
    oldLayer.selected = false;
    newLayer.selected = true;
    app.endUndoGroup();
})();