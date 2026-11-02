/**
 * @name Add Time Spans To Render Queue
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add composition time spans to the render queue based on markers in the active
 * composition. Creates separate render items for each time span between markers, with output
 * files named using marker comments.
 *
 * > [!CAUTION]
 * > These script was built for a very specific use-case and requires a sepcific Output Template
 * > to exist in your After Effects project. Feel free to adjust.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addTimeSpansToRenderQueue() {

    var OUTPUT_TEMPLATE = "H.264 MP4";

    app.beginUndoGroup("Add Time Spans To Render Queue");

    var renderQueue = app.project.renderQueue;
    var desktopPath = new Folder(Folder.desktop).fsName;

    var comp = app.project.activeItem;
    var markers = comp.markerProperty;
    var numMarkers = markers.numKeys;

    var fileName = prompt("File Name", comp.name)

    for (var m = 1; m <= numMarkers; m++) {

        var timeSpanStart = markers.keyTime(m);
        var timeSpanEnd = (m < numMarkers) ? markers.keyTime(m + 1) : comp.duration;
        var timeSpanDuration = timeSpanEnd - timeSpanStart;

        var comment = markers.keyValue(m).comment;

        var renderItem = renderQueue.items.add(comp);

        renderItem.timeSpanStart = timeSpanStart;
        renderItem.timeSpanDuration = timeSpanDuration;

        var outputModule = renderItem.outputModule(1);
        outputModule.applyTemplate(OUTPUT_TEMPLATE);
        var outputModuleData = {
            "Output File Info": {
                "Base Path": desktopPath,
                "File Name": fileName + "_" + comment
            }
        };
        outputModule.setSettings(outputModuleData);
    }

    app.endUndoGroup();
    
})();
