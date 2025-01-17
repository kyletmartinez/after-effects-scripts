/**
 * @name Center Composition
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Center the composition in the Composition Panel. Hold ALT or SHIFT for other values.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function centerComposition() {
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var shiftKey = ScriptUI.environment.keyboardState.shiftKey;
    if (altKey === false && shiftKey === false) {
        app.activeViewer.views[0].options.zoom = 0.5;
    } else if (altKey === true && shiftKey === false) {
        app.activeViewer.views[0].options.zoom = 1.0;
    } else if (altKey === false && shiftKey === true) {
        app.activeViewer.views[0].options.zoom = 0.25;
    }
})();