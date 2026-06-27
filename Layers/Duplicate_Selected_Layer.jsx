/**
 * @name Duplicate Selected Layer
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Duplicate the selected layer exactly like pressing "CMD/CTRL + D" but move the new
 * layer directly below the selected layer instead of above it.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
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
