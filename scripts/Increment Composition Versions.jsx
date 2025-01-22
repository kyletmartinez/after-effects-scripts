/**
 * @name Increment Composition Versions
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Increment any version numbers found in the name of all compositions in the current
 * project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function incrementCompositionVersions() {

    function incrementVersionNumber(comp) {
        var oldArray = comp.name.split("_v");
        var oldString = oldArray.pop();
        var oldInteger = parseInt(oldString, 10);
        var newInteger = oldInteger + 1;
        var newString = (newInteger < 9) ? "0" + newInteger : newInteger;
        var newName = oldArray.join("") + "_v" + newString;
        comp.name = newName;
    }

    app.beginUndoGroup("Increment Composition Version(s)");
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            if (/.*_v[0-9]*/g.test(item.name) == true) {
                incrementVersionNumber(item);
            }
        }
    }
    app.endUndoGroup(); 
})();