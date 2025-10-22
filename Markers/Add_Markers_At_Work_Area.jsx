/**
 * @name Add Markers At Work Area
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add new markers to both the beginning and the end of the Work Area with matching
 * "start" and "end" comments.
 *
 * Pairs well with "Set_Work_Area_To_Markers.jsx"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addMarkersAtWorkArea() {
    app.beginUndoGroup("Add Markers At Work Area");
    var comp = app.project.activeItem;
    var sWorkArea = comp.workAreaStart;
    var eWorkArea = sWorkArea + comp.workAreaDuration;

    var sMarker = new MarkerValue("start");
    var eMarker = new MarkerValue("end");

    comp.markerProperty.setValueAtTime(sWorkArea, sMarker);
    comp.markerProperty.setValueAtTime(eWorkArea, eMarker);

    app.endUndoGroup();
})();
