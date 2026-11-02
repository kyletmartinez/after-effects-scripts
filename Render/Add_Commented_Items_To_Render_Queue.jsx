/**
 * @name Add Commented Items To Render Queue
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add all eligible compositions to the Render Queue. A composition is considered
 * eligible when it has a comment that matches the "render%%template" format.
 *
 * > [!CAUTION]
 * > Specified render templates should exist within the project. For example this script is
 * > generally expecting either Apple ProRes 422 HQ or Apple ProRes 4444 + Alpha. There is no error
 * > checking so missing templates will not fail gracefully.
 *
 * Once a composition has been added and a template has been applied the final file will be
 * converted from hyphan-delimited "-" to underscore-delimited "_" naming per client request.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addCommentedItemsToRenderQueue() {

    function getFileName(item) {
        return item.name.replace(/-/g, "_");
    }

    function getTemplateName(commentFragment) {
        return commentFragment.replace(/-/g, " ");
    }

    app.beginUndoGroup("Add Commented Items To Render Queue");
    var items = app.project.items;
    var numItems = app.project.numItems;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            var match = item.comment.match(/(render)%%(\S+)/i);
            if (match && match[1] && match[1] === "render") {
                var renderQueueItem = app.project.renderQueue.items.add(item);
                var templateName = getTemplateName(match[2]);
                renderQueueItem.outputModule(1).applyTemplate(templateName);
                var fileName = getFileName(item);
                var outputModuleData = {
                    "Output File Info": {
                        "Base Path": fileName,
                        "File Name": fileName + ".mov"
                    }
                };
                renderQueueItem.outputModule(1).setSettings(outputModuleData);
            }
        }
    }
    app.endUndoGroup();

})();
