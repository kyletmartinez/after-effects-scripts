/**
 * @name Add Simple Loop Expression
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a loop expression to all selected properties. Use the popup window to customize
 * the loop or press the "Enter" key to use the defaults.
 *
 * Loop Directions:
 * * "loopIn()"
 * * "loopOut()" (default)
 *
 * Loop Types:
 * * "cycle" (default)
 * * "pingpong"
 * * "offset"
 * * "continue"
 *
 * Keyframes:
 * * "0" (default)
 * * "X"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addLoopExpression() {

    function getLoopValues() {
        var win = new Window("dialog", "Simple Loop");
        win.alignChildren = ["right", "top"];

        var row1 = win.add("group");
        row1.add("statictext", undefined, "Direction:");
        var directionOptions = ["loopIn", "loopOut"];
        var directionDropdown = row1.add("dropdownlist", undefined, directionOptions);
        directionDropdown.selection = 1;
        directionDropdown.preferredSize.width = 100;

        var row2 = win.add("group");
        row2.add("statictext", undefined, "Type:");
        var typeOptions = ["continue", "cycle", "offset", "pingpong"];
        var typeDropdown = row2.add("dropdownlist", undefined, typeOptions);
        typeDropdown.selection = 1;
        typeDropdown.preferredSize.width = 100;

        var row3 = win.add("group");
        row3.add("statictext", undefined, "Keyframes:");
        var keyframeEdittext = row3.add("edittext", undefined, "0");
        keyframeEdittext.preferredSize.width = 100;

        var row4 = win.add("group");
        row4.add("button", undefined, "Cancel", {"name": "cancel"});
        row4.add("button", undefined, "Okay", {"name": "ok"});

        if (win.show() === 1) {
            return {
                "direction": String(directionDropdown.selection.text),
                "type": String(typeDropdown.selection.text),
                "keyframes": parseInt(keyframeEdittext.text, 10)
            };
        } else {
            return false;
        }
    }

    function getLoopExpression(loop) {
        var keyframes = (loop.keyframes === 0) ? "" : ", " + loop.keyframes;
        return loop.direction + "(\"" + loop.type + "\"" + keyframes + ");";
    }

    function setLoopExpression(property, expression) {
        if (property.propertyType === PropertyType.PROPERTY) {
            if (property.isTimeVarying === true) {
                if (property.canSetExpression === true) {
                    property.expression = expression;
                }
            }
        }
    }

    app.beginUndoGroup("Add Loop Expression");
    var loopValues = getLoopValues();
    if (loopValues !== false) {
        var expression = getLoopExpression(loopValues);
        var comp = app.project.activeItem;
        var properties = comp.selectedProperties;
        var numProperties = properties.length;
        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            setLoopExpression(property, expression);
        }
    }
    app.endUndoGroup();
})();
