/**
 * @name Add Assorted Composition Guides
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add guides to the current composition. Supports "Edges", "Center", "Action Safe",
 * and "Title Safe" at all aspect ratios.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addAssortedCompositionGuides() {

    var Guide = {
        "HORIZONTAL": 0,
        "VERTICAL": 1
    };

    function getGuideSettings() {
        var win = new Window("dialog", "Add Guides");
        win.alignChildren = ["left", "top"];
        var checkbox1 = win.add("checkbox", undefined, "Edges");
        checkbox1.value = true;
        var checkbox2 = win.add("checkbox", undefined, "Center");
        checkbox2.value = true;
        var checkbox3 = win.add("checkbox", undefined, "Action Safe");
        checkbox3.value = true;
        var checkbox4 = win.add("checkbox", undefined, "Title Safe");
        checkbox4.value = true;
        var buttonRow = win.add("group");
        buttonRow.add("button", undefined, "Cancel", {"name": "cancel"});
        buttonRow.add("button", undefined, "Okay", {"name": "ok"});

        if (win.show() === 1) {
            return {
                "outer": checkbox1.value,
                "center": checkbox2.value,
                "action": checkbox3.value,
                "title": checkbox4.value
            };
        } else {
            return false;
        }
    }

    app.beginUndoGroup("Add Title Safe Guides");
    var guides = getGuideSettings();
    if (guides !== false) {
        var comp = app.project.activeItem;
        var w = comp.width;
        var h = comp.height;

        while (comp.guides.length > 0) {
            comp.removeGuide(0);
        }

        if (guides.outer === true) {
            comp.addGuide(Guide.HORIZONTAL, 0);
            comp.addGuide(Guide.HORIZONTAL, h);
            comp.addGuide(Guide.VERTICAL, 0);
            comp.addGuide(Guide.VERTICAL, w);
        }

        if (guides.center === true) {
            comp.addGuide(Guide.HORIZONTAL, h * 0.5);
            comp.addGuide(Guide.VERTICAL, w * 0.5);
        }

        if (guides.action === true) {
            comp.addGuide(Guide.HORIZONTAL, h * 0.05);
            comp.addGuide(Guide.HORIZONTAL, h * 0.95);
            comp.addGuide(Guide.VERTICAL, w * 0.05);
            comp.addGuide(Guide.VERTICAL, w * 0.95);
        }

        if (guides.title === true) {
            comp.addGuide(Guide.HORIZONTAL, h * 0.1);
            comp.addGuide(Guide.HORIZONTAL, h * 0.9);
            comp.addGuide(Guide.VERTICAL, w * 0.1);
            comp.addGuide(Guide.VERTICAL, w * 0.9);
        }
    }
    app.endUndoGroup();

})();
