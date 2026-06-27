/**
 * @name Toggle Preserve Nested Frame Rate
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Cause every composition within the current project to maintain nested frame rate.
 * Corresponds to the value of the "Preserve frame rate when nested or in render queue" option in
 * the "Advanced" tab of the "Composition Settings" dialog box. Hold the "ALT" key to toggle this
 * preference off.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function togglePreserveNestedFrameRate() {
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var preserveNestedFrameRate = (altKey === false);
    app.beginUndoGroup("Preserve Nested Frame Rate");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            item.preserveNestedFrameRate = preserveNestedFrameRate;
        }
    }
    app.endUndoGroup();
})();
