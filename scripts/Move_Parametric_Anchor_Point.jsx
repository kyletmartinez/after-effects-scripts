/**
 * @name Move Parametric Anchor Point
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select the "Position" property of a parametric Rectangle or Ellipse and apply an
 * expression to move the Anchor Point. This allows shapes to have their sizes change but remain
 * locked to one edge.
 *
 * Use the popup window to choose which side to move the Anchor Point:
 * "Top"
 * "Left"
 * "Bottom"
 * "Right"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function moveParametricAnchorPoint() {

    var matchnames = {
        "ADBE Vector Ellipse Position": true,
        "ADBE Vector Rect Position": true
    };

    var expressions = {
        "top": "[0, thisProperty.propertyGroup(1).size[1] / 2];",
        "left": "[thisProperty.propertyGroup(1).size[0] / 2, 0];",
        "bottom": "[0, thisProperty.propertyGroup(1).size[1] / -2];",
        "right": "[thisProperty.propertyGroup(1).size[0] / -2, 0];"
    };

    function getAnchorPointPosition() {
        var win = new Window("dialog", "Anchor Point");
        win.orientation = "column";
        win.alignChildren = ["fill", "top"];
        var positionOptions = ["Top", "Left", "Bottom", "Right"];
        var dropdown = win.add("dropdownlist", undefined, positionOptions);
        dropdown.selection = 0;
        var buttons = win.add("group");
        buttons.add("button", undefined, "Cancel", {"name": "cancel"});
        buttons.add("button", undefined, "Okay", {"name": "ok"});
        return (win.show() === 1) ? dropdown.selection.text : false;
    }

    app.beginUndoGroup("Move Parametric Anchor Point");
    var position = getAnchorPointPosition();
    if (position !== false) {
        var comp = app.project.activeItem;
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (matchnames.hasOwnProperty(property.matchName) === true) {
                property.expression = expressions[position.toLowerCase()];
            }
        }
    }
    app.endUndoGroup();
})();
