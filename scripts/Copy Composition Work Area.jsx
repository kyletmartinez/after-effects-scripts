/**
 * @name Copy Composition Work Area
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Copy the Work Area from the active composition. Hold the ALT key to paste the copied
 * Work Area to the active composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function copyWorkAreaFromComp(comp) {
        app.beginUndoGroup("Copy Work Area");
        app.settings.saveSetting("KM Copy Work Area", "Start", comp.workAreaStart);
        app.settings.saveSetting("KM Copy Work Area", "Duration", comp.workAreaDuration);
        app.preferences.saveToDisk();
        app.endUndoGroup();
    }

    function pasteWorkAreaToComp(comp) {
        if (app.settings.haveSetting("KM Copy Work Area", "Start") === true) {
            app.beginUndoGroup("Paste Work Area");
            comp.workAreaStart = app.settings.getSetting("KM Copy Work Area", "Start");
            comp.workAreaDuration = app.settings.getSetting("KM Copy Work Area", "Duration");
            app.endUndoGroup();
        } 
    }

    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        if (ScriptUI.environment.keyboardState.altKey) {
            pasteWorkAreaToComp(comp);
        } else {
            copyWorkAreaFromComp(comp);
        }
    }
})();