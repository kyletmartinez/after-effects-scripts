/**
 * @title Version Up Comps
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Typically my main compositions will end in a version number "_v05". This script
 * will automatically version-up any comp with a version number such as "_v06".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */


(function() {
    app.beginUndoGroup("Version Up Comps");
    var project = app.project;
    var items = project.items;
    var numItems = items.length;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            var oldName = item.name;
            if (/.*_v[0-9]*/g.test(oldName) == true) {
                var oldNameArray = oldName.split("_v");
                var oldVersionString = oldNameArray[oldNameArray.length - 1];
                var oldVersionInteger = parseInt(oldVersionString);
                var newVersionInteger = oldVersionInteger + 1;
                var newVersionString = (newVersionInteger < 10) ? "0" + newVersionInteger : newVersionInteger.toString();
                oldNameArray.pop();
                var newName = oldNameArray.join("") + "_v" + newVersionString;
                item.name = newName;
            }
        }
    }
    app.endUndoGroup(); 
})()