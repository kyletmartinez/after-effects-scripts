/**
 * @name Toggle Transparency Grid Preferences
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Sometimes the transparency grid colors are too agressive and the grid size is too
 * small. Toggle between the default preferences and a custom "dark mode" with larger grid cells.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function toggleTransparencyGridPreferences() {

    var prefType = PREFType.PREF_Type_MACHINE_SPECIFIC;

    function toggleColor() {
        var colors = {
            "0x00cccccc": "0x00000000", // light gray* --> black
            "0x00ffffff": "0x000c0c0c", // white*      --> dark gray
            "0x00000000": "0x00cccccc", // black       --> light gray*
            "0x000c0c0c": "0x00ffffff"  // dark gray   --> white*
        };

        var sectionName = "Main Pref Section v2";

        var keyA = "Pref_TRANSPARENCY_GRID_COLOR1";
        var oldA = app.preferences.getPrefAsString(sectionName, keyA, prefType);
        var newA = (colors.hasOwnProperty(oldA)) ? colors[oldA] : "0x000c0c0c";
        app.preferences.savePrefAsString(sectionName, keyA, newA, prefType);

        var keyB = "Pref_TRANSPARENCY_GRID_COLOR2 v2";
        var oldB = app.preferences.getPrefAsString(sectionName, keyB, prefType);
        var newB = (colors.hasOwnProperty(oldB)) ? colors[oldB] : "0x00ffffff";
        app.preferences.savePrefAsString(sectionName, keyB, newB, prefType);
    }

    function toggleSize() {
        var size = {
            "1": "2", // 1* --> 2
            "2": "1"  // 2  --> 1*
        };

        var sectionName = "General Section";

        var keyS = "Transparency Grid Size";
        var oldS = app.preferences.getPrefAsString(sectionName, keyS, prefType);
        var newS = (size.hasOwnProperty(oldS)) ? size[oldS] : "1";
        app.preferences.savePrefAsString(sectionName, keyS, newS, prefType);
    }

    toggleColor();
    toggleSize();
    app.preferences.saveToDisk();

    var message = "Click the \"Toggle Transparency Grid\" button for changes to take effect.";
    alert("After Effects\n" + message);
})();