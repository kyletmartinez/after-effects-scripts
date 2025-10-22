/**
 * @name Add Selected Compositions To Render Queue
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add the selected compositions to the Render queue defaulting to using the
 * "H.264 MP4" Output Template. However, if the composition name contains the characters "_TEXT_"
 * anywhere in the name, then use the "Apple ProRes 4444 + Alpha" Output Template.
 *
 * > [!CAUTION]
 * > These script was built for a very specific use-case and requires both Output Templates to exist
 * > in your After Effects project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */


(function addSelectedCompsToRenderQueue() {

    var Template = {
        "MOV": "Apple ProRes 4444 + Alpha",
        "MP4": "H.264 MP4"
    };

    function addCompToRenderQueue(comp) {
        var templateName = (comp.name.indexOf("_TEXT_") !== -1) ? Template.MOV : Template.MP4;
        var renderQueueItem = app.project.renderQueue.items.add(comp);
        renderQueueItem.outputModule(1).applyTemplate(templateName);
    }

    app.beginUndoGroup("Add Selected Comps To Render Queue");
    var items = app.project.selection;
    var numItems = items.length;
    for (var i = 0; i < numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            addCompToRenderQueue(item);
        }
    }
    app.endUndoGroup();
})();
