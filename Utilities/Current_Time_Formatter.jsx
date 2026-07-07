/**
 * @name Current Time Formatter
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Hover over the panel to update current time in multiple formats: "timecode",
 * "seconds", "frames", and "milliseconds".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function currentTimeFormatter(thisObj) {

    if (thisObj instanceof Panel) {
        var win = thisObj;
    } else {
        var win = new Window("palette", "CTI Time Display", undefined, {"resizeable": true});
    }

    var text = win.add("edittext", [0, 0, 300, 80], "", {"multiline": true});
    text.addEventListener("mouseover", function() {
        var comp = app.project.activeItem;
        if (comp && comp instanceof CompItem) {

            var time = comp.time;
            var fps = comp.frameRate;

            var timecode = timeToCurrentFormat(time, fps);
            var frames = Math.floor(time * fps);
            var milliseconds = Math.round(time * 1000);

            text.text = [
                "Timecode: " + timecode,
                "Time: " + time.toFixed(4),
                "Frames: " + frames,
                "Milliseconds: " + milliseconds
            ].join("\n");
        }
    });

    win.onResizing = win.onResize = function() {
        this.layout.resize();
    };

    if (win instanceof Window) {
        win.center();
        win.show();
    } else {
        win.layout.layout(true);
        win.layout.resize();
    }

})(this);
