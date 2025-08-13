/**
 * @name Set Work Area To Markers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the Work Area Start and Duration to match composition markers.
 *
 * Pairs well with "Add_Markers_At_Work_Area.jsx"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setWorkAreaToMarkers() {

    app.beginUndoGroup("Set Work Area To Markers");
    var comp = app.project.activeItem;

    var sMarker = comp.markerProperty.keyTime(1);
    var eMarker = comp.markerProperty.keyTime(2);

    var duration = eMarker - sMarker;

    comp.workAreaStart = sMarker;
    comp.workAreaDuration = duration;

    app.endUndoGroup();

})();
