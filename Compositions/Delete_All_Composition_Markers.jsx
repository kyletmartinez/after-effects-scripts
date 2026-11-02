/**
 * @name Delete All Composition Markers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Delete all composition markers from every composition in the project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function deleteAllCompositionMarkers() {
    app.beginUndoGroup("Delete All Composition Markers");
    var project = app.project;
    var items = project.items;
    var numItems = items.length;
    for (var i = 1; i <= numItems; i++) {
        var comp = items[i];
        if (comp instanceof CompItem) {
            var markers = comp.markerProperty;
            var numMarkers = markers.numKeys;
            for (var m = markers.numKeys; m >= 1; m--) {
                markers.removeKey(m);
            }
        }
    }
    app.endUndoGroup();
})();
