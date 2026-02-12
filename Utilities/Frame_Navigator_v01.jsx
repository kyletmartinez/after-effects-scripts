/**
 * @name Frame Navigator
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Easily navigate the timeline by moving the Current Time Indicator as needed:
 *
 * * Jump to Composition start/end
 * * Jump to Work Area start/end
 *
 * > [!TIP]
 * > Frame jumping is "snapped". This means if you're animating on 3s then the Current Time
 * > Indicator will snap to every 3rd frame.
 *
 * * Hold "Alt" to jump 1 frame from the current frame
 * * Hold "Shift" to jump 10 frames from the current frame
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function frameNavigator(thisObj) {

    function superMoveCurrentTimeIndicator(direction) {
        var comp = app.project.activeItem;
        var directions = {
            "backward": comp.displayStartTime,
            "forward": comp.displayStartTime + comp.duration
        };
        comp.time = directions[direction];
    }

    function workAreaMoveCurrentTimeIndicator(direction) {
        var comp = app.project.activeItem;
        var directions = {
            "backward": comp.workAreaStart,
            "forward": comp.workAreaStart + comp.workAreaDuration
        };
        comp.time = directions[direction];
    }

    function getSnappedFrame(currentFrame, interval, direction) {
        var snap = (direction === -1) ? Math.floor : Math.ceil;
        return snap((currentFrame + direction) / interval) * interval;
    }

    function moveCurrentTimeIndicator(direction, distance) {
        var altKey = ScriptUI.environment.keyboardState.altKey;
        var shiftKey = ScriptUI.environment.keyboardState.shiftKey;

        var comp = app.project.activeItem;
        var currentFrame = Math.round(comp.time / comp.frameDuration);
        var dist = Number(distance);

        var targetFrame;
        if (shiftKey) {
            targetFrame = currentFrame + (10 * direction);
        } else if (altKey) {
            targetFrame = currentFrame + direction;
        } else {
            targetFrame = getSnappedFrame(currentFrame, dist, direction);
        }

        comp.time = targetFrame * comp.frameDuration;
    }

    if (thisObj instanceof Panel) {
        var win = thisObj;
    } else {
        var win = new Window("palette", "Frame Navigator", undefined, {"resizeable": true});
    }

    win.orientation = "row";

    var bpan = win.add("panel");
    bpan.orientation = "row";

    var allTheWayBackButton = bpan.add("button", undefined, "<<");
    allTheWayBackButton.preferredSize.width = 40;
    allTheWayBackButton.helpTip = "Move to Composition Start";
    allTheWayBackButton.onClick = function() {
        superMoveCurrentTimeIndicator("backward");
    };

    var workAreaBackButton = bpan.add("button", undefined, "[<");
    workAreaBackButton.preferredSize.width = 40;
    workAreaBackButton.helpTip = "Move to Work Area Start";
    workAreaBackButton.onClick = function() {
        workAreaMoveCurrentTimeIndicator("backward");
    };

    var backwardButton = bpan.add("button", undefined, "<");
    backwardButton.preferredSize.width = 40;
    backwardButton.helpTip = "Snap to previous interval\nShift: Jump 10 frames\nAlt: Jump 1 frame";
    backwardButton.onClick = function() {
        moveCurrentTimeIndicator(-1, frameDuration.text);
    };

    var frameDuration = win.add("edittext {justify: 'center'}");
    frameDuration.text = "6";
    frameDuration.preferredSize.width = 40;
    frameDuration.helpTip = "Frame(s)";

    var fpan = win.add("panel");
    fpan.orientation = "row";

    var forwardButton = fpan.add("button", undefined, ">");
    forwardButton.preferredSize.width = 40;
    forwardButton.helpTip = "Snap to next interval\nShift: Jump 10 frames\nAlt: Jump 1 frame";
    forwardButton.onClick = function() {
        moveCurrentTimeIndicator(1, frameDuration.text);
    };

    var workAreaForwardButton = fpan.add("button", undefined, ">]");
    workAreaForwardButton.preferredSize.width = 40;
    workAreaForwardButton.helpTip = "Move to Work Area End";
    workAreaForwardButton.onClick = function() {
        workAreaMoveCurrentTimeIndicator("forward");
    };

    var alltheWayForward = fpan.add("button", undefined, ">>");
    alltheWayForward.preferredSize.width = 40;
    alltheWayForward.helpTip = "Move to Composition End";
    alltheWayForward.onClick = function() {
        superMoveCurrentTimeIndicator("forward");
    };

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
