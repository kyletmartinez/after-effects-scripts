/**
 * @name Clean Render Queue
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Clean out the Render Queue.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function cleanRenderQueue() {
    app.beginUndoGroup("Clean Render Queue");
    var renderQueue = app.project.renderQueue;
    for (var i = renderQueue.numItems; i > 0; i--) {
        renderQueue.item(i).remove();
    }
    app.endUndoGroup();
})();
