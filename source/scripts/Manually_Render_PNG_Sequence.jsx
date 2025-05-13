/**
 * @name Manually Render PNG Sequence
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description I wrote this script because the Render Queue was being annoying, spitting out
 * renders with issues, and I didn't have time to troubleshoot the problem.
 *
 * Instead, simply set your "Work Area" then run the script to select where the PNG Sequence should
 * be rendered.
 *
 * > [!CAUTION]
 * > I don't recommend using this script regulary. "saveFrameToPng()" is officially undocumented and
 * > was found via research. The whole function may disappear or even completely stop working. The
 * > quality does not compare to using the Render Queue.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function manuallyRenderPNGSequence() {

    String.prototype.padStart = function(targetLength, padString) {
        return Array(Math.max(targetLength - this.length + 1, 0)).join(padString) + String(this);
    };

    function timeToFrames(time, frameRate) {
        return Math.round(time * frameRate);
    }

    function exportFrame(comp, path) {
        var frames = timeToFrames(comp.time, comp.frameRate);
        var name = comp.name + "_" + String(frames).padStart(5, "0");
        comp.saveFrameToPng(comp.time, File(path + "/" + name + ".png"));
        var workAreaEnd = comp.workAreaStart + comp.workAreaDuration;
        if (comp.time <= workAreaEnd) {
            setActiveTime(comp, path);
        }
    }

    function setActiveTime(comp, path) {
        comp.time = comp.time + comp.frameDuration;
        exportFrame(comp, path);
    }

    function createDestinationFolder(path) {
        var folder = new Folder(path);
        if (folder.exists === false) {
            folder.create();
        }
        return folder;
    }

    var folder = Folder.selectDialog();
    if (folder !== null) {
        var comp = app.project.activeItem;
        var path = createDestinationFolder(folder.fsName + "/" + comp.name).fsName;
        comp.time = comp.workAreaStart - comp.frameDuration;
        setActiveTime(comp, path);
    }
})();
