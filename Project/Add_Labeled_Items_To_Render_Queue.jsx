/**
 * @name Add Labeled Items To Render Queue
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add all compositions to the Render Queue that have the specified label.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addLabeledItemsToRenderQueue() {

    var Label = {
        "NONE": 0,
        "RED": 1,
        "PINK": 2,
        "PURPLE": 3,
        "DEEP_PURPLE": 4,
        "INDIGO": 5,
        "BLUE": 6,
        "CYAN": 7,
        "TEAL": 8,
        "GREEN": 9,
        "LIME_GREEN": 10,
        "YELLOW": 11,
        "AMBER": 12,
        "ORANGE": 13,
        "DEEP_ORANGE": 14,
        "WHITE": 15,
        "BLACK": 16
    };

    var TARGET_LABEL = Label.GREEN;

    app.beginUndoGroup("Add Labeled Items To Render Queue");
    var project = app.project;
    var items = project.items;
    var numItems = project.numItems;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            if (item.label === TARGET_LABEL) {
                app.project.renderQueue.items.add(item);
            }
        }
    }
    app.endUndoGroup();

})();
