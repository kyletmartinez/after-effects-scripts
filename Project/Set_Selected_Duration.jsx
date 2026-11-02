/**
 * @name Set Selected Duration
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the duration of all selected compositions in the Project Panel.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setSelectedDuration() {
    app.beginUndoGroup("Set Selected Duration");
    var newDurationString = prompt("New Duration (Seconds)", "10");
    if (newDurationString !== null && newDurationString.length > 0) {
        var duration = parseFloat(newDurationString);
        if (isNaN(duration) === false && duration > 0) {
            var items = app.project.selection;
            var numItems = items.length;
            for (var i = 0; i < numItems; i++) {
                var item = items[i];
                if (item instanceof CompItem) {
                    item.duration = duration;
                }
            }
        }
    }
    app.endUndoGroup();
})();
