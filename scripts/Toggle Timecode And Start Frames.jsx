/**
 * @name Toggle Timecode And Start Frames
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Toggle timecode between two different values:
 *
 * * Timecode starts at "0:00:00:00" and composition frames start on "0"
 * * Timecode starts at "0:00:00:00" and composition frames start on "1"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function toggleTimecodeAndStartFrames() {
    app.beginUndoGroup("Toggle Timecode and Start Frame(s)");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var project = app.project;
    if (altKey === false) {
        project.framesCountType = FramesCountType.FC_START_0;
    } else {
        project.framesCountType = FramesCountType.FC_START_1;
    }
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            item.displayStartFrame = 0;
        }
    }
    app.endUndoGroup();
})();
