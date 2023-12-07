/**
 * @name Remove All Proxies
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Remove all proxies set within the project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */


(function() {
    try {
        app.beginUndoGroup("Remove All Proxies");
        var project = app.project;
        var items = project.items;
        var numItems = items.length;
        for (var p = 1; p <= numItems; p++) {
            var item = items[p];
            if (item instanceof CompItem) {
                if (item.useProxy === true) {
                    item.setProxyToNone()
                }
            }
        }
    } catch (err) {
        alert(err);
    } finally {
        app.endUndoGroup();
    }
})()