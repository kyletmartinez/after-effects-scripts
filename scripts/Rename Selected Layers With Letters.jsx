/**
 * @name Rename Selected Layers With Letters
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the selected layers append letters as needed.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function renameLayersWithLetters() {

    function getLetter(index) {
        return String.fromCharCode(97 + ((index - 1) % 26)).toUpperCase();
    }

    function renameLayers(layers, numLayers, name) {
        for (var i = 0; i < numLayers; i++) {
            layers[i].name = name + " " + getLetter(i + 1);
        }
    }

    app.beginUndoGroup("Rename Layer(s) With Letters");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    if (numLayers > 0) {
        var oldName = layers[0].name;
        var newName = prompt("Rename Layer(s) With Letters", oldName);
        if (newName !== null && newName.length > 0) {
            renameLayers(layers, numLayers, newName);
        }
    }
    app.endUndoGroup();
})();