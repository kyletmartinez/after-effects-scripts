/**
 * @name Add Comment To Selected Layers
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a comment (or remove a comment) to all selected layers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addCommentToSelectedLayers() {
    app.beginUndoGroup("Add Comment to Selected Layer(s)");
    var comment = prompt("Comment", "") || "";
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        layers[l].comment = comment;
    }
    app.endUndoGroup();
})();
