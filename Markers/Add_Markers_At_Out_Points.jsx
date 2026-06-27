/**
 * @name Add Markers At Out Points
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a composition marker at the out point of each layer in the composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addMarkersAtOutPoints() {
    app.beginUndoGroup("Add Markers At Out Point(s)");
    var marker = new MarkerValue("");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var l = comp.numLayers; l > 0; l--) {
        comp.markerProperty.setValueAtTime(layers[l].outPoint, marker);
    }
    app.endUndoGroup();
})();
