/**
 * @title Add Fill With Color Cycle
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add the Fill effect to all selected layers while cycling through red, green, blue,
 * yellow, magenta, and cyan.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var colors = [[1,0,0,1],[0,1,0,1],[0,0,1,1],[1,1,0,1],[1,0,1,1],[0,1,1,1]];

    function getNextColor () {
        var lastColorIndex = -1;
        if (app.settings.haveSetting("Fill Color", "Index") === true) {
            lastColorIndex = parseInt(app.settings.getSetting("Fill Color", "Index"));
        }
        var lastColorIndex = (lastColorIndex + 1) % colors.length;
        app.settings.saveSetting("Fill Color", "Index", lastColorIndex);
        app.preferences.saveToDisk();
        return colors[lastColorIndex];
    }

    app.beginUndoGroup("Add Fill");
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
    var numSelectedLayers = selectedLayers.length;
    for (var l = 0; l < numSelectedLayers; l++) {
        var currentLayer = selectedLayers[l];
        var effect = layer.property("ADBE Effect Parade").addProperty("ADBE Fill");
        var color = getNextColor();
        effect.property(3).setValue(color);
    }
    app.endUndoGroup();
})();