/**
 * @name Set All Item Lables to None
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Reset the label colors for all items in the active project as None.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var LABEL = 0;

    app.beginUndoGroup("Set All Item Lables to None");
    var project = app.project;
    var items = project.items;
    var numItems = items.length;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        item.label = LABEL;
    }
    app.endUndoGroup();
})();