/**
 * @name Toggle Timecode And All Start Frames
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the "Frame Count" menu setting in the "Project Settings" dialog box to "Start
 * at 0".
 *
 * * "FramesCountType.FC_START_1"
 * * "FramesCountType.FC_START_0"
 * * "FramesCountType.FC_TIMECODE_CONVERSION"
 *
 * Set the Display Start Frame for every composition in the project to "0". Hold the "ALT" key to
 * set the Display Start Frame for every composition in the project to "1".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function toggleStartFrames() {

    function setCompositionStartFrame(comp, altKey) {
        comp.displayStartFrame = (altKey === true) ? 0 : 1;
    }

    function setTimeDisplayStyle(project) {
        project.framesCountType = FramesCountType.FC_START_0;
    }

    app.beginUndoGroup("Toggle Start Frame(s)");
    var altKey = ScriptUI.environment.keyboardState.altKey;
    var project = app.project;
    setTimeDisplayStyle(project);
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            setCompositionStartFrame(item, altKey);
        }
    }
    app.endUndoGroup();

})();
