/**
 * @title Rename Selected Layers With Text
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename selected layers and append each character along with character count
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function renameSelectedLayers (layers, numLayers, newName) {
        var characters = {};
        app.beginUndoGroup("Rename Layer(s)");
        for (var l = 0; l < numLayers; l++) {
            var layer = layers[l];
            var character = newName.charAt(l).toUpperCase();
            if (characters.hasOwnProperty(character) === true) {
                characters[character] = characters[character] + 1;
            } else {
                characters[character] = 1;
            }
            layer.name = newName + " " + character + characters[character];
        }
        app.endUndoGroup();
    }

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    if (numLayers > 0) {
        var newName = prompt("Name", "");
        if (newName !== null && newName.length > 0) {
            renameSelectedLayers(layers, numLayers, newName);
        }
    }
})();
