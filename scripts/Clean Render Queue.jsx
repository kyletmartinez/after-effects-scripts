/**
 * @name Clean Render Queue
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Clean out the Render Queue.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var renderQueue = app.project.renderQueue;
    while (renderQueue.numItems > 0) {
        renderQueue.item(1).remove();
    }
})();