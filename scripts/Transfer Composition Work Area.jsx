/**
 * @name Transfer Composition Work Area
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Copy the Work Area from the current composition. Hold the "ALT" key to paste a
 * copied Work Area to the current composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function transferCompositionWorkArea() {

    function copyWorkAreaFromComp() {
        app.beginUndoGroup("Copy Work Area");
        var comp = app.project.activeItem;
        app.settings.saveSetting("KM Copy Work Area", "Start", comp.workAreaStart);
        app.settings.saveSetting("KM Copy Work Area", "Duration", comp.workAreaDuration);
        app.preferences.saveToDisk();
        app.endUndoGroup();
    }

    function pasteWorkAreaToComp() {
        if (app.settings.haveSetting("KM Copy Work Area", "Start") === true) {
            app.beginUndoGroup("Paste Work Area");
            var comp = app.project.activeItem;
            comp.workAreaStart = app.settings.getSetting("KM Copy Work Area", "Start");
            comp.workAreaDuration = app.settings.getSetting("KM Copy Work Area", "Duration");
            app.endUndoGroup();
        }
    }

    var altKey = ScriptUI.environment.keyboardState.altKey;
    if (altKey) {
        pasteWorkAreaToComp();
    } else {
        copyWorkAreaFromComp();
    }
})();
