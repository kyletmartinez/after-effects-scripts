/**
 * @name Rename Selected Layers With Text
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the selected layers appending each character and character count as needed.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function renameLayersWithText() {

    function renameLayers(layers, numLayers, newName) {
        var characterCount = {};
        if (numLayers === newName.length) {
            for (var l = 0; l < numLayers; l++) {
                var character = newName.charAt(l).toUpperCase();
                var count = characterCount[character] || 1;
                layers[l].name = newName + " " + character + count;
                characterCount[character] = count + 1;
            }
        }
    }

    app.beginUndoGroup("Rename Layer(s) With Text");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    if (numLayers > 0) {
        var oldName = layers[0].name;
        var newName = prompt("Rename Layer(s) With Text", oldName);
        if (newName !== null && newName.length > 0) {
            renameLayers(layers, numLayers, newName);
        }
    }
    app.endUndoGroup();
})();