/**
 * @name Add Comments To Selected Items
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a comment to all selected compositions in the project file
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addCommentToSelectedItems() {
    app.beginUndoGroup("Add Comments to Selected Items");
    var comment = prompt("Comment", "render%%Apple-ProRes-422-HQ");
    if (comment && comment.length > 0) {
        var items = app.project.selection;
        var numItems = items.length;
        for (var i = 0; i < numItems; i++) {
            var item = items[i];
            if (item instanceof CompItem) {
                item.comment = comment;
            }
        }
    }
    app.endUndoGroup();
})();
