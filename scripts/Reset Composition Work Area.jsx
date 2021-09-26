/**
 * @title Reset Composition Work Area
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the Work Area to cover the entire composition
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Reset Composition Work Area");
    var comp = app.project.activeItem;
    comp.workAreaStart = 0;
    comp.workAreaDuration = comp.duration;
    app.endUndoGroup();
})();