/**
 * @name Add Numbered Markers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Remove existing markers and add new numbered markers at regular intervals
 * throughout the active composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addNumberedMarkers() {

    function padNumber(num) {
        return (num < 10) ? "0" + String(num) : String(num);
    }

    app.beginUndoGroup("Add Numbered Markers");
    var comp = app.project.activeItem;
    var markers = comp.markerProperty;

    var seconds = prompt("Interval (Seconds):", "1.5");
    if (seconds === null || seconds.length === 0) {
        return;
    }

    var interval = Number(seconds);
    if (isNaN(interval)) {
        return;
    }

    for (var m = markers.numKeys; m >= 1; m--) {
        markers.removeKey(m);
    }

    var duration = comp.duration;
    for (var time = 0; time < duration; time += interval) {
        var marker = new MarkerValue(padNumber((time / interval) + 1));
        markers.setValueAtTime(time, marker);
    }

    app.endUndoGroup();
    
})();
