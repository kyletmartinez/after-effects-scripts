/**
 * @name Set All Item Labels To None
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the label for all items in the current project to "None" or label "0".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setAllItemLabelsToNone() {
    app.beginUndoGroup("Set All Item Labels To None");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        items[i].label = 0;
    }
    app.endUndoGroup();
})();
