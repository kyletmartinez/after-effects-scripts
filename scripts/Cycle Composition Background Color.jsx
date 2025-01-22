/**
 * @name Cycle Composition Background Color
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Cycle the composition background color between "black", "gray", and "white".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function cycleCompositionBackgroundColor() {

    function getAverage(value) {
        return (value[0] + value[1] + value[2]) / 3;
    }

    function getOldValue(value) {
        return Math.round(value * 2) / 2;
    }

    function getNewValue(value) {
        return (value + 0.5) % 1.5;
    }

    app.beginUndoGroup("Cycle Composition Background Color");
    var comp = app.project.activeItem;
    var avgValue = getAverage(comp.bgColor);
    var oldValue = getOldValue(avgValue);
    var newValue = getNewValue(oldValue);
    comp.bgColor = [newValue, newValue, newValue];
    app.endUndoGroup();
})();