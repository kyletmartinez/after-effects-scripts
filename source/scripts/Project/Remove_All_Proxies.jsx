/**
 * @name Remove All Proxies
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Remove all proxies within the current project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function removeAllProxies() {
    app.beginUndoGroup("Remove All Proxies");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem && item.useProxy) {
            item.setProxyToNone();
        }
    }
    app.endUndoGroup();
})();
