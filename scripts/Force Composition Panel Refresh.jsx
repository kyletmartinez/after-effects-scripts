/**
 * @name Force Composition Panel Refresh
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Force the Composition Panel to refresh the current frame.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier.
 *
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function forceCompositionPanelRefresh() {
    var comp = app.project.activeItem;
    comp.motionBlur = !comp.motionBlur;
    comp.motionBlur = !comp.motionBlur;
})();