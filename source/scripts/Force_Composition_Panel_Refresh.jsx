/**
 * @name Force Composition Panel Refresh
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Force the Composition Panel to refresh the current frame.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function forceCompositionPanelRefresh() {
    var comp = app.project.activeItem;
    comp.motionBlur = !comp.motionBlur;
    comp.motionBlur = !comp.motionBlur;
})();
